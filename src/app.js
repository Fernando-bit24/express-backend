const express = require('express');
const logger = require('./middlewares/logger');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Rutas
app.use('/', healthRoutes);

// Manejo de errores (siempre al final)
app.use(notFound);
app.use(errorHandler);

module.exports = app;