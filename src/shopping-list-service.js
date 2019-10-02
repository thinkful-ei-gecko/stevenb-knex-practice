const shoppingListService = {
  getAllArticles(db) {
    return db.select('*').from('shopping_list');
  }
};

module.exports = shoppingListService;