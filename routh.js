const express = require('express');
const { ensureAuthenticated, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.json({ msg: 'Welcome to the dashboard' });
});

router.get('/admin', ensureAuthenticated, authorizeRoles(['admin']), (req, res) => {
    res.json({ msg: 'Welcome to the admin area' });
});

module.exports = router;
