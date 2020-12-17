import express from 'express'
import cors from 'cors'
import routes from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.json({limit: "500mb"}))
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}))
app.use(routes)


app.listen(3003, ()=>{
    console.log("Server listening on http://localhost:3003")
})
