const {isAuthenticated}= require('./middleware/isAuthenticated')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4005
const {seq} = require('./util/database')
const {User} = require('./models/user')
const {Post} = require('./models/post')
User.hasMany(Post)
Post.belongsTo(User)

app.use(express.json())
app.use(cors())

const{getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {register, login} = require('./controllers/auth')

app.post('/posts', isAuthenticated, addPost)
app.post('/login', login)
app.post('/register', register)

app.get('/posts', getAllPosts)
app.get('/userposts/:userId', getCurrentUserPosts)

app.put('/posts/:id', isAuthenticated, editPost)

app.delete('/posts/:id', isAuthenticated, deletePost)

seq.sync()
.then(()=>{
    app.listen(PORT, () => console.log(`Party on Port ${PORT}`))
})
.catch(err=>console.log(err))

