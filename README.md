# Tugas3_Kelompok8

- Widya Nurul Sukma (2208107010054)
- Pryta Rosela (2208107010046)
- Mila Lestari (2208107010002)

# Anime Characters API

Simple REST API using Express.js to manage anime characters.

## Features
- Get all characters
- Get a character by ID
- Add a new character
- Update a character by ID
- Delete a character by ID

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/WidyaNurulSukma/Tugas3_Kelompok8.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Tugas3_Kelompok8
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the server:
   ```sh
   node index.js
   ```
2. The API will run on:
   ```sh
   http://localhost:3000
   ```
3. It will automatically open `http://localhost:3000/characters` in your browser.

## API Endpoints
### Get All Characters
```http
GET /characters
```
Response:
```json
{
  "data": [
    { "id": 1, "name": "Naruto Uzumaki", "age": 17, "anime": "Naruto" },
    { "id": 2, "name": "Luffy", "age": 19, "anime": "One Piece" },
    { "id": 3, "name": "Goku", "age": 42, "anime": "Dragon Ball" }
  ]
}
```

### Get a Character by ID
```http
GET /characters/:id
```
Response:
```json
{
  "id": 1,
  "name": "Naruto Uzumaki",
  "age": 17,
  "anime": "Naruto"
}
```

### Add a New Character
```http
POST /characters
```
Request Body:
```json
{
  "name": "Sasuke Uchiha",
  "age": 17,
  "anime": "Naruto"
}
```
Response:
```json
{
  "id": 4,
  "name": "Sasuke Uchiha",
  "age": 17,
  "anime": "Naruto"
}
```

### Update a Character by ID
```http
PUT /characters/:id
```
Request Body:
```json
{
  "name": "Monkey D. Luffy",
  "age": 20
}
```
Response:
```json
{
  "id": 2,
  "name": "Monkey D. Luffy",
  "age": 20,
  "anime": "One Piece"
}
```

### Delete a Character by ID
```http
DELETE /characters/:id
```
Response:
```json
{
  "message": "Character deleted successfully"
}
```

## Dependencies
- Express.js
- Open (for automatically opening the browser)

## License
This project is licensed under the MIT License.

