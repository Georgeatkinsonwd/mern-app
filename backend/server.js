const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express()

// middleware

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', require('./routes/goalRoutes')) 

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`server started on PORT:${process.env.PORT}`)
})
