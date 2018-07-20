const mongoose = require('mongoose');
const Article = require('../models/article');

exports.setNewArticle = (req) => new Promise((resolve) => {

    let article = new Article();

    article.title = req.body.title;
    article.body = req.body.body;

    article.save()
    .then((result) => {
       resolve('New Article saved') ;
    })
    .catch((err) => {throw new Error(err)});

})

exports.getArticle = (req) => new Promise((resolve) => {

    Article.find({_id: req.body.id})
    .then((result) => {
        resolve(result)
    })
    .catch((err) => {throw new Error(err)});

})

exports.getArticles = (req) => new Promise((resolve) => {

    Article.find()
    .then((result) => {
        resolve(result)
    })
    .catch((err) => {throw new Error(err)});

})
