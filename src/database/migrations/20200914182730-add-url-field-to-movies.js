module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('movies', 'url', {
      type: Sequelize.STRING,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNul: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('movies', 'url');
  },
};
