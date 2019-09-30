require('dotenv').config();
const knex = require('knex');

const knexInstance = knex( {
  client: 'pg',
  connection: process.env.DB_URL
});

knexInstance
  .select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .where({ name: 'Point of view gun' })
  .then(result => {
    console.log(result);
  });

function searchByProduceName(searchTerm) {
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}
  
searchByProduceName('holo');

console.log('knex and driver installed correctly');