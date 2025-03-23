# Declare our private network within which we can allocate addresses within safely
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "indigo-fool-vpc"
  }
}

# Provide a way for our public facing ecs to access and be accessed by the internet
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "indigo-fool-igw"
  }
}

# Fetch all available availability zones
data "aws_availability_zones" "available" {
  state = "available"
}

# Statically set up outline for a for loop to generate subnets
variable "subnet_configs" {
  type = map(object({
    az   = string
    cidr = string
  }))
  default = {
    "public-subnet-1" = { az = "us-east-1a", cidr = "10.0.3.0/24" }
    "public-subnet-2" = { az = "us-east-1b", cidr = "10.0.4.0/24" }
  }
}

# Use for_each to generate subnets based on the variable directly above
resource "aws_subnet" "public" {
  for_each = var.subnet_configs

  vpc_id            = aws_vpc.main.id
  cidr_block        = each.value.cidr
  availability_zone = each.value.az
  map_public_ip_on_launch = true

  tags = {
    Name = each.key
  }
}

# Declare route table to set up how traffic is routed to subnets
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "indigo-fool-route-table-public"
  }
}

# Define specific route within the route table to force all traffic to the gateway
resource "aws_route" "public_internet_access" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

# Make the route table use our subnets
resource "aws_route_table_association" "public_subnets" {
  for_each      = aws_subnet.public
  subnet_id     = each.value.id
  route_table_id = aws_route_table.public.id
}
