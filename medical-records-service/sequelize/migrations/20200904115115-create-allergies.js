module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "allergies",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
        },
        patientId: {
          allowNull: false,
          references: {
            key: "id",
            model: "patientFiles"
          },
          type: DataTypes.UUID
        },
        allergyTypeId: {
            allowNull: false,
            references: {
              key: "id",
              model: "allergyType"
            },
            type: DataTypes.UUID
          },
        allergyNote: {
          allowNull: false,
          type: DataTypes.TEXT
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      },
      {
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("allergies");
  