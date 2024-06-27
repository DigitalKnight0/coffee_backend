module.exports = (sequelize, DataTypes) => {
    const textile = sequelize.define('textile', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type_of_plastic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recycled_plastic_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spent_coffee_grounds_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        collection_point: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recycled_cotton_quantity: {
            type: DataTypes.INTEGER,
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
        tableName: 'textile',
    }
    
    );

    return textile;
}