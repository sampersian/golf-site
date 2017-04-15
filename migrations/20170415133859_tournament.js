
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tournament', function(table) {
    table.increments();
    table.text('name');
    table.boolean('isPrivate');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tournament');
};
