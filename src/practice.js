const knex = require('knex');

const knexInstance = knex( {
  client: 'pg',
  connection: 'postgresq1://dunder_mifflin:dunder_mifflin@localhost/knex-practice'
});