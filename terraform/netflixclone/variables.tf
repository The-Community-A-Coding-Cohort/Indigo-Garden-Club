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

variable "alidation_record_fqdns" {
  description = "Full FQDNS of domain"
}