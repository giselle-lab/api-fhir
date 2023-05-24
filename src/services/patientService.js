const Patient = require('../models/patient');

// Simulando um banco de dados ou integração com a biblioteca FHIR
const patientsDB = [];

// Serviço para criar um paciente
function createPatient(patientData) {
  const { firstName, lastName, gender, birthDate } = patientData;
  const patient = new Patient(firstName, lastName, gender, birthDate);
  patientsDB.push(patient);
  return patient;
}

// Serviço para obter os detalhes de um paciente
function getPatient(patientId) {
  return patientsDB.find(patient => patient.id === patientId);
}

// Serviço para atualizar os detalhes de um paciente
function updatePatient(patientId, updatedPatientData) {
  const patientIndex = patientsDB.findIndex(patient => patient.id === patientId);
  if (patientIndex !== -1) {
    const updatedPatient = Object.assign(patientsDB[patientIndex], updatedPatientData);
    return updatedPatient;
  }
  return null;
}

// Serviço para deletar um paciente
function deletePatient(patientId) {
  const patientIndex = patientsDB.findIndex(patient => patient.id === patientId);
  if (patientIndex !== -1) {
    patientsDB.splice(patientIndex, 1);
  }
}

module.exports = {
  createPatient,
  getPatient,
  updatePatient,
  deletePatient
};
