const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  "postgres://cloud:IH7L0KPyPS5vNLCONtfbMPmB3D8STo3g@dpg-clesd9uf27hc73bg2chg-a/cloud_g9n6", // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
