'use strict'

const Schema = use('Schema')

class AccountGatewaysTableSchema extends Schema {

  up() {
    this.create('account_gateways', (table) => {
      table.increments()
      table.unsignedInteger('account_id');
      table.unsignedInteger('user_id');
      table.unsignedInteger('gateway_id');
      table.timestamps();
      table.softDeletes();
      table.text('config');
      table.foreign('account_id').references('id').on('accounts').onDelete('cascade');
      table.foreign('gateway_id').references('id').on('gateways');
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.unsignedInteger('public_id').index();
      table.unique(['account_id', 'public_id']);
      table.timestamps()
    })
  }

  down() {
    this.drop('account_gateways')
  }

}

module.exports = AccountGatewaysTableSchema
