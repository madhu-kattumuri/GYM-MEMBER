const express = require('express');
const router = express.Router();
const Member = require('../models/member');
const { Op } = require('sequelize');

router.get('/search', async (req, res) => {
    try {
        const members = await Member.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name}%` }
            }
        });
        res.render('index', { members });
    } catch (err) {
        res.send("Error searching members");
    }
});

module.exports = router;
