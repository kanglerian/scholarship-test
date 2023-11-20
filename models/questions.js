'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    static associate(models) {
      Questions.belongsTo(models.Categories, { foreignKey: 'category_id', as: 'category' });
      Questions.hasMany(models.Answers, { foreignKey: 'question_id', onDelete: 'RESTRICT' });
      Questions.hasMany(models.Records, { foreignKey: 'question_id', onDelete: 'RESTRICT' });
    }
  }
  Questions.init({
    category_id: DataTypes.INTEGER,
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};