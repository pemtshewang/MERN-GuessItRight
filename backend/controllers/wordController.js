const connect = require("../database/dbConnection.js")
const wordModel = require("../models/wordModel.js")


exports.getRandom = async (req, res) => {
  try{
    connect
    const data = await wordModel.aggregate([{ $sample: { size: 1 } }])
    res.json(data)
  }catch(err){
    console.error(err)
    res.json({"error":"Error while retrieving a random word"})
  }
}

exports.getAll = async (req,res) =>{
  try {
    const data = await wordModel.find({});
    res.json(data);
  }catch(err){
    console.log("Error getting all data")
    res.json({"error":"Error retrieving all data"})
  }
}


