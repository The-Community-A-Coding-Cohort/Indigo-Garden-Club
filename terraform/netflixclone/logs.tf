resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name              = "/ecs/nextjs-logs"
  retention_in_days = 7
}