const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(thoughtController.getThoughts)
    .post(thoughtController.createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(thoughtController.getThoughtById)
    .put(thoughtController.updateThought)
    .delete(thoughtController.deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(thoughtController.addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(thoughtController.removeReaction);

module.exports = router;