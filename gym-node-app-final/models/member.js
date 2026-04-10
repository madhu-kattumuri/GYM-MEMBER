const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Member = sequelize.define('Member', {
    name: { type: DataTypes.STRING, allowNull: false },
    plan: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING }
});

module.exports = Member;