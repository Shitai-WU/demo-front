FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
COPY dist/givaudan-demo-front /usr/src/app
RUN npm install -g @angular/cli
CMD ng serve
EXPOSE 4200
