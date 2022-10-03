FROM node:16

RUN npm install -g @angular/cli@7.3.9

ENV TZ Asia/Tokyo

WORKDIR /app

EXPOSE 4200