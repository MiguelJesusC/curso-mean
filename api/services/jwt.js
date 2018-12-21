'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso';

exports.createToken = function (user){
    var payload= {  //Va a codifiar lo que se envia en el token de seguridad
        sub : user._id,
        name: user.name,
        subname: user.subname,
        email: user.email,
        role: user.role, 
        image: user.image,
        iat: moment().unix(), //Inicio del token de seguridad
        exp:moment().add(30, 'days').unix //Finalizacion del token de seguridad

    };
    return jwt.encode(payload, secret);
    
};