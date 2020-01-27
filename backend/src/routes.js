const { Router } = require('express');
const auth = require('./services/auth');

const UserController = require('./controllers/UserController');

const routes = Router();

routes.post('/users', UserController.register);
routes.post('/login', UserController.authenticate);
routes.use(auth);

module.exports = routes;