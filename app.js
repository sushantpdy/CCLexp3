const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Static folders
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/skills", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "skills.html"));
});

// Start server
app.listen(port, () => {
    console.log("Server started on http://localhost:" + port);
});
