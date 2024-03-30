# Dockerized NestJS REST API with Prisma client & PostgreSQL

This repository contains a Dockerized NestJS REST API with Prisma client & PostgreSQL. It includes various features and setup steps as outlined below.

## Features

- NestJS project setup
- Auth module including sign up and sign in logic
- Setting up PostgreSQL in Docker
- Setting up Prisma with user & bookmark models
- Automating PostgreSQL restart & Prisma migrations
- Using Passport.js & JWT module for authentication
- NestJS Guards for authorization
- NestJS custom param decorator

## Steps to Run the App

1. Clone the repository:
```
git clone https://github.com/diegoengelhard/NestJS-Bookings-CRUD-REST-API.git
```
2. Run Docker compose:
```
docker-compose up
```