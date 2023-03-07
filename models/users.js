const { Schema, model } = require('mongoose');

//schema for users
const userSchema = new Schema (
    {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        text: {
            type: String,
        },
    },
    {
        toJSON: {
          virtuals: false,
        },
        id: true,
    }
);

// If you choose to use virtual fields
// userSchema
//     .virtual('example')
//     .get(function(){
//         return 'value';
//     });

const Users = model('user', userSchema);

module.exports = Users;
