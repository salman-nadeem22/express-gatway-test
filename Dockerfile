FROM node:lts-alpine
WORKDIR /app
ADD package.json package.json
RUN npm install
ADD . .
CMD npm run start 