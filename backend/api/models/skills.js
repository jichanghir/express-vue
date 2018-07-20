const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema({
    skills: [
       {
            skillType: {
                type: String,
                required: [true, 'skillType are required']
            },
            skillsArray: [
                {
                    name: String,
                    percent: Number
                }
            ]
       }
    ]
});

module.exports = mongoose.model('Skills', skillsSchema);

