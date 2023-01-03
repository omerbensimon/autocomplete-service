const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({}, { strict: false, timestamps: true });

const employeeSchema = mongoose.model('employees', EmployeeSchema);

module.exports = { employeeSchema };
