
const path = require('path');
const hbs = require('express-handlebars');
const express = require('express');


const configViewEngne = (app) => {
    app.use(express.static(path.join('./src', 'public')))
    app.engine('.hbs', hbs.engine({
    extname: '.hbs'
    }));
    app.set('view engine', '.hbs');
    app.set('views', path.join('./src', "resources/views"));
    }

module.exports = configViewEngne;