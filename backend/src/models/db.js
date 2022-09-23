import Sequelize from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '0.0.0.0',
  port: 5498,
  database: 'consulta_credito',
  username: 'jest',
  password: 'jest'
})

export default {
  sequelize
}
