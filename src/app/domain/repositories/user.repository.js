'use strict';

const BaseRepository = require('./base.repository');
const database = require('../../../infrastructure/database/mongoFactory');

/**
 * @author Matheus Mol
 */

module.exports = class UserRepository extends BaseRepository {
	constructor() {
		super();
	}

	async postModelUser(body) {
		try {
			const collectionName = 'ModelUser';
			const product = body;
			await database.getCollection(collectionName).insertOne(product);
			return true;
		} catch (error) {
			return false;
		}
	}

	async postNormalUser(body) {
		try {
			const collectionName = 'NormalUser';
			const product = body;
			await database.getCollection(collectionName).insertOne(product);
			return true;
		} catch (error) {
			return false;
		}
	}

	async get(params) {
		try {
		} catch (err) {}
	}

	async put(body) {
		try {
		} catch (err) {}
	}

	async delete(body) {
		try {
		} catch (err) {}
	}
};
