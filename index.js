const express = require('express') ;
const cors = require('cors') ;
const gkque = require('./data/generalknowledge.json') ;
const bioque = require('./data/biology.json') ;
const cheque = require('./data/chemistry.json') ;
const phyque = require('./data/physics.json') ;

const app = express() ;
app.use(cors()) ;

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

app.get('/biology', (req, res) => {
    const l = bioque.length ;
    let x = Math.random() ;
    x = Math.floor(x * l) ;
    res.json(bioque[x]) ;
})

app.get('/physics', (req, res) => {
    const l = phyque.length ;
    let x = Math.random() ;
    x = Math.floor(x * l) ;
    res.json(phyque[x]) ;
})

app.get('/chemistry', (req, res) => {
    const l = cheque.length ;
    let x = Math.random() ;
    x = Math.floor(x * l) ;
    res.json(cheque[x]) ;
})

const port = process.env.PORT || 3000 ;

app.listen(port ,() => {
    console.log(`listening on ${port}`) ;
})