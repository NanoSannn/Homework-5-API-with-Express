const express = require('express');
const app = express.Router();
const employeeControllers = require('../controllers/employeeControllers');

app.get("/", employeeControllers.getEmployee);

app.get("/:id", employeeControllers.getEmployeeById);

app.get("/tax/:sal", employeeControllers.getEmployeeBySal);

app.get("/retire/:age", employeeControllers.getEmployeeByAge);

app.post("/",employeeControllers.addEmployee);

module.exports = app;