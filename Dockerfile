FROM node:18.13.0 AS build-env

# set the working directory to /app
WORKDIR /app
# copy the current directory contents into the container at /app
COPY . .
RUN npm install
RUN npm run

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
# copy the built application from the build stage to the nginx html directory
COPY --from=build-env /app /usr/share/nginx/html