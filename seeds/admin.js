
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      return knex('user').insert({
          first_name:'Samuel',
          last_name:'Persian',
          username:'slam',
          password:'$2a$10$Cajr6KI5kIYtQBvs.Lj7r.Yod/mEQKgBtzmYdPEUWoWQswjUESkO.',
          email:'samuel.persian@gmail.com',
          image_url:'',
          is_admin: true
        })
    });
};
