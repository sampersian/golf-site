
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin_tournament', function(table) {
    table.integer('admin_id').references('id').inTable('user').onDelete('CASCADE');
    table.integer('tournament_id').references('id').inTable('tournament').onDelete('CASCADE');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin_tournament');
};
