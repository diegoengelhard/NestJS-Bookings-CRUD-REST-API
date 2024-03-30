# Dockerized NestJS REST API with Prisma client & PostgreSQL

This repository contains a Dockerized NestJS REST API with Prisma client & PostgreSQL. It includes various features and setup steps as outlined below.

## Features

- Use of modules including an auth sign up and sign in logic
- PostgreSQL in Docker
- Prisma with user & bookmark models
- Use of PostgreSQL restart & Prisma migrations
- Use of Passport.js & JWT module for authentication
- NestJS Guards for authorization
- NestJS custom params decorator

## Steps to Run the App

1. Clone the repository:
```
git clone https://github.com/diegoengelhard/NestJS-Bookings-CRUD-REST-API.git
```
2. Run Docker compose:
```
docker-compose up
```