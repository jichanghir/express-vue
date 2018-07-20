const express = require('express');
const router = express.Router();

const skills = require('./controllers/skills');
const articles = require('./controllers/articles');

router.post('/setSkills', (req, res) => {
    skills.setSkills(req)
    .then((result) => {
        res.send({
            result
        })
    })
});

router.post('/getSkills', (req, res) => {
    skills.getSkills()
    .then((result) => {
        res.send({
            result
        })
    })
});

router.post('/setNewArticle', (req, res) => {
    articles.setNewArticle(req)
    .then((result) => {
        res.send({
            result
        })
    })
})

router.post('/getArticle', (req, res) => {
    articles.getArticle(req)
    .then((result) => {
        res.send({
            result
        })
    })
})

router.post('/getArticles', (req, res) => {
    articles.getArticles()
    .then((result) => {
        res.send({
            result
        })
    })
})


module.exports = router;


// restFull api
// pureJSON api

// 400, 404, 200, ....
