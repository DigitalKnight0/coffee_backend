module.exports = (sequelize, DataTypes) => {
    const logistics = sequelize.define('logistics', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        time_of_departure: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tracking_details: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        arrival_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lot_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        farm_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        has_arrived: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        processing_method: {
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
        tableName: 'logistics',
    }
    
    );

    return logistics;
}