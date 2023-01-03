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
            else {
                employeeSchema.insertMany(employees, (err, result) => {

                    if (err) {
                        console.log('We have an error');
                    }
                })
            }
        });

    }

    getEmployees = async () => {
        return employeeSchema.find().sort({ name: 1 }).lean()
    }
}
