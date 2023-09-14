const express = require("express");
const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");


// app.get("/", (req, res)=>{
//     let myString = "<h1>test~~</h1>"
//     res.render("index", {myString});
// });

app.get("/test",(req, res)=>{
    res.sendFile(__dirname + "/try1.html");
})

app.get("/", (req, res)=>{

    const languages = [
        {name:"python", rating:9.5, popularity:9.7, trends:"superHot"},
        {name:"Java", rating:9.4, popularity:8.5, trends:"Hot"},
        {name:"C++", rating:9.2, popularity:7.7, trends:"Hot"},
        {name:"PHP", rating:9.0, popularity:5.7, trends:"drcreasing"},
        {name:"JS", rating:8.5, popularity:8.7, trends:"Hot"}
    ];
    console.log(languages);
    res.render("index", {languages});
})


//port, callbackFunction
app.listen(3000, ()=>{
    console.log("正在運行port3000");
})