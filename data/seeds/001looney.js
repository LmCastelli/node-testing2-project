exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('looney')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('looney').insert([
        {name: 'Bugs Bunny'},
        {name: 'Daffy Duck'},
        {name: 'Porky Pig'}
      ]);
    });
};
