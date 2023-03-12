require("dotenv").config()
const mongoose = require("mongoose")
export default const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (err) {

  }
}
