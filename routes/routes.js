const express = require('express');
const router = express.Router();
const db = require('../models');

// to all the posts...
router.get('/all', (req, res) => {
         db.Posts.findAll().then( posts => res.send(posts))
});

// get one of the posts...
router.get('/search/:id', (req, res) => {
  
         const { id } = req.params;

         db.Posts.findAll({
             where: { id }
        }).then( () => res.send( found ))  
});


// to add a new post...
router.post('/new', (req, res) => {
   
        db.Posts.create({
            titulo: req.body.titulo,
            contenido: req.body.contenido,
            categoria: req.body.categoria,
            imagen: req.body.imagen
        }).then( (newPost) => res.send({"New post created": newPost}))  
});

// edit a post...
router.patch('/edit/:id', (req, res) => {
  
        const { id } = req.params;

        db.Posts.update({
            titulo: req.body.titulo,
            contenido: req.body.contenido,
            categoria: req.body.categoria
        }, 
        { where: { id }}
        ).then(() => res.send("Your post was updated.") )   
})

// delete one post...
router.delete('/delete/:id', (req, res) => {
  
        const { id } = req.params;
    
            db.Posts.destroy({
                where: { id }
            }).then((id) => {
                if(id) {
                    res.send('Post deleted.')
                }else {
                    res.send("error")
                }
            })
})


module.exports = router;