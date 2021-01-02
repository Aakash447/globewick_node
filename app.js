const express = require('express')
const app = express()
const userRouter = require('./server/routes/routes')
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, 'views'));

console.log('dirname:',__dirname)
app.set("view engine", "ejs");

//Routes
app.use('/api',userRouter)

const port = process.env.PORT || 3000 ;
app.listen(port,()=>{
    console.log(`Server is started at ${port}`)
})
