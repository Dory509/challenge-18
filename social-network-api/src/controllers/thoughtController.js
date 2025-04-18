const { User } = require('../models/User');
const { Thought } = require('../models/Thought');

// Get all thoughts
const getThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find().populate('username');
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a single thought by ID
const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId).populate('username');
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Create a new thought
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
        res.status(201).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Update a thought by ID
const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Delete a thought by ID
const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: req.params.thoughtId } });
        res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Add a reaction to a thought
const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Remove a reaction from a thought
const removeReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
};