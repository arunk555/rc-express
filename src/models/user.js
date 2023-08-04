const { Schema, model, SchemaTypes } = require('mongoose');
const { nanoid } = require('nanoid');

const roleSchema = new Schema({ value: String}, { timestamps: true });
const schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Why no name?'],
            minLength: 1,
            maxLength: 150
        },
        email: {
            type: String,
            lowercase: true,
            required: [true, 'Why no email?'],
            index: {
                unique: true
            },
            minLength: 3,
            maxLength: 200
        },
        password: {
            type: String,
            required: true
        },
        roles: [roleSchema],
        isactive: {
            type: Boolean,
            default: false
        },
        id: {
            type: SchemaTypes.ObjectId
        },
        verificationCode: {
            type: String,
            required: true,
            default: () => nanoid()
        },
        passwordResetCode: {
            type: String
        },
        verified: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = model('user', schema);
