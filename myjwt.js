'use strict'
const xjwt = require('jsonwebtoken')
const moment = require('moment')

const jwt = (secret = process.env.JWTSECRET, algorithm = 'HS512') => {
  return {
    sign : (data,expires = '1 hour') => {
      return xjwt.sign(data,secret,{expiresIn:expires,algorithm:algorithm})
    },
    verify: (token, complete = false, json=true) => {
      return xjwt.verify(token,secret,{complete,json},(err,decoded)=>{
        if(err) return {         
            expiredAt: err.expiredAt,          
            message: err.message,
            name: err.name,
          }
        return decoded
      })
    },
    decode: (token) => {
      return xjwt.decode(token,{complete:true,json:false})
    },
    date: (date, format="YYYY-MM-DDTHH:mm:ssZ") => {
      return moment(`/Date(${date*1000})/`).format(format)
    }
  }
}

module.exports = jwt 