'use strict';

const BaseController = require('./base.controller');
const AuthRepository = require('../domain/repositories/auth.repository');
const JwtUtil = require('../utils/jwtUtil');
const jwt = require('jsonwebtoken');
const repository = new AuthRepository();

/**
 * @author Matheus Mol
*/

class AuthController extends BaseController {
    constructor() {
        super(repository);
    }

    /**
     * Realiza o login e retorna um token
     */
    async accessToken(req, res) {
        try {
            const token = await repository.accessToken(req.body);
 
            res.send(token);
        } catch (err) {
            super.sendError(res, err);
        }
    }
      
}
  
module.exports = new AuthController();