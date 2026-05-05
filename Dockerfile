FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
# building container  docker build -t myapp . 
# Run container    docker run -p 3000:3000 myapp