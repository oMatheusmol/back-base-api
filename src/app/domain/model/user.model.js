const mongoose = require('mongoose');

const UsersPrime = mongoose.model(
	'users',
	{
		username: {
			type: String,
			require: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			require: true,
			trim: true,
		},
		isPrime: {
			type: Boolean,
			require: true,
		},
		email: {
			type: String,
			require: true,
			trim: true,
			unique: true,
			lowercase: true,
		},
		profilePicture: {
			type: String,
			require: true,
		},
		following: {
			type: Array,
		},
		followers: {
			type: Array,
		},
		pictures: {
			type: Array,
		},
	},
	{ timestamps: true },
);

module.exports = UsersPrime;
