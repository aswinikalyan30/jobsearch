const express = require('express')
const app = express()

const data = require("./SE-indeed.json")
const cloud = require("./dev.json")
const intern = require("./internship.json")
const fresher = require("./electrical.json")
const part = require("./fresher.json")
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
app.get('/ISE', function (req, res) {
  res.json(data)
})
app.get('/CSE', function (req,res) {
    res.json(cloud)
})
app.get('/PT',function (req, res) {
    res.json(part)
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
app.get('/EEE', (req,res) => {
    res.json(fresher)
})
//fetches fresher details
app.get('/MEC', (req,res) => {
    res.json(mixmatch)
})
app.listen(3000)
