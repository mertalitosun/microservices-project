FROM node:22.12.0
WORKDIR /usr/src/api-gateway


COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3004

CMD ["npm", "start"]