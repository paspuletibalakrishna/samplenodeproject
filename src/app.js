const express = require('express')
const path = require('path')

const app = express()

const staticpath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000

app.use(express.static(staticpath))

app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
        title: 'first index file',
        owner: 'balakrishna'
    })
} )

app.get('/help', (req, res) => {
    res.send('Help page in browser')
 })

 app.get('/about', (req, res) => {
    res.send('About page in browser')
 })

 app.listen(port, () => {
     console.log('Server is up and running on Port' + port)
 })