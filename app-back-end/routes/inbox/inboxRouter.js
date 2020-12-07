const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../../middleware/authToken');
const { inbox, sendMsg, msgRead } = require('./controller/inboxController');

router.get('/', authenticateToken, inbox)
router.post('/sendmsg/:id' ,authenticateToken, sendMsg)
router.post('/read/:id' , authenticateToken , msgRead)

module.exports = router;