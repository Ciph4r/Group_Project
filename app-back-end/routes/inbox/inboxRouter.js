const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../../middleware/authToken');
const { inbox, sendMsg } = require('./controller/inboxController');

router.get('/', authenticateToken, inbox)
router.post('/sendmsg/:id' ,authenticateToken, sendMsg)

module.exports = router;