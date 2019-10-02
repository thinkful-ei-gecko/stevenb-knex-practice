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

  describe('When addition is made to shopping_list, the item is added', () => {
    let newItem = {
      id: 1,
      name: 'newItem',
      price: '12.22',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      checked: false,
      category: 'Snack'
    };

    it('insertArticle() inserts a new item to shopping_list', () => {
      return shoppingListService.insertArticle(db, newItem)
        .then( actual => {
          expect(actual).to.eql(newItem);
          expect(actual.id).to.equal(1);
          expect(actual.name).to.equal('newItem');
        });
    });
  });

  describe('When shopping_list has data', () => {
    beforeEach( () => {
      return db.into('shopping_list').insert(testArticles);
    });

    it('getById() resolves an item by id from shopping_list', () => {
      const secondId = 2;
      const secondTestItem = testArticles[secondId - 1];

      return shoppingListService.getById(db, secondId)
        .then( actual => {
          expect(actual).to.be.an('object');
          expect(actual).to.eql({
            id: secondId,
            name: secondTestItem.name,
            price: secondTestItem.price,
            date_added: secondTestItem.date_added,
            checked: secondTestItem.checked,
            category: secondTestItem.category
          });
        });
    });
  });

  describe('When update is made to shopping_list, the item is updated', () => {
    before( () => db.into('shopping_list').insert(testArticles) );

    it('updateArticle() updates an article in shopping_list', () => {
      const articleIdToUpdate = 1;
      const updateArticleData = { 
        name: 'updated',
        checked: true,
        price: '10.13',
        category: 'Breakfast'
      };

      return shoppingListService.updateArticle(db, articleIdToUpdate, updateArticleData)
        .then( () => shoppingListService.getById(db, articleIdToUpdate ))
        .then( item => {
          expect(item).to.be.an('object');
          expect(item.name).to.equal('updated');
          expect(item).to.eql({
            ...updateArticleData,
            id: articleIdToUpdate,
            date_added: testArticles[articleIdToUpdate - 1].date_added
          });
        });
    });
  });

  describe('When item is deleted, the item is removed from shopping_list', () => {

  });
});