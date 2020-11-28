const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    description: String
});


userSchema.pre('save', function(next){
    const user = this;
    
    if (!user.isModified('password')){
        return next();
    }
    
    bcrypt.hash(user.password, null, null, (err, hash) =>{
        if (err){
            return next(err);
        }
        
        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', userSchema);
