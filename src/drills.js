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

/* shoppingListPagination(2); */

function itemsAddedAfterDate(daysAgo) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where(
      'date_added',
      '>',
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then( res => console.log(res))
    .finally( () => knexInstance.destroy());
}

/* itemsAddedAfterDate(2); */

function totalPerCategory() {
  knexInstance
    .select('category')
    .sum('price as total')
    .from('shopping_list')
    .groupBy('category')
    .then( res => console.log(res))
    .finally( () => knexInstance.destroy());
}

/* totalPerCategory(); */