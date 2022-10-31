/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('example', table => {
    table.increments('id');
    table.string('first_name', 255)
        .notNullable();
    table.string('last_name', 255)
    .notNullable();
    table.string('country', 255)
    .notNullable();
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('example');
}
