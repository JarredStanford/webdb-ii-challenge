exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN', 128).unique().notNullable();
        tbl.text('make').notNullable();
        tbl.text('model').notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.text('transmission')
        tbl.text('title_status')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};