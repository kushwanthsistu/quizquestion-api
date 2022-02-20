const express = require('express') ;
const gkque = require('./data/generalknowledge.json') ;

const app = express() ;

app.get('/', (req, res) => {
    res.send("hello this is from server") ;
})

app.get('/working', (req, res) => {
    res.send("hooray!!! working and we are testing new route") ;
})

app.get('/generalknowledge', (req, res) => {
    const l = gkque.length ;
    let x = Math.random() ;
    x = Math.floor(x * l) ;
    res.json(gkque[x]) ;
})

const port = process.env.PORT || 3000 ;

app.listen(port ,() => {
    console.log(`listening on ${port}`) ;
})