# Random Quote Generator
This is a backend API that allows you to interact with the quotes from the TV show The Office. Sending a Get request to the base url will return a random quote along with the character who said it. There is also a /quote endpoint that allows users to interact with the quotes data via typical CRUD operations. The information for how to mass upload the quotes data to the sqlite db is below in the init DB section.

## Future Improvements
This project is the result of my first 4 hours learning to use nest.js and sqlite. Some features I would have liked to add with more time are pagination and filtering on the Get operation for the /quotes endpoint, and some sort of authorizaition to update, create and delete quotes via the api. I would also probably do more extensive mock and e2e testing.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Init DB
```
# create db file
$ sqlite3 quotesDB

# create table
$ CREATE TABLE IF NOT EXISTS "quotes" ("quote_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" varchar NOT NULL, "character" varchar NOT NULL);

# load all json data into db
$ INSERT INTO quotes(quote_id,quote,character) SELECT
    json_extract(value, '$.quote_id'), 
    json_extract(value, '$.quote'),
    json_extract(value, '$.character')
  FROM json_each(readfile('./src/data/office_quotes.json'));
```
