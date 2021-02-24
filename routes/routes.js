const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/all', (req, res) => {
    db.Posts.findAll().then( posts => res.send(posts))
});

module.exports = router;