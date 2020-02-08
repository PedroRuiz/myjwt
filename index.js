'use strict'
const jwt = require('./myjwt')
const uuid = require('uuid-apikey')


/**************************************
 * 'npm run dev' in console
 **************************************/

process.env.JWTSECRET = 'PehRihqtOjPT1EmU\WFm]eOVlZ[6MbU^ysJ[9y2ublbPO0Z7d03oWLz3Xmz^hRi'

const data = uuid.create().uuid
const apikey = uuid.create().apiKey

const token = jwt().sign({
    uuid:data,
    apikey
  },
  '9999 years'
  ) // '1 year', '1 day', '1 second', '1 hour', '1 minute'

  const expired = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI2RFc1VzFYLTFNVE00UkctTkUxR1oxMy1GVFZZNkY3IiwidXVpZCI6IjMzNzg1ZTA3LTBkMzUtNDI2Mi1hYjgzLTBmODQ3ZWI3ZTMzYyIsImlhdCI6MTU4MTEwMTQzOCwiZXhwIjoxNTgxMTAxNDM4fQ.HdVCykzPyc0kIVsepulECU87U2bmZCpHpETxQ4ALCpHHq_15GTjF5WCH2XmR6yv4V33ntce6BWi1H5nKnEyaQw'
const verified = jwt().verify(token)

console.log('*********')
console.log(token,token.length) 
console.log('********* VERIFIED *********')
console.log( verified )
console.log('*********')
console.log(' Since:', jwt().date(verified.iat) )
console.log('Expire:', jwt().date(verified.exp) )
console.log('*********')