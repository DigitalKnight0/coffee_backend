module.exports = (sequelize, DataTypes) => {
    const customer = sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        coffee_seeds_and_manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        offers: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        spent_coffee_grounds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        serial_numbers_for_barcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_date_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        modified_date_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        tableName: 'customer',
    }
    
    );

    return customer;
}