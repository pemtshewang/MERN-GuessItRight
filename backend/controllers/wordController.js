const connect = require("../database/dbConnection.js")
const wordModel = require("../models/wordModel.js")


const dict = [
  {
    "word": "Python",
    "hint": "Named after Monty Python's Flying Circus comedy group, not the reptile."
  },
  {
    "word": "Java",
    "hint": "Named after the coffee, not the Indonesian island."
  },
  {
    "word": "Ruby",
    "hint": "Named after a type of red gemstone, not a character from Steven Universe."
  },
  {
    "word": "Perl",
    "hint": "Stands for 'Practical Extraction and Reporting Language', and is often associated with one-liner scripts."
  },
  {
    "word": "C++",
    "hint": "An extension of the C language, adding object-oriented programming and other features."
  },
  {
    "word": "Swift",
    "hint": "Developed by Apple and used for developing iOS and macOS applications."
  },
  {
    "word": "Haskell",
    "hint": "Named after the logician Haskell Curry, who made significant contributions to mathematical logic and theoretical computer science."
  },
  {
    "word": "Assembly",
    "hint": "One of the earliest computer languages, used to write programs that run directly on a computer's hardware."
  },
  {
    "word": "Rust",
    "hint": "Designed for system programming, with a focus on speed, safety, and concurrency."
  },
  {
    "word": "Lisp",
    "hint": "One of the oldest programming languages, known for its unique syntax and powerful macro system."
  }
]

exports.getRandom = async (req, res) => {
  try{
    connect
    //const data = await wordModel.aggregate([{ $sample: { size: 1 } }])
    res.json(dict)
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


