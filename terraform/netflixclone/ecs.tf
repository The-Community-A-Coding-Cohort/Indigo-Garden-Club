resource "aws_ecs_cluster" "cluster" {
  name = "nextjs-cluster"
}

resource "aws_ecs_task_definition" "task" {
  family                   = "nextjs-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "nextjs"
      image     = "${var.ecr_repository_url}:latest"
      essential = true
      portMappings = [{
        containerPort = 3000,
        hostPort      = 3000,
        protocol      = "tcp"
      }]
      secrets = [
        {
          name      = "DATABASE_URL"
          valueFrom = "${var.secrets_arn}:DATABASE_URL::"
        },
        {
          name      = "NEXTAUTH_SECRET"
          valueFrom = "${var.secrets_arn}:NEXTAUTH_SECRET::"
        },
        {
          name      = "NEXTAUTH_URL"
          valueFrom = "${var.secrets_arn}:NEXTAUTH_URL::"
        },
        {
          name      = "NEXT_PUBLIC_API_BASE_URL"
          valueFrom = "${var.secrets_arn}:NEXT_PUBLIC_API_BASE_URL::"
        },
        {
          name      = "GIT_CLIENT_ID"
          valueFrom = "${var.secrets_arn}:GIT_CLIENT_ID::"
        },
        {
          name      = "GIT_CLIENT_SECRET"
          valueFrom = "${var.secrets_arn}:GIT_CLIENT_SECRET::"
        },
        {
          name      = "GOOGLE_CLIENT_ID"
          valueFrom = "${var.secrets_arn}:GOOGLE_CLIENT_ID::"
        },
        {
          name      = "GOOGLE_CLIENT_SECRET"
          valueFrom = "${var.secrets_arn}:GOOGLE_CLIENT_SECRET::"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.ecs_log_group.name
          "awslogs-region"        = "us-east-1"
          "awslogs-stream-prefix" = "nextjs"
        }
      }
    }
  ])
}

resource "aws_ecs_service" "service" {
  name            = "nextjs-service"
  cluster         = aws_ecs_cluster.cluster.id
  task_definition = aws_ecs_task_definition.task.arn
  launch_type     = "FARGATE"
  desired_count   = 1

  network_configuration {
    subnets         = [for subnet in aws_subnet.public : subnet.id]
    security_groups = [aws_security_group.ecs_sg.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.target_group.arn
    container_name   = "nextjs"
    container_port   = 3000
  }

  depends_on = [aws_lb_listener.https, aws_subnet.public]
}