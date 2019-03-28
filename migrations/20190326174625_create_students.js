exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl
      .integer('cohort_id')
      .notNullable()
      .references('id')
      .inTable('cohorts')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};

