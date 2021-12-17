
exports.up = function(knex) {
  return knex.schema.createTable("looney",tbl => {
      tbl.increments();
      tbl.string('name', 30).unique().notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('looney');
};
