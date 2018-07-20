const mongoose = require('mongoose');
const Skills = require('../models/skills');

exports.setSkills = (req) => new Promise((resolve) => {
    // let skills = new Skills(req.body);
    // skills.save()
    // .then((result) => {
    //    resolve('Skills saved') ;
    // })
    // .catch((err) => {throw new Error(err)});

    Skills.findOne()
    .then((result) => {
        if (result) {
            result.set(req.body);

            return result;
        }
        else {
            let skills = new Skills(req.body);
            return skills;
        }
    })
    .then((skills) => skills.save())
    .then((result) => {
       resolve('Skills saved') ;
    })
    .catch((err) => {throw new Error(err)});
})

exports.getSkills = () => new Promise((resolve) => {
    // обращаться к бд , обрабатывать ответ от базы, ....
    resolve(['one', 'two', 'three']);
})
