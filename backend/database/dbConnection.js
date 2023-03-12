const mongoose = require('mongoose')

// Creating a singleton object of database connection 
class Database {
  constructor() {
    this._connect()
  }
  _connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
      console.log("Connection to the database succeeded")
    } catch (err) {
      console.log("Connection to the database failed")
    }
  }
}
module.exports = new Database();
