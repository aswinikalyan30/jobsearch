var UsaStates = require("usa-states").UsaStates
var usStates = new UsaStates()
var CC = usStates.arrayOf("abbreviations")
const a = require("./location")
// THIS IS FILTERING BASED ON THE COUNTRY CODES
let cy = []
// const CC = countryList().getValues();
const lis = {
    Software: ["java", "python", "c++"],
    Machine: ["python"],
    Research: ["python", "statistcs"],
    Full: ["nodejs", "reactjs"],
    Developer: ["javascript", "mysql"],
    Cloud: ["unix", "python", "aws"],
    Support: ["communications"],
    Architect: ["aws", "gcp", "cloud"],
    Network: ["os", "networking"],
    Backend: ["mongodb", "nodejs", "mysql"],
    Electrical: ["c++", "cad", "pscad"],
    Signal: ["matlab", "vlsi", "c", "c++"],
    Design: ["cad"],
    Mechanical: ["autocad"],
    Apprentice: ["cad", "vlsi"],
    Lecturer: ["teaching"],
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371
    var dLat = deg2rad(lat2 - lat1)
    var dLon = deg2rad(lon2 - lon1)
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    var d = Math.ceil(R * c)
    return d
}
// let lattitude1
// let longitude1
function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
const filterJSON = (json) => {
    {
        json.forEach((country) => {
            country["country"] = country["Company"]
                .split(" ")
                .filter((value) => CC.includes(value))[0]
            country.country ? null : (country.country = "CA")
            country["tags"] =
                lis[
                    `${country["Title"]
                        .split(" ")
                        .filter((value) => Object.keys(lis).includes(value))}`
                ]
        })
        return json
    }
}
const filterJSON1 = async (json) => {
    {
        const location1 = [ 39.9178244, -75.3979711 ] 
        //for await(const country of json ){
        const response = await Promise.all(
            json.map(async (country) => {
                const location2 = await a(country["Company"])
                if (location1 && location2) {
                    // console.log(location2);
                    console.log(location1, location2)
                    country["miles"] = getDistanceFromLatLonInKm(
                        location1[0],
                        location1[1],
                        location2[0],
                        location2[1]
                    )
                }
                country["country"] = country["Company"]
                    .split(" ")
                    .filter((value) => CC.includes(value))[0]
                country.country ? null : (country.country = "CA")
                country["tags"] =
                    lis[
                        `${country["Title"]
                            .split(" ")
                            .filter((value) => Object.keys(lis).includes(value))}`
                    ]
            })
        )
        if (response) {
            return json
        }
    }
}
module.exports = { filterJSON, filterJSON1 }