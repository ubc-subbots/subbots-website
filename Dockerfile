FROM node:10

RUN mkdir -p /var/www/subbots/

COPY . /var/www/subbots/

WORKDIR /var/www/subbots/backend

EXPOSE 80

CMD [ "npm", "start" ]
