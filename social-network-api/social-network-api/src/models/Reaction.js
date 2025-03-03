import mongoose from 'mongoose';

const ReactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toISOString()
    }
}, {
    toJSON: {
        getters: true
    },
    id: false
});

const Reaction = mongoose.model('Reaction', ReactionSchema);

export default Reaction;