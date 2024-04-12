import express from "express";
import bodyParser from "body-parser";

const app = express();
// app.set("view engine","ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

 app.get("/",(req,res)=>{
    res.render("index.ejs");
 })
 app.get("/form",(req,res)=>{
    res.render("form.ejs");
 })
 app.get("/post",(req,res)=>{
    res.render("post.ejs");
 }
)
app.post("/post", (req, res) => {
   const name = req.body.name;
   const content = req.body.content;

   console.log("Name:", name);
   console.log("Content:", content);

   res.render("post.ejs",{
      name,content
   });
});

















app.listen(3000,()=>{
    console.log("server running on 3000");
})