const express = require('express') ;

const app = express() ;

app.get('/', (req, res) => {
    res.send("hello this is from server") ;
})

app.get('/working', (req, res) => {
    res.send("hooray!!! working and we are testing new route") ;
})


const port = process.env.PORT || 3000 ;

app.listen(port ,() => {
    console.log(`listening on ${port}`) ;
})