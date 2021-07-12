const Exception = require('./exception');

/**
 * @author Matheus Mol
*/

module.exports = class UnauthorizedException extends Exception {
    constructor(message) {
        super(message, httpStatus.UNAUTHORIZED);
    }
}