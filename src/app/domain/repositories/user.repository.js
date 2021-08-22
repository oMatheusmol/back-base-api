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
			const isValid = await this.valid(body);

			if (isValid.error) return { error: isValid.error };

			body.following = [];
			if (body.isPrime) {
				body.followers = [];
				body.pictures = [];
			}
			body.createdAt = new Date();
			body.updatedAt = new Date();
			await database.getCollection(this.collectionName).insertOne(body);
			return true;
		} catch (error) {
			return { error: error };
		}
	}

	async get(params) {
		try {
			const users = await database
				.getCollection(this.collectionName)
				.find({ username: params.username })
				.toArray();

			return users;
		} catch (error) {
			return { error: error };
		}
	}

	async getByEmail(params) {
		try {
			const email = await database
				.getCollection(this.collectionName)
				.find({ email: params.email })
				.toArray();
			return email;
		} catch (err) {
			return err;
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

	async valid(body) {
		const username = await this.get(body);
		const email = await this.getByEmail(body);
		if (username.length > 0) return { error: 'Username not valid!' };
		if (email.length > 0) return { error: 'Email not valid!' };
		return true;
	}
};
