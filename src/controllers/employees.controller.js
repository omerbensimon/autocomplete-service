const { employeeSchema } = require("../models/employee.model");
const employees = require("../resources/employees.json")

module.exports = class EmployeesController {
    constructor() {
        this.initDB()
    }

    initDB = () => {
        employeeSchema.deleteMany({}, function (err, result) {
            if (err) {
                console.error(err);
            }
        });
        employeeSchema.insertMany(employees)
    }

    getEmployees = async () => {
        return employeeSchema.find().sort({ name: 1 }).lean()
    }
}
