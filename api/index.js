const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Base de datos temporal
let users = [];

// Endpoints
app.get('/api/games', (req, res) => {
    const games = [
        { id: 1, name: "Zenless Zone Zero", description: "🚗 Nuevo parche 1.1", videoId: "01YuCEPTK8c" },
        { id: 2, name: "Dragon Ball Legends", description: "🔥 Torneo de Artes Marciales!", videoId: "vKOoeId5r90" },
        { id: 3, name: "Dokkan Battle", description: "🎉 5to Aniversario!", videoId: "0lS14vFi0JI" }
    ];
    res.json(games);
});

app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ success: "false", error: "Faltan campos" });
    }
    
    if (users.find(u => u.username === username)) {
        return res.status(409).json({ success: "false", error: "Usuario ya existe" });
    }
    
    users.push({ username, email, password });
    res.json({ success: "true", message: "Usuario registrado" });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        res.json({ success: "true", message: "Login exitoso", username: user.username });
    } else {
        res.status(401).json({ success: "false", error: "Credenciales incorrectas" });
    }
});

// Exportar para Vercel
module.exports = app;