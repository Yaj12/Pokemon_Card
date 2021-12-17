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
    pokemonHealth: DataTypes.INTEGER,
    pokemonType: DataTypes.STRING,
    pokemonImage: DataTypes.STRING,
    MoveOneImage: DataTypes.STRING,
    MoveOne: DataTypes.STRING,
    MoveOneAmount: DataTypes.INTEGER,
    MoveOneDamage: DataTypes.INTEGER,
    MoveTwoImage: DataTypes.STRING,
    MoveTwo: DataTypes.STRING,
    MoveTwoAmount: DataTypes.INTEGER,
    MoveTwoDamage: DataTypes.INTEGER,
    weaknessImage: DataTypes.STRING,
    resistanceImage: DataTypes.STRING,
    retreatCostAmount: DataTypes.INTEGER,
    retreatCostImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemon',
    timestamps:false
  });
  return Pokemon;
};