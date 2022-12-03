const express = require('express')
const app = express()
const cloud = require("./cloud.json")
const electrical = require("./electrical.json")
const mixmatch = require("./mix.json")
const {filterJSON,filterJSON1 }= require('./filter')
const final = require("./final.json")
const mechanic = require("./mechanic.json")
const a = require("./location")

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
app.get('/ISE',  function (req, res) {
  res.json( filterJSON(cloud))
})
app.get('/CSE', async function (req,res) {
    res.json(await filterJSON1(final))
})
app.get('/PT',function (req, res) {
    res.json(filterJSON(final))
})


app.get('/EEE', (req,res) => {
    res.json(filterJSON(electrical))
})
//fetches fresher details
app.get('/MEC', (req,res) => {
    res.json(filterJSON(mechanic))
})

app.post("/LOC", (req,res) =>{

})


app.listen(3000)
