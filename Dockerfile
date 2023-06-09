FROM node:16.15-alpine3.14

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .
EXPOSE 3000

CMD ["node", "index.js"]