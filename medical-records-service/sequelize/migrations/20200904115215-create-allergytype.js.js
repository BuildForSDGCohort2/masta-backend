module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "allergyType",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      categoryName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {
      charset: "utf8"
    }
  );
};

module.exports.down = queryInterface => queryInterface.dropTable("allergyType");