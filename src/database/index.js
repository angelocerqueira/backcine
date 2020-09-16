import Sequelize from 'sequelize';

import Category from '../app/models/Category';
import File from '../app/models/File';
import Movie from '../app/models/Movie';

import databaseConfig from '../config/database';

const models = [File, Movie, Category];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
