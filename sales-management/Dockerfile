FROM node:20
WORKDIR /usr/src/sales-management


COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3002

CMD ["npm", "start"]