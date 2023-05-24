const express = require('express');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');

const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rotas para pacientes
app.use(patientRoutes);

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API FHIR');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
