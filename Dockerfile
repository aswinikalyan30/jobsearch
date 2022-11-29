FROM node:18.12-alpine


WORKDIR /app

COPY package.json /app

EXPOSE 3000


RUN npm install

COPY . .

CMD ["npm", "start"]

