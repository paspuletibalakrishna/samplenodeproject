const express = require('express')
const path = require('path')

const app = express()

const staticpath = path.join(__dirname,'../public')

app.use(express.static(staticpath))

app.set('view engine', 'hbs')
// app.get('', (req, res) => {
//    res.send('Hello this is bala first node program in browser')
// })

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

 app.listen(3000, () => {
     console.log('Server is up and running on Port 3000')
 })