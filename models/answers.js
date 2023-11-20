'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answers.belongsTo(models.Questions, { foreignKey: 'question_id', as: 'question', onDelete: 'CASCADE', });
      Answers.hasMany(models.Records, { foreignKey: 'answer_id', onDelete: 'RESTRICT' });
    }
  }
  Answers.init({
    question_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    correct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};