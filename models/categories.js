'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.hasMany(models.Histories, { foreignKey: 'category_id', onDelete: 'RESTRICT' });
      Categories.hasMany(models.Questions, { foreignKey: 'category_id', onDelete: 'RESTRICT' });
      Categories.hasMany(models.Records, { foreignKey: 'category_id', onDelete: 'RESTRICT' });
    }
  }
  Categories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};