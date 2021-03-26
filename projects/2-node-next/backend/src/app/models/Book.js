import Sequelize, { Model } from 'sequelize'

class Book extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      pages: Sequelize.NUMBER
    },
    {
      sequelize
    })

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'owner_id',
      as: 'owner',
    })
  }
}

export default Book