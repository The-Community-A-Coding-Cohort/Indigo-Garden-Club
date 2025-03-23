resource "aws_lb" "alb" {
  name               = "nextjs-alb"
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = aws_subnet.public

  depends_on = [ aws_subnet.public ]
}

resource "aws_lb_target_group" "target_group" {
  name     = "nextjs-tg"
  port     = 3000
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id

  health_check {
    path                = "/"
    protocol            = "HTTP"
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
  }
}
