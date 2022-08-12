# Stage 1 Build
FROM node as react-build
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . ./
RUN npm run-script build


# Stage 2 - the production environment
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
