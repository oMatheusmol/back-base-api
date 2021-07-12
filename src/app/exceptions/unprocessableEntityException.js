const Exception = require('./exception');

/**
 * @author Matheus Mol
*/

module.exports = class UnprocessableEntityException extends Exception {
    constructor(message) {
        super(message, httpStatus.UNPROCESSABLE_ENTITY);
    }
}