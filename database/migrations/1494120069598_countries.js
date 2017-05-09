'use strict'

const Schema = use('Schema')

class CountriesTableSchema extends Schema {

  up () {
    this.create('countries', (table) => {
           table.increments();
            table.string('capital', 255).nullable();
            table.string('citizenship', 255).nullable();
            table.string('country_code', 3).default('');
            table.string('currency', 255).nullable();
            table.string('currency_code', 255).nullable();
            table.string('currency_sub_unit', 255).nullable();
            table.string('full_name', 255).nullable();
            table.string('iso_3166_2', 2).default('');
            table.string('iso_3166_3', 3).default('');
            table.string('name', 255).default('');
            table.string('region_code', 3).default('');
            table.string('sub_region_code', 3).default('');
            table.boolean('eea').default(0);
    })
  }

  down () {
    this.table('countries', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = CountriesTableSchema
