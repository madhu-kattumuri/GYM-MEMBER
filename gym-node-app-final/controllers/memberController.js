const Member = require('../models/member');
const { Op } = require('sequelize');

exports.getAllMembers = async (req, res) => {
    const members = await Member.findAll();
    res.render('index', { members });
};

exports.showAddForm = (req, res) => res.render('add-member');

exports.save = async (req, res) => {
    await Member.create(req.body);
    res.redirect('/');
};

exports.showEditForm = async (req, res) => {
    const member = await Member.findByPk(req.params.id);
    res.render('edit-member', { member });
};

exports.deleteMember = async (req, res) => {
    await Member.destroy({ where: { id: req.params.id } });
    res.redirect('/');
};

exports.searchMember = async (req, res) => {
    const members = await Member.findAll({
        where: { name: { [Op.like]: `%${req.query.name}%` } }
    });
    res.render('index', { members });
};
