const express = require("express")
const app = express()
const cors = require("cors")

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// setting word routers
app.use("", "./routes/wordRoutes.js")

// setting port 
const PORT = process.env.PORT || 3500

// binding 
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`)
})
