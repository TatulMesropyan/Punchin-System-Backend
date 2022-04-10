const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Dashboard");
});
//Will show "Home Page" when get to localhost:3000/ 

router.get('/posts', (req, res) => {
    res.send("We are on posts");
});
//Will show "We are on posts" when get to localhost:3000/posts

module.exports = router;