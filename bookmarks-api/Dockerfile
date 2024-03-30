# Use node 14 as base image
FROM node:16 AS builder

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.build.json ./
COPY tsconfig.json ./

# Install app dependencies
RUN npm install

COPY . .
COPY .env ./

RUN npm run build

FROM node:16

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3500
CMD [ "npm", "run", "start:prod" ]