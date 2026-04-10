const express = require('express');
const router = express.Router();
const controller = require('../controllers/memberController');

router.get('/', controller.getAllMembers);
router.get('/add', controller.showAddForm);
router.post('/save', controller.save);
router.get('/edit/:id', controller.showEditForm);
router.get('/delete/:id', controller.deleteMember);
router.get('/search', controller.searchMember);

module.exports = router;
