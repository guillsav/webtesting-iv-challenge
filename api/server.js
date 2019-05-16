const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

module.exports = server;
