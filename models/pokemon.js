'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pokemon extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Pokemon.init({
        pokemonName: DataTypes.STRING,
        pokemonHealth: DataTypes.STRING,
        pokemonType: DataTypes.STRING,
        pokemonImage: DataTypes.STRING,
        MoveOneImage: DataTypes.STRING,
        MoveOneName: DataTypes.STRING,
        MoveOneAmount: DataTypes.INTEGER,
        MoveOneDamage: DataTypes.INTEGER,
        MoveTwoImage: DataTypes.STRING,
        MoveTwoName: DataTypes.STRING,
        MoveTwoAmount: DataTypes.INTEGER,
        MoveTwoDamage: DataTypes.INTEGER,
        weaknessImage: DataTypes.STRING,
        resistanceImage: DataTypes.STRING,
        retreatCostAmount: DataTypes.STRING,
        retreatCostImage: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Pokemon',
        tableName: 'pokemon_cards',
        timestamps:false
    });
    return Pokemon;
};