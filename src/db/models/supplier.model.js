module.exports = (sequelize, DataTypes) => {
    const supplier = sequelize.define(
        'supplier',
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
            seed_variety_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            certification: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fertilizer_used: {
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
            /**
             * By default, sequelize will automatically transform all passed model names into plural
             * References: https://sequelize.org/master/manual/model-basics.html#table-name-inference
             */
            tableName: 'supplier',
        }
    );

    return supplier;
}