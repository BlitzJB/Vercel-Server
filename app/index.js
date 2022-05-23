const app = require('express')();

let memory = {}

app.get('/', (req, res) => {
    res.send(memory);
    memory.last = new Date().toDateString();
})

module.exports = app;