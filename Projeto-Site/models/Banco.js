const Sequelize = require('sequelize');
const sequelize = new Sequelize("ProjetWeb","root","",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}