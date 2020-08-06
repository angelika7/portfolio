const express = require("express");
const app = express();
const path = require('path');
/////////////////////


/* navItem.addEventListener(click, active);

function active() {
    navItem.classList.toggle('active');
} */

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
//app.use(express.static('./public/'));

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.render("index", {
        page_name: "index",
        animation: true
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        page_name: "about"
    });
});

app.get("/projects", function(req, res) {
    res.render("projects", {
        page_name: "projects"
    });
});

app.get("/technologies", function(req, res) {
    res.render("technologies", {
        page_name: "technologies"
    });
});

app.get("/contact", function(req, res) {
    res.render("contact", {
        page_name: "contact"
    });
}); 

app.listen(5500, function() {
    console.log("Server is working now!");
})

