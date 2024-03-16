FROM node:19.5.0-alpine
WORKDIR /app
RUN npm install
RUN npm start

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 3000
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]