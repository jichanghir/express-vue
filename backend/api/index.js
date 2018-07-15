const express = require('express');
const router = express.Router();

const skills = require('./controllers/skills');

router.post('/setNewSkill', (req, res) => {
    skills.setNewSkill(req)
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
})


module.exports = router;


// restFull api
// pureJSON api

// 400, 404, 200, ....
