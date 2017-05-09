'use strict'

const Schema = use('Schema')

class SizesTableSchema extends Schema {

  up () {
    this.create('sizes', (table) => {
      table.increments()
      table.string('name');
      table.timestamps()
    })
  }

  down () {
    this.drop('sizes')
  }

}

module.exports = SizesTableSchema
