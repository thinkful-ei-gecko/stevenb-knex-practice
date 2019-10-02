const shoppingListService = require('../src/shopping-list-service');
const knex = require('knex');

describe('Shopping-List service object', () => {
  let db;

  let testArticles = [
    {
      id: 1,
      name: 'firstItem',
      price: '12.22',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      checked: false,
      category: 'Main'
    },
    {
      id: 2,
      name: 'secondItem',
      price: '12.22',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      checked: false,
      category: 'Snack'
    },
    {
      id: 3,
      name: 'thirdItem',
      price: '12.22',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      checked: true,
      category: 'Lunch'
    },
    {
      id: 4,
      name: 'fourthItem',
      price: '12.22',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      checked: false,
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

  describe('When shopping_list is given data, it populates', () => {
    before( () => {
      return db.into('shopping_list').insert(testArticles);
    });

    it('getAllArticles() resolves all data into shopping_list table', () => {
      return shoppingListService.getAllArticles(db)
        .then( actual => {
          expect(actual).to.eql(testArticles);
          expect(actual).to.be.an('array');
        });
    });
  });

  describe('When update is made to shopping_list, new object is added', () => {

  });

  describe('When item is deleted, the item is removed from shopping_list', () => {
    
  })
});