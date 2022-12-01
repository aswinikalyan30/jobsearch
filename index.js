const express = require('express')
const app = express()

const data = require("./SE-indeed.json")
const cloud = require("./data.json")
const intern = require("./internship.json")
const fresher = require("./fresher.json")
const mixmatch = require("./mix.json")

const { application } = require('express')
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
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
app.get('/mix', (req,res) => {
    res.json(mixmatch)
})
app.listen(3000)
