# Tugas3_Kelompok8

- Widya Nurul Sukma (2208107010054)
- Pryta Rosela (2208107010046)
- Mila Lestari (2208107010002)

# Anime Characters API  

Simple REST API using **Express.js** to manage anime characters.  

## Features  
✅ Get all characters  
✅ Get a character by ID  
✅ Add a new character  
✅ Update a character by ID  
✅ Delete a character by ID  

## Installation  

Clone this repository:  
```sh
git clone https://github.com/WidyaNurulSukma/Tugas3_Kelompok8.git
```

Navigate to the project directory:  
```sh
cd Tugas3_Kelompok8
```

Install dependencies:  
```sh
npm install
```

## Usage  

Start the server:  
```sh
node index.js
```
The API will run on:  
```
http://localhost:3000
```

You can test it by visiting:  
```
http://localhost:3000/characters
```

## API Endpoints  

### 🔹 Get All Characters  
**Method:** `GET`  
**Endpoint:** `/characters`  
**cURL Command:**  
```sh
curl -X GET http://localhost:3000/characters
```
**Response:**  
```json
{
  "data": [
    { "id": 1, "name": "Naruto Uzumaki", "age": 17, "anime": "Naruto" },
    { "id": 2, "name": "Luffy", "age": 19, "anime": "One Piece" },
    { "id": 3, "name": "Goku", "age": 42, "anime": "Dragon Ball" }
  ]
}
```

### 🔹 Get a Character by ID  
**Method:** `GET`  
**Endpoint:** `/characters/:id`  
**Example:** Get character with ID 1  
```sh
curl -X GET http://localhost:3000/characters/1
```
**Response:**  
```json
{
  "id": 1,
  "name": "Naruto Uzumaki",
  "age": 17,
  "anime": "Naruto"
}
```

### 🔹 Add a New Character  
**Method:** `POST`  
**Endpoint:** `/characters`  
**cURL Command:**  
```sh
curl -X POST http://localhost:3000/characters -H "Content-Type: application/json" -d "{\"name\": \"Saitama\", \"age\": 25, \"anime\": \"One Punch Man\"}"
```
**Response:**  
```json
{
  "id": 4,
  "name": "Saitama",
  "age": 25,
  "anime": "One Punch Man"
}
```

### 🔹 Update a Character by ID  
**Method:** `PUT`  
**Endpoint:** `/characters/:id`  
**Example:** Update character with ID 2  
```sh
curl -X PUT http://localhost:3000/characters/2 -H "Content-Type: application/json" -d "{\"name\": \"Monkey D. Luffy\", \"age\": 20, \"anime\": \"One Piece\"}"
```
**Response:**  
```json
{
  "id": 2,
  "name": "Monkey D. Luffy",
  "age": 20,
  "anime": "One Piece"
}
```

### 🔹 Delete a Character by ID  
**Method:** `DELETE`  
**Endpoint:** `/characters/:id`  
**Example:** Delete character with ID 3  
```sh
curl -X DELETE http://localhost:3000/characters/3
```
**Response:**  
```json
{
  "message": "Character deleted successfully"
}
```

## Dependencies  
- **Express.js** (for handling API requests)  
- **Open** (for automatically opening the browser)

## License
This project is licensed under the MIT License.

