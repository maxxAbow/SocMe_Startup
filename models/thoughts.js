const { Schema, model} = require('mongoose');

const thoughtSchema = new Schema (
    {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        name: {
            type: String,
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
        ],
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

const Thoughts = model('thought', thoughtSchema);

module.exports = Thoughts;
