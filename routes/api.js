const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const cors = require('cors');

const corsOpition = {
    origin: 'http://localhost:5000'
};

router.use(cors(corsOpition))

router.get('/all', (req, res) => {

    res.json(JSON.stringify(posts.getAll()));
});

router.post('/new', bodyParser.json(), (req, res) => {

    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send('Post criado com sucesso')
})

router.put('/editPost', bodyParser.json(), (req, res) => {

    let postId = req.body.id
    let title = req.body.title
    let description = req.body.description

    posts.editPost(postId, title, description)
    res.send('Post editado com sucesso')
})

router.delete('/deletePost', bodyParser.json(), (req, res) => {

    postId = req.body.id

    posts.deletePost(postId)
    res.send('Post deletado com sucesso')
})
module.exports = router;