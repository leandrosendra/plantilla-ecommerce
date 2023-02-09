const { DataTypes}= require ('sequelize')

const User = (sequelize) => sequelize.define("User", {
   id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
   },
   name: {
       type: DataTypes.STRING
   },
   email: {
       type: DataTypes.STRING
   },
   password: {
       type: DataTypes.STRING
   },
  isAdmin: {
       type: DataTypes.BOOLEAN,
       defaultValue: false
   },
})

module.exports = User
