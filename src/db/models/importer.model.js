module.exports = (sequelize, DataTypes) => {
    const importer = sequelize.define('importer', {
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
        shipment_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicle_details: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        importer_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        warehouse_details: {
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
        tableName: 'importer',
    }
    
    );

    return importer;
}