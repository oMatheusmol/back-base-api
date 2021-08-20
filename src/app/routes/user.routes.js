const router = require('express').Router();
const controller = require('../controllers/user.controller');

/**
 * @author Matheus Mol
 */

router.post('/modelUser', controller.postModelUser);

router.post('/normalUser', controller.postNormalUser);

module.exports = app => app.use('/api/v1/user', router);
