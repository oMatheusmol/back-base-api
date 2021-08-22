'use strict';

const BaseRepository = require('./base.repository');
const database = require('../../../infrastructure/database/mongoFactory');

/**
 * @author Matheus Mol
 */

module.exports = class UserRepository extends BaseRepository {
	constructor() {
		super();
		this.collectionName = 'users';
	}

	async post(body) {
		try {
			const user = body;
			user.following = [];
			if (user.isPrime) {
				user.followers = [];
				user.pictures = [];
			}
			user.createdAt = new Date();
			user.updatedAt = new Date();
			await database.getCollection(this.collectionName).insertOne(user);
			return true;
		} catch (error) {
			return false;
		}
	}

	async get(params) {
		try {
			const users = await database.getCollection(this.collectionName).find({username: params.username}).toArray();
			return users
		} catch (err) {
			return err
		}
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
