const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.listen(() => console.log(`**** Server is listening on ${port}`));
