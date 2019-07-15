const Sequelize = require('sequelize')

const User = (sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  User.associate = (models) => {
    models.user.belongsTo(models.company, {
      foreignKey: {
        allowNull: false,
      }
    })
  }

  return User
}

module.exports = User