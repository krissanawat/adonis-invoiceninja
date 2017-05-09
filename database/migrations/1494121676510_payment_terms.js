'use strict'

const Schema = use('Schema')

class PaymentTermsTableSchema extends Schema {

  up () {
    this.create('payment_terms', (table) => {
      table.increments()
      table.string('name');
      table.integer('num_days');
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_terms')
  }

}

module.exports = PaymentTermsTableSchema
