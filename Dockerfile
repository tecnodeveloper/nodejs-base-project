FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm install
CMD ["npm","start"]
EXPOSE 3000