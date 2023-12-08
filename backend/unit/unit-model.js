import mongoose from 'mongoose';

const unitSchema = mongoose.Schema({
    unitCode: {
        type: String,
        required: true
    },
    unitName: {
        type: String,
        required: true
    },
    assumedKnowledge: {
        type: String,
    },
    creditPoints: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    prerequisites: {
        type: [String],
        required: true
    },
    corequisites: {
        type: [String],
        required: true
    },
    prohibitions: {
        type: [String],
        required: true
    }
});

export default mongoose.model("Unit", unitSchema);