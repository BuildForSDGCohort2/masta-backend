module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "patientFiles",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
        },
        firstName: {
          allowNull: false,
          type: DataTypes.STRING
        },
        lastName: {
          allowNull: false,
          type: DataTypes.STRING
        },
        gender: {
          allowNull: false,
          type: DataTypes.STRING
        },
        birthDate: {
          allowNull: false,
          type: DataTypes.DATE
        },
        bloodGroup: {
          allowNull: true,
          type: DataTypes.STRING
        },
        weight: {
          allowNull: true,
          type: DataTypes.INTEGER
        },
        pictureId: {
          allowNull: true,
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
  
  module.exports.down = queryInterface => queryInterface.dropTable("patientFiles");