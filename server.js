const express = require('express');
const next = require('next');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

require('dotenv').config();

// With express
app.prepare().then(() => {
  express().use(handler).listen(process.env.START_PORT)
});