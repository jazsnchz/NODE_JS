;
let env = require('dotenv').config()

const EXPRESS =  require('express'),
      BODYPARSER = require('body-parser'),
      HELMET = require('helmet'),
      TIEMPO = 1 * 60 * 1000

let app = EXPRESS(),
    passport = require('passport'),
    session = require('express-session'),
    parseurl = require('parseurl'),
    rutas = require('../rutas/index'),
    modelos = require('../models'),
    multiparty = require('connect-multiparty'),
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUninitialized: false,
        name : 'sessionId',
        cookie: {
            expires: new Date(Date.now() + TIEMPO),
            maxAge: TIEMPO
        }
    }