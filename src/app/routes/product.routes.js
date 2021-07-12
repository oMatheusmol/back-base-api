const router = require('express').Router();
const controller = require('../controllers/product.controller');
const auth = require('../middlewares/auth')

/**
 * @author Matheus Mol
*/

router.post ("/", controller.post);

router.get("/:productName", controller.get);

router.put("/", controller.put);

router.delete("/", controller.delete);

module.exports = app => app.use('/api/v1/product', router);
