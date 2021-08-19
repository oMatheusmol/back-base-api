const router = require('express').Router();
const controller = require('../controllers/user.controller');
const auth = require('../middlewares/auth')

/**
 * @author Matheus Mol
*/

router.post ("/modelUser", controller.postModelUser);

router.post ("/normalUser", controller.postNormalUser);

module.exports = app => app.use('/api/v1/user', router);
