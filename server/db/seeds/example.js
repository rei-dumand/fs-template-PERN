/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('example').del()
  await knex('example').insert([
    {first_name: 'John', last_name: 'Doe', country: 'United States'},
    {first_name: 'Jane', last_name: 'Doe', country: 'Sweden'},
    {first_name: 'Richard', last_name: 'Mann', country: 'South Africa'}
  ]);
};
