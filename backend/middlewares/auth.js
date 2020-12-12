const config = require('../config/config');
const jwt = require('jsonwebtoken');
const { authCookieName, authHeaderName, jwtSecret } = config;
const getJWT=require('../utils/get-jwt');
const userModel = require('../models/user');
module.exports = function (req, res, next) {
  const token = getJWT(req)
  if (!token) { next(); return; }
  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (err) { next(err); return; }
    req.user = { _id: decoded.userId };
    res.locals.isLogged = !!req.user;

    userModel.findById(decoded.userId).lean().then(user => {
      res.locals.username=user.username;
      //console.log(res.locals)
    }).catch(next);



    next();
  });
};
