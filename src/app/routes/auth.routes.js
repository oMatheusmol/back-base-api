const router = require('express').Router();
const controller = require('../controllers/auth.controller');

/**
 * @author Matheus Mol
 */

router.post('/', controller.accessToken);

module.exports = app => app.use('/api/v1/auth/access-token', router);
