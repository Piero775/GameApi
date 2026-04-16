const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Tus endpoints aquí...

app.get('/api/games', (req, res) => {
    const games = [
        { id: 1, name: "Zenless Zone Zero", description: "🚗 Nuevo parche 1.1", videoId: "01YuCEPTK8c" },
        { id: 2, name: "Dragon Ball Legends", description: "🔥 Torneo de Artes Marciales!", videoId: "vKOoeId5r90" },
        { id: 3, name: "Dokkan Battle", description: "🎉 5to Aniversario!", videoId: "0lS14vFi0JI" }
    ];
    res.json(games);
});

// Exportar para Vercel (importante)
module.exports = app;