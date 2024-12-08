FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY tsconfig.json ./
COPY nest-cli.json ./

COPY apps/payments apps/payments
COPY libs libs

CMD ["npm", "run", "start:dev"]