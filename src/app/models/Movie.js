import Sequelize, { Model } from 'sequelize';

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        subtitle: Sequelize.STRING,
        sinopse: Sequelize.TEXT,
        dir: Sequelize.STRING,
        duration: Sequelize.STRING,
        publication: Sequelize.STRING,
        longa: Sequelize.BOOLEAN,
        category_id: Sequelize.INTEGER,
        file_id: Sequelize.INTEGER,
        url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'file_id', as: 'image' });
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default Movie;
