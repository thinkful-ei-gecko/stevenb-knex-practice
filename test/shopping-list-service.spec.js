const shoppingListService = require('../src/shopping-list-service');
const knex = require('knex');

describe('Shopping-List service object', () => {
  let db;

  let testArticles = [
    {
      name: 'firstItem',
      price: 12.22,
      category: 'Main'
    },
    {
      name: 'secondItem',
      price: 12.22,
      category: 'Snack'
    },
    {
      name: 'thirdItem',
      price: 12.22,
      category: 'Lunch'
    },
    {
      name: 'fourthItem',
      price: 12.22,
      category: 'Breakfast'
    }
  ];

  before( () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    });
  });

  before( () => db('shopping_list').truncate() );

  afterEach( () => db('shopping_list').truncate() );

  after( () => db.destroy() );

  describe('shopping_list is empty when given no data', () => {
    it('getAllArticles() should be an empty array', () => {
      return shoppingListService.getAllArticles(db)
        .then( actual => expect(actual).to.eql([]) );
    });
  });
});