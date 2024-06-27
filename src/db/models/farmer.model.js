module.exports = (sequelize, DataTypes) => {
        const farmer = sequelize.define(
        'farmer',
        {
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
            registration_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            farm_humidity: {
                type: DataTypes.INTEGER,
                allowNull: true,
                min: 0,
                max: 100
            },
            farm_temperature: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            coffee_activity: {
                type: DataTypes.STRING,
                allowNull: true,
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
            /**
             * By default, sequelize will automatically transform all passed model names into plural
             * References: https://sequelize.org/master/manual/model-basics.html#table-name-inference
             */
            tableName: 'farmer',
        },
    );

    return farmer;
}