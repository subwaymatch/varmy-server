const express = require('express');
const router = express.Router();
const passport = require('passport'); 

const MainController = require('./../controllers/main.js'); 
const UserController = require('./../controllers/users.js'); 

// Main page
router.get('/', MainController.renderMainPage);

// User-related routes
router.get('/login', UserController.renderLogInPage);
router.get('/signup', UserController.renderSignUpPage); 
router.post('/signup', UserController.signUp); 
router.get('/logout', UserController.logout);
router.post('/login', UserController.login);
router.get('/profile', passport.authenticationMiddleware(), UserController.renderProfilePage);

module.exports = router;