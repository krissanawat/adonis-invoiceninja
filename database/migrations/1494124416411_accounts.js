'use strict'

const Schema = use('Schema')

class AccountsTableSchema extends Schema {

  up () {
    this.create('accounts', (table) => {
      table.increments()
         table.unsignedInteger('timezone_id').nullable();
            table.unsignedInteger('date_format_id').nullable();
            table.unsignedInteger('datetime_format_id').nullable();
            table.unsignedInteger('currency_id').nullable();

            table.timestamps();
            table.softDeletes();

            table.string('name').nullable();
            table.string('ip');
            table.string('account_key').unique();
            table.timestamp('last_login').nullable();

            table.string('address1').nullable();
            table.string('address2').nullable();
            table.string('city').nullable();
            table.string('state').nullable();
            table.string('postal_code').nullable();
            table.unsignedInteger('country_id').nullable();
            table.text('invoice_terms').nullable();
            table.text('email_footer').nullable();
            table.unsignedInteger('industry_id').nullable();
            table.unsignedInteger('size_id').nullable();

            table.boolean('invoice_taxes').default(true);
            table.boolean('invoice_item_taxes').default(false);

            table.foreign('timezone_id').references('id').on('timezones');
            table.foreign('date_format_id').references('id').on('date_formats');
            table.foreign('datetime_format_id').references('id').on('datetime_formats');
            table.foreign('country_id').references('id').on('countries');
            table.foreign('currency_id').references('id').on('currencies');
            table.foreign('industry_id').references('id').on('industries');
            table.foreign('size_id').references('id').on('sizes');
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }

}

module.exports = AccountsTableSchema
