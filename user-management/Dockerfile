FROM node:20
WORKDIR /usr/src/user-management
RUN apt-get update && apt-get install -y build-essential

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3001

CMD ["npm", "start"]