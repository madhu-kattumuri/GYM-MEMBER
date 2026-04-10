const express = require('express');
const router = express.Router();
const Member = require('../models/member');

router.get('/delete/:id', async (req, res) => {
    try {
        await Member.destroy({ where: { id: req.params.id } });
        res.redirect('/');
    } catch (err) {
        res.send("Error deleting member");
    }
});

module.exports = router;
