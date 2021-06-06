FROM ianwalter/puppeteer
WORKDIR /app
ADD . /app

RUN npm install

CMD npx wdio