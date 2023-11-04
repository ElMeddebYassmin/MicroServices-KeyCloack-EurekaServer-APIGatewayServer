const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: String,
    createdTimestamp: Number, 
    username: String, 
    enabled: Boolean,
    totp: Boolean, 
    emailVerified: Boolean, 
    firstName: String,
    lastName: String, 
    email: String, 
}, {
    timestamps: true 
});

module.exports = mongoose.model('User', UserSchema);
