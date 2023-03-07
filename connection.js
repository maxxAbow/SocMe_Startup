const { connect, connection } = require('mongoose');

connect('mongodb://localhost/SocMe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
