import express from 'express'
import bodyParser from 'body-parser'
import db from './queries.js'


const app = express()
const port = 8439

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express and Postgres' })
})
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.listen(port, () => {
    console.log(`App is running on port , ${port}`)
})

export default app