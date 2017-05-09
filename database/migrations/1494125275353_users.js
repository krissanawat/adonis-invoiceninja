'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
        table.increments('id');
            table.unsignedInteger('account_id').index();
            table.timestamps();
            table.softDeletes();

            table.string('first_name').nullable();
            table.string('last_name').nullable();
            table.string('phone').nullable();
            table.string('username').unique();
            table.string('email').nullable();
            table.string('password');
            table.string('confirmation_code').nullable();
            table.boolean('registered').default(false);
            table.boolean('confirmed').default(false);
            table.integer('theme_id').nullable();

            table.boolean('notify_sent').default(true);
            table.boolean('notify_viewed').default(false);
            table.boolean('notify_paid').default(true);

            table.foreign('account_id').references('id').on('accounts').onDelete('cascade');

            table.unsignedInteger('public_id').nullable();
            table.unique(['account_id', 'public_id']);
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
