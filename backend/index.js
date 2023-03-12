const express = require("express")
const app = express()
const cors = require("cors")
const wordRouter = require("./routes/wordRoutes.js")
const path = require("path")

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//static files
app.use(express.static(path.join(__dirname,"..","frontend","dist")));

//home
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,"..","frontend","dist","index.html"));
});

// setting word routers
app.use("", wordRouter)

// setting port 
const PORT = process.env.PORT || 3500

// binding 
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`)
})
