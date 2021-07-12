'use strict';

const BaseController = require('./base.controller');
const AuthRepository = require('../domain/repositories/auth.repository');
const config = require('config');
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
            const {LOGIN: loginBody, PASSWORD: passwordBody} = req.body;
            const login = await config.get('AUTH').LOGIN;
            const password = await config.get('AUTH').PASSWORD;
            if(login === loginBody && password === passwordBody){
                const token =await JwtUtil.sign({ login });
                return super.sendSuccess(res, token);
            }
            res.status(400).send('error');
        } catch (err) {
            super.sendError(res, err);
        }
    }
      
}
  
module.exports = new AuthController();