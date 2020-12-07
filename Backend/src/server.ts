import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3003, ()=>{
    console.log("Server listening on http://localhost:3003")
})
