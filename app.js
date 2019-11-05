const express = require('express');
const bodyParser = require('body-parser');


const models = require('./models');


class Application {
    constructor () {

        this.expressApp = express();
        this.attachRoutes();
    }

    attachRoutes () {
        let app = this.expressApp;
        let jsonParser = bodyParser.json();
        app.get('/hello-world', this.getHelloWorld.bind(this));
    }


    getHelloWorld (req, res) {
        res.json("hello world!");  
    }

}

module.exports = Application;