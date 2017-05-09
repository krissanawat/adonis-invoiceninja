'use strict'

const Schema = use('Schema')

class PaymentTypesTableSchema extends Schema {

  up () {
    this.create('payment_types', (table) => {
      table.increments()
      table.string('name');
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_types')
  }

}

module.exports = PaymentTypesTableSchema
