const shoppingListService = {
  getAllArticles(db) {
    return db.select('*').from('shopping_list');
  },

  insertArticle(db, newArticle) {
    return db.from('shopping_list').insert(newArticle);
  }
};

module.exports = shoppingListService;