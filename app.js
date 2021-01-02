const express = require('express')
const app = express()
const userRouter = require('./server/routes/routes')
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, 'views'));

console.log('dirname:',__dirname)
app.set("view engine", "ejs");

//Routes
app.get('/',(req,res)=>{
    console.log(' in app.get ')
    res.render('User/index')
})
console.log('process.env.NODE_ENV:',process.env.NODE_ENV)

    app.listen(()=>{
        console.log(`Server is started`)
    })


