exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('categories', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('movies', tbl => {
      tbl.increments();
      tbl
        .string('title', 255)
        .notNullable()
        .unique();
      tbl.string('description');
      tbl.string('category', 128).notNullable();
    })
    .createTable('category_movies', tbl => {
      tbl.increments();

      tbl
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('movie_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('movies')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExist('category_movies')
    .dropTableIfExist('movies')
    .dropTableIfExist('categories');
};
