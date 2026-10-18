// gerekli olan express modulunu ve routes, middleware klasorlerinden  logger ve taskRoutes alinir
const express = require('express');
const logger = require('./middlewares/logger');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

// middleware katmani
app.use(express.json());
app.use(logger);

// route lar baglanir
app.use('/api/tasks', taskRoutes);

// Ana sayfa (http://localhost:3000/)
app.get('/', (req, res) => {
    res.json({ message: "Taskflow API'ye hoşgeldiniz" });
});

// Sunucuyu ayaga kaldirir
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});