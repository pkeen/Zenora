const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6; // A REASONABLE NUMBER

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 3,
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: function (doc, ret) {
				delete ret.password;
				return ret;
			},
		},
	}
);

userSchema.pre("save", async function (next) {
	// this keyword is user doc - so arrow functions wont work
	if (!this.isModified("password")) return next(); // return if the password not changed

	// replace password with computed hash
	this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

userSchema.methods.passwordsMatch = async function (password) {
	password = await bcrypt.hash(password, SALT_ROUNDS);
	if (this.password === password) {
		return true;
	}
	return false;
};



module.exports = mongoose.model("User", userSchema);
