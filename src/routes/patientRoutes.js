const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Rota para criar um paciente
router.post('/patients', patientController.createPatient);

// Rota para ler os detalhes de um paciente
router.get('/patients/:id', patientController.getPatient);

// Rota para atualizar os detalhes de um paciente
router.put('/patients/:id', patientController.updatePatient);

// Rota para deletar um paciente
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;
