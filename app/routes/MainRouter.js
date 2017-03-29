const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn; 

const MainController = require('./../controllers/main.js'); 
const UserController = require('./../controllers/users.js'); 
const NotesController = require('./../controllers/notes.js'); 

// Main page
router.get('/', MainController.renderMainPage);

// User-related routes
router.get('/login', UserController.renderLogInPage);
router.get('/signup', UserController.renderSignUpPage); 
router.post('/signup', UserController.signUp); 
router.get('/logout', UserController.logout);
router.post('/login', UserController.login);
router.get('/profile', ensureLoggedIn('/login'), UserController.renderProfilePage);

// NoteBook related routes
router.get('/notes', ensureLoggedIn('/login'), NotesController.renderUserNotes); 

module.exports = router;