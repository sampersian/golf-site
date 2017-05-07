
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', function(table) {
    table.increments();
    table.integer('year');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event');
};
