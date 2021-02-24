const express = require('express');
const router = express.Router();
const db = require('../models');

// to all the posts...
router.get('/all', (req, res) => {
    db.Posts.findAll().then( posts => res.send(posts))
});

// get one of the posts...
router.get('/search/:id', async (req, res) => {
    try {
         const { id } = req.params;

         const found = await db.Posts.findAll({
             where: { id }
            }).then( () => res.send( found ))
        }catch (err) {
                res.send("There was an error...")
    }
});


// to add a new post...
router.post('/new', async (req, res) => {
    try{
        db.Posts.create({
            titulo: req.body.titulo,
            contenido: req.body.contenido,
            categoria: req.body.categoria  
        }).then( newPost => res.send({"New post created": newPost}))
    }catch (err) {
        res.send("There was an error...")
    }
       
});

// edit a post...
router.put('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;

        db.Posts.update({
            titulo: req.body.titulo,
            contenido: req.body.contenido,
            categoria: req.body.categoria
    }, 
    { where: { id }}
    ).then(() => res.send("Your post was updated.") )
    }catch (err) {
        res.send("There was an error...")
    }
    
})

// delete one post...
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        db.Posts.destroy({
            where: { id }
        }).then(() => res.send('Post deleted.'))
    }catch (err) {
        res.send("There was an error...")
    }
    
})


module.exports = router;