![Logo pedro](https://pedroruizhidalgo.es/assets/img/logo.svg)

# JsonWebToken
But I did it my way
[@pedroruizhidalg](https://twitter.com/pedroruizhidalg)

---

## Importing
~~~javascript
const jwt = require('./myjwt')
~~~

## Creating new token
~~~javascript
const token = jwt().sign({
    uuid:data,
    apikey
  },
  '1 day'
  ) // 'n year', 'n day', 'n second', '1 hour', 'n minute', '9999 years', raw number to miliseconds
~~~

The token const can receive two params, 

1. The secret key, leave blank to set as **process.env.JWTSECRET** variable
2. The crypt algoritm, leave in blanc to keep **'HS512**

## Verifying a token
~~~javascript
const verified = jwt().verify(token)
~~~
Its params are:
1. Mandatory, token.
2. Boolean, complete. Leave blank to false.
3. Boolean, json. Leave in blank to true

##  Decode a token
~~~javascript
const decoded = jwt().decode(token)
~~~
Produces a raw decoded token.

## Convert params iat and exp into human readable dates
~~~javascript
console.log( jwt().date(verified.iat) ) // 2020-02-08T10:54:32+01:00
~~~
Params:
1. Mandatory, verified's .iat or .exp
2. Date format according **moment.js**

