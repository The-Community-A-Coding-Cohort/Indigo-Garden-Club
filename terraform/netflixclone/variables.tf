variable "region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Domain name for the app (e.g., app.example.com)"
  default = "indigofool.com"
}

variable "hosted_zone_id" {
  description = "Route53 Hosted Zone ID"
}

variable "vpc_id" {
  description = "The VPC ID where resources will be deployed"
}

variable "subnets" {
  description = "List of public subnet IDs for the ALB and ECS tasks"
  type        = list(string)
}