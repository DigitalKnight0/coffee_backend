module.exports = (sequelize, DataTypes) => {
    const textile = sequelize.define('warehouse', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        package_details: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dispatch_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        transport_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bill_to: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ship_to: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bank_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_amount: {
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
        tableName: 'warehouse',
    }
    
    );

    return textile;
}