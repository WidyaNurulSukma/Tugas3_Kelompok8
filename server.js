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

// Mengupdate karakter berdasarkan ID
app.put("/characters/:id", (req, res) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
    if (!character) {
        return res.status(404).json({ message: "Character not found" });
    }

    const { name, age, anime } = req.body;
    if (name) character.name = name;
    if (age) character.age = age;
    if (anime) character.anime = anime;

    res.json(character);
});

// Menghapus karakter berdasarkan ID
app.delete("/characters/:id", (req, res) => {
    const index = characters.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: "Character not found" });
    }
    characters.splice(index, 1);
    res.json({ message: "Character deleted successfully" });
});

app.listen(port, async () => {
    console.log(`Server running on http://localhost:${port}`);
    
    // Dynamic import() buat open module yang ESM
    const open = (await import('open')).default;

    // Langsung buka di browser
    open(`http://localhost:${port}/characters`);
});
