exports.setNewSkill = (req) => new Promise((resolve) => {
    console.log("req", req.body.token);
    // обращаться к бд , обрабатывать ответ от базы, ....
    resolve('askdjgh');
})

exports.getSkills = () => new Promise((resolve) => {
    // обращаться к бд , обрабатывать ответ от базы, ....
    resolve(['one', 'two', 'three']);
})
