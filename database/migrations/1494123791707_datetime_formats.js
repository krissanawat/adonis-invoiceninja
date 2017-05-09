'use strict'

const Schema = use('Schema')

class DatetimeFormatsTableSchema extends Schema {

  up () {
    this.create('datetime_formats', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('datetime_formats')
  }

}

module.exports = DatetimeFormatsTableSchema
