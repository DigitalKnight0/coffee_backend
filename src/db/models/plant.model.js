module.exports = (sequelize, DataTypes) => {
    const plant = sequelize.define('plant', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roasting_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tempature: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        roasting_time: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        air_tempature: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        bean_tempature: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        fan_speed: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        power:{
            type: DataTypes.INTEGER,
            allowNull: true,
            min: 0,
            max: 0
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
        tableName: 'plant',
    }
    
    );

    return plant;
}