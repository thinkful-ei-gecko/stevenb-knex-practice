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
  },

  getById(db, id) {
    return db.from('shopping_list').select('*').where({ id }).first();
  },

  updateArticle(db, id, newArticleFields) {
    return db.from('shopping_list').where({ id }).update(newArticleFields);
  },

  deleteArticle(db, id) {
    return db.from('shopping_list').where({ id }).delete();
  }
};

module.exports = shoppingListService;