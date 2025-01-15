FROM node:20
WORKDIR /usr/src/customer-management

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3003

CMD ["npm", "start"]