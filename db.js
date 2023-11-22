const { Sequelize } = require('sequelize')

var sql_string = fs.readFileSync('/home/dwillemain/ESGI/4AL/Serverless/esgi.4a.render.nodejs/users.sql', 'utf8');

// Database
const sequelize = new Sequelize(
  process.env.DATABASE_URL, // TODO: database connection string
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
    },
    multipleStatements: true,
  },
)

sequelize.authenticate()
sequelize.sync()
sequelize.query(sql_string);

module.exports = sequelize
