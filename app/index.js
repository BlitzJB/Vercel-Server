const app = require('express')();

let memory = {}

app.get('/api', (req, res) => {
    res.send(memory);
    memory.last = new Date().toDateString();
})

module.exports = app;