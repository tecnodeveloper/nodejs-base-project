FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev
CMD ["npm","start"]
EXPOSE 3000