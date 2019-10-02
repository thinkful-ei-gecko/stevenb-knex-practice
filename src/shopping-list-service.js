const shoppingListService = {
  getAllArticles(db) {
    return db.select('*').from('shopping_list');
  },

  insertArticle(db, newArticle) {
    return db
      .insert(newArticle)
      .into('shopping_list')
      .returning('*')
      .then( rows => rows[0] );
  }
};

module.exports = shoppingListService;