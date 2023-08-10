//app.
import express from 'express'
import helmet from 'helmet'

const app = express()
app.use(helmet())
app.use(express.json())
app.listen(3000)

console.log('Running on port 3000')