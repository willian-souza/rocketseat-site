const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const coursesContent = require("./data")

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views",{
    express:server,
    autoescape: false
})

server.get("/", function(req,res){
    return res.render("index")
})

server.get("/about", function(req,res){
    return res.render("about")
})

server.get("/courses", function(req,res){
    return res.render("courses", {courses:coursesContent})
})


server.get("/course/:id", function(req,res){
    const id = req.params.id

    const course = coursesContent.find(function(course){
        return course.course == id
    })

    if(!course){
        return res.send("Course not found")
    }

    return res.render("course",{course})

})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });




server.listen(3000,function(){
    console.log("server is running")
})