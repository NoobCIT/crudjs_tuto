var express = require('express');
var router = express.Router();

var employee = require("../controllers/EmployeeController");

//Get all employees
router.get('/', function(req, res) {
  employee.list(req, res);
});

//Get single employee by id
router.get('/show/:id', function(req, res) {
  employee.show(req, res);
});

//Create Employee
router.get('/create', function(req, res) {
  employee.create(req, res);
});

// Save employee
router.post('/save', function(req, res) {
  employee.save(req, res);
});

//Edit employee
router.get('/edit/:id', function(req, res) {
  employee.edit(req, res);
});

// Update
router.post('/update/:id', function(req, res) {
  employee.update(req, res);
});

// Delete
router.post('/delete/:id', function(req, res) {
  employee.delete(req, res);
});

module.exports = router;
