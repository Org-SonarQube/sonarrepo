/* const express = require('express')
const app = express()
const port = 3000
const expat = require('node-expat');

app.get('/test', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    // ruleid: xxe_expat
    parser.parse(req.body)
    res.send('Hello World!')
})

app.get('/test1', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    // ruleid: xxe_expat
    parser.write(req.query.value)
    res.send('Hello World!')
})

app.get('/test2', async (req, res) => {
    var parser = new expat.Parser('UTF-8')
    // ruleid: xxe_expat
    var data = req.body.foo
    parser.write(data)
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) */
