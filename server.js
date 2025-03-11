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

// Mendapatkan satu karakter berdasarkan ID
app.get("/characters/:id", (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (!character) {
        return res.status(404).json({ message: "Character not found" });
    }
    res.json(character);
});

// Menambahkan karakter baru
app.post("/characters", (req, res) => {
    const { name, age, anime } = req.body;
    if (!name || !age || !anime) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const newCharacter = {
        id: characters.length + 1,
        name,
        age,
        anime
    };
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
});
