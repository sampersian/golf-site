
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments('id');
    table.text('first_name');
    table.text('last_name');
    table.text('username');
    table.text('password');
    table.text('email');
    table.text('image_url');
    table.boolean('is_admin');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
