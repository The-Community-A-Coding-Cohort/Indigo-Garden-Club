terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.0.0"

  backend "s3" {
    bucket         = "the-community-a-coding-cohort-tf-state-bucket"      
    key            = "nextjs/terraform.tfstate"        
    region         = "us-east-1"                       
    dynamodb_table = "terraform-locks"                  
    encrypt        = true
  }
}

provider "aws" {
  region = var.region
}