const config = require('../config/config');
const {authCookieName,authHeaderName}=require('../config/config');
module.exports =function getJWT(req){
return req.cookies[authCookieName]||req.headers[authHeaderName];
}