const express = require('express')
const app = express()

const data = require("./SE-indeed.json")
const cloud = require("./data.json")
const intern = require("./internship.json")
const fresher = require("./fresher.json")

const { application } = require('express')
app.use(express.json())
app.use(cors());
app.get('/', (req,res) => {
    res.send("<h2>Search Software Engineering jobs and cloud for cloud jobs</h2>")
})
app.get('/se', function (req, res) {
  res.json(data)
})
app.get('/cloud', function (req,res) {
    res.json(cloud)
})
//fetches cloud details
app.post('/intern', (req,res)=>{
    
    if(!req.body.password){
        return res.json({data:"fail"})
    }
    if(req.body.password==="123"){
        
        return res.json(intern)
    }
    
})
app.get('/fresher', (req,res) => {
    res.json(fresher)
})
//fetches fresher details
app.listen(3000)
