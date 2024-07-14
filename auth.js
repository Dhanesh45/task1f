const express = require('express');
const { body, validationResult } = require('express-validator');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/register', [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], UserController.register);

router.post('/login', [
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('Password is required')
], UserController.login);

module.exports = router;
