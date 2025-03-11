const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let characters = [
    { id: 1, name: "Naruto Uzumaki", age: 17, anime: "Naruto" },
    { id: 2, name: "Luffy", age: 19, anime: "One Piece" },
    { id: 3, name: "Goku", age: 42, anime: "Dragon Ball" }
];

// Route default: redirect ke /characters
app.get("/", (req, res) => {
    res.redirect("/characters");
});

// Mendapatkan semua karakter
app.get("/characters", (req, res) => {
    res.json({ data: characters });
});
