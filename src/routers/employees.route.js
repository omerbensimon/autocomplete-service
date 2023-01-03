const router = require('express').Router();

const EmployeesController = require('../controllers/employees.controller');
const employees = new EmployeesController();

router.get('/', async (req, res) => {
    const data = await employees.getEmployees();
    res.send(data);
});
module.exports = router;