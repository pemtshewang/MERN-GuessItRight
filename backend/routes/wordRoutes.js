const express = require("express")
const app = express()
const router = express.Router()
const wordController =require("../controllers/wordController.js")

router.get("/word/random",wordController.getRandom)
router.get("/word/all",wordController.getAll)

module.exports = router