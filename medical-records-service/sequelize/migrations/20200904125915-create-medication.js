module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "medications",
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
        medName: {
          allowNull: false,
          type: DataTypes.STRING
        },
        dosage: {
          allowNull: false,
          type: DataTypes.STRING
        },
        Taken: {
            allowNull: false,
            type: DataTypes.STRING
        },
        reasons: {
          allowNull: false,
          type: DataTypes.TEXT
        },
        StartTakenDate: {
          allowNull: false,
          type: DataTypes.DATE
        },
        EndTakenDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
        SeriousSideEffect: {
          allowNull: true,
          type: DataTypes.TEXT
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
  
  module.exports.down = queryInterface => queryInterface.dropTable("medications");