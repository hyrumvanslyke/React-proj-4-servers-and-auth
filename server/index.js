import isAuthenticated from './middleware/isAuthenticated'
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

const{getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {register, login} = require('./controllers/auth')

app.post('/posts', isAuthenticated, addPost)
app.post('./login', login)
app.post('./register', register)

app.get('./posts', getAllPosts)
app.get('./userposts/:userId', getCurrentUserPosts)

app.put('./posts/:id', isAuthenticated, editPost)

app.delete('./posts/:id', isAuthenticated, deletePost)


app.listen(PORT, () => console.log(`Party on Port ${PORT}`))