const express = require("express");
const app = express();
const port = 8060;
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));
let post = [{
        username: "apna college",
        content: "I Love Coding !"
    },
    {
        username: "Nishant",
        content: " #1 or Nothing"
    },
    {
        username: "Prashant",
        content: "SMHC"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.js");
})
app.listen(port, () => {
    console.log("Listening to port : 8060");
});