
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event_tournament', function(table) {
    table.integer('event_id').references('id').inTable('event').onDelete('CASCADE');
    table.integer('tournament_id').references('id').inTable('tournament').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {

};
