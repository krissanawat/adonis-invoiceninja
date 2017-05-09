'use strict'

const Schema = use('Schema')

class GatewaysTableSchema extends Schema {

  up() {
    this.create('gateways', (table) => {
      table.increments()
      table.string('name');
      table.string('provider');
      table.boolean('visible').default(true);
      table.timestamps()
    })
  }

  down() {
    this.drop('gateways')
  }

}

module.exports = GatewaysTableSchema
