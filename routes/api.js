const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const posts = require('../model/posts');
const cors = require('cors')

const corsOpition = {
    origin: 'http://localhost:5000'
}
router.use(cors(corsOpition))

router.get('/all', (req, res) => {

    res.json(JSON.stringify(posts.getAll()));
});

router.post('/new', bodyParser.json(), (req, res) => {
    
    console.log(req.body)

    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send('sucesso')
})



module.exports = router;