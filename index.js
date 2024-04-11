import express from "express";
import bodyParser from "body-parser";

const app = express();
// app.set("view engine","ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

 app.get("/",(req,res)=>{
    res.render("index.ejs");
 })


















app.listen(3000,()=>{
    console.log("server running on 3000");
})