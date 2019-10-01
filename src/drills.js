require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

function userSearch(searchTerm) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then( res => console.log(res))
    .finally( () => knexInstance.destroy());
}

/* userSearch('Wings'); */

function shoppingListPagination(pageNumber) {
  const productsPerPage = 6;
  const offset = productsPerPage * (pageNumber - 1);

  knexInstance
    .select('*')
    .from('shopping_list')
    .limit(productsPerPage)
    .offset(offset)
    .then( res => console.log(res))
    .finally( () => knexInstance.destroy());
}

shoppingListPagination(2);

