'use strict'

const Schema = use('Schema')

class CurrenciesTableSchema extends Schema {

  up () {
    this.create('currencies', (table) => {
      table.increments()
            table.string('name');
            table.string('symbol');
            table.string('precision');
            table.string('thousand_separator');
            table.string('decimal_separator');
            table.string('code');
      table.timestamps()
    })
  }

  down () {
    this.drop('currencies')
  }

}

module.exports = CurrenciesTableSchema
