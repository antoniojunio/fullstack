//app.
import express from 'express'
import helmet from 'helmet'

const app = express()
app.use(helmet())
app.use(express.json())

const port =parseInt(`${process.env.PORT}`)

app.listen(port)
console.log(`Running on port 3000 ${port}`)