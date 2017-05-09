'use strict'

const Schema = use('Schema')

class DateFormatTableSchema extends Schema {

  up() {
    this.create('date_format', (table) => {
      table.increments()
      table.string('format');
      table.string('picker_format');
      table.string('label');
      table.timestamps()
    })
  }

  down() {
    this.drop('date_format')
  }

}

module.exports = DateFormatTableSchema
