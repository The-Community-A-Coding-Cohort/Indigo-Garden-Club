# [Indigo Garden Club](https://indigofool.com) 🚀

Welcome to **Indigo Garden Club** – a Next.js application where you can stream indie movies while supporting independent filmmakers by offering them higher margins. Enjoy a sleek, responsive interface built with modern web technologies and designed for an outstanding viewing experience.

---

## Description

Indigo Garden Club is a responsive web application that allows users to explore and stream a curated collection of indie films. With a focus on community and fair returns for filmmakers, the platform provides an intuitive interface, smooth streaming, and interactive features for movie enthusiasts.

TODO: Include impressive technologies used

---

## Screenshots

### Main Header
![Header](netflixclone/public/readme/header.png)

### Old Header (Legacy)
![Old Header](netflixclone/public/readme/old/layout.png)

### Old Sign-In Screen (Legacy)
![Sign In](netflixclone/public/readme/old/signin.png)

---

## Environment Variables

To run this project, create a `.env` file in the root directory with the following keys. **Do not disclose these secrets publicly!**
```
DATABASE_URL=

NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_API_BASE_URL=

GIT_CLIENT_ID=
GIT_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## Terraform & GitHub Actions Deployment

This repository uses Terraform to deploy the application onto AWS via GitHub Actions. Ensure you have set up your AWS credentials appropriately before deployment. If you are working in a forked repository you will also need to set up the following Actions secrets for the deployment to run:
```
DATABASE_URL
ECR_REPOSITORY_URL
GIT_CLIENT_ID
GIT_CLIENT_SECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
HOSTED_ZONE_ID
INDIGO_FOOL_VPC_ID
NEXTAUTH_JWT_SECRET
NEXTAUTH_SECRET
NEXTAUTH_URL
NEXT_PUBLIC_API_BASE_URL
VALIDATION_RECORD_FQDNS

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

---

## Deployment 🚀

### Install Dependencies
```bash
npm install
npm run dev
npm run build
npm run deploy
```

---

## System Requirements 💻
- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **Terraform**: (For local deployment and managing AWS infrastructure)
- **AWS Account**: For production deployment

---

## Required Plugins & Dependencies 🛠️

This project relies on several plugins and dependencies to ensure a smooth development and deployment experience:
Dev Dependencies:
- **@types/lodash**: Type definitions for lodash.
- **concurrently**: Run multiple commands concurrently.
- **prisma**: ORM for managing and migrating your database schema.
- **wait-on**: Wait for files, ports, sockets, or http(s) resources to become available.
Dependencies:
- **@mux/mux-node**: Mux API client for Node.js.
- **@mux/mux-player-react**: React component for embedding the Mux Player.