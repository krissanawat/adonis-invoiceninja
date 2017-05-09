'use strict'

const Schema = use('Schema')

class ThemesTableSchema extends Schema {

  up () {
    this.create('themes', (table) => {
      table.increments()
      table.string('name');
      table.timestamps()
    })
  }

  down () {
    this.drop('themes')
  }

}

module.exports = ThemesTableSchema
