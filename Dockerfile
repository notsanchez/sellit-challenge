FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g drizzle-kit

RUN apt-get update && apt-get install -y netcat-traditional

COPY . .

RUN npm run build

CMD /bin/bash -c "until nc -z -v -w30 db 5432; do echo 'Aguardando banco de dados inicializar'; sleep 5; done; npm run migrate && npm start"

EXPOSE 3000
