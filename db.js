const { Sequelize } = require('sequelize')

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
sequelize.query("INSERT INTO public.users (id, name, email, password, address, zipcode, city, country, added, updated) VALUES (1, 'John', 'johndoe@gmail.com', '$2a$12$chtH/.FdXgsl6BAGV0Mxp.yMvNO41Qe8SNI1WD1rAkuoZUCnHFTum', '23 Boulevard of Broken Dreams', '10002', 'New York', 'United States', '2022-10-19 15:11:30.212000 +00:00', '2022-10-19 15:11:30.212000 +00:00');");

module.exports = sequelize
