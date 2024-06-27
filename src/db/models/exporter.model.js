module.exports = (sequelize, DataTypes) => {
    const exporter = sequelize.define('exporter', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        coffee_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        delievery_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        exporter_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shipment_id: {
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
        tableName: 'exporter',
    }
    
    );

    return exporter;
}