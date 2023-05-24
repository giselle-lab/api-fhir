const patientService = require('../services/patientService');

// Controlador para criar um paciente
async function createPatient(req, res) {
  try {
    const patient = req.body;
    const createdPatient = await patientService.createPatient(patient);
    res.status(201).json(createdPatient);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar paciente' });
  }
}

// Controlador para ler os detalhes de um paciente
async function getPatient(req, res) {
  try {
    const patientId = req.params.id;
    const patient = await patientService.getPatient(patientId);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter detalhes do paciente' });
  }
}

// Controlador para atualizar os detalhes de um paciente
async function updatePatient(req, res) {
  try {
    const patientId = req.params.id;
    const updatedPatientData = req.body;
    const updatedPatient = await patientService.updatePatient(patientId, updatedPatientData);
    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar paciente' });
  }
}

// Controlador para deletar um paciente
async function deletePatient(req, res) {
  try {
    const patientId = req.params.id;
    await patientService.deletePatient(patientId);
    res.json({ message: 'Paciente deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar paciente' });
  }
}

module.exports = {
  createPatient,
  getPatient,
  updatePatient,
  deletePatient
};
