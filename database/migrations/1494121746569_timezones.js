'use strict'

const Schema = use('Schema')

class TimezonesTableSchema extends Schema {

  up () {
    this.create('timezones', (table) => {
      table.increments()
      table.string('name');
      table.integer('location');
      table.timestamps()
    })
  }

  down () {
    this.drop('timezones')
  }

}

module.exports = TimezonesTableSchema
