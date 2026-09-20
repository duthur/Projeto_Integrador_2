// Servidor Central - EcoTerminal Escolar
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/chamado', (req, res) => {
    const { sala, tipo, descricao } = req.body;
    console.log(`[ALERTA RECEBIDO] Sala: ${sala} | Tipo: ${tipo} | Descrição: ${descricao}`);
    
    return res.status(201).json({
        sucesso: true,
        mensagem: "Chamado registrado com sucesso no painel da diretoria."
    });
});

app.listen(PORT, () => {
    console.log(`Servidor do EcoTerminal Escolar rodando na porta ${PORT}`);
});
