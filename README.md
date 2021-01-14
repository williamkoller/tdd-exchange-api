[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![Build Status](https://travis-ci.com/williamkoller/tdd-exchange-api.svg?branch=main)](https://travis-ci.com/williamkoller/tdd-exchange-api)
[![Coverage Status](https://coveralls.io/repos/github/williamkoller/tdd-exchange-api/badge.svg?branch=main)](https://coveralls.io/github/williamkoller/tdd-exchange-api?branch=main)

# **TDD Exchange API**

Rest API made in MongoDB, Nestjs, using TDD (Test Driven Development), TypeORM and TypeScript.

### Requisits to run this project

- docker
- docker-compose
- npm

## Running the app

```bash
$ npm i
$ docker-compose up --build
# listening in http://localhost:3000
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:coveralls
```

<a href="https://ibb.co/Gnngvpf"><img src="https://i.ibb.co/KbbCjhc/Screenshot-from-2021-01-14-02-41-25.png" alt="Screenshot-from-2021-01-14-02-41-25" border="0"></a><br /><a target='_blank' href='https://pt-br.imgbb.com/'></a><br />

## Endpoints

### Currency exchange

```bash
GET
http://localhost:3003/exchange/?from=USD&to=BRL&amount=1
```

### Create Currency

```bash
POST
http://localhost:3003/currencies/
Put values in body:
currency=BRL
value=0.2
```

### Update Currency Value

```bash
PATCH
http://localhost:3003/currencies/BRL/value
Put value in body:
value=0.22
```

### Delete Currency

```bash
DELETE
http://localhost:3003/currencies/BRL
```
