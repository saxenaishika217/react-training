const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let employees = [
  {
    id: 1,
    name: 'Emily',
    role: 'QA Engineer',
    experience: '2 Years',
  },
  {
    id: 3,
    name: 'Neal',
    role: 'Backend Developer',
    experience: '5 Years',
  },
  {
    id: 2,
    name: 'John',
    role: 'Frontend Developer',
    experience: '3 Years',
  },
  {
    id: 4,
    name: 'Sarah',
    role: 'Frontend Developer',
    experience: '2 Years',
  },
  {
    id: 5,
    name: 'Isha',
    role: 'SAP',
    experience: '1 Year',
  },
];

// GET - API health check
app.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

// GET - Get all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// GET - Get employee by ID
app.get('/api/employees/:id', (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find((employee) => employee.id === id);

  if (!employee) {
    return res.status(404).json({
      message: 'Employee not found',
    });
  }

  res.json(employee);
});

// POST - Add a new employee
app.post('/api/employees', (req, res) => {
  const { name, role, experience } = req.body;

  const newEmployee = {
    id: employees.length
      ? Math.max(...employees.map((employee) => employee.id)) + 1
      : 1,
    name,
    role,
    experience,
  };

  employees.push(newEmployee);

  res.status(201).json(newEmployee);
});

// PUT - Update an entire employee
app.put('/api/employees/:id', (req, res) => {
  const id = Number(req.params.id);

  const employeeIndex = employees.findIndex((employee) => employee.id === id);

  if (employeeIndex === -1) {
    return res.status(404).json({
      message: 'Employee not found',
    });
  }

  const updatedEmployee = {
    id,
    name: req.body.name,
    role: req.body.role,
    experience: req.body.experience,
  };

  employees[employeeIndex] = updatedEmployee;

  res.json(updatedEmployee);
});

// PATCH - Partially update an employee
app.patch('/api/employees/:id', (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find((employee) => employee.id === id);

  if (!employee) {
    return res.status(404).json({
      message: 'Employee not found',
    });
  }

  if (req.body.name !== undefined) {
    employee.name = req.body.name;
  }

  if (req.body.role !== undefined) {
    employee.role = req.body.role;
  }

  if (req.body.experience !== undefined) {
    employee.experience = req.body.experience;
  }

  res.json(employee);
});

// DELETE - Delete an employee
app.delete('/api/employees/:id', (req, res) => {
  const id = Number(req.params.id);

  const employeeIndex = employees.findIndex((employee) => employee.id === id);

  if (employeeIndex === -1) {
    return res.status(404).json({
      message: 'Employee not found',
    });
  }

  const deletedEmployee = employees.splice(employeeIndex, 1);

  res.json({
    message: 'Employee deleted successfully',
    employee: deletedEmployee[0],
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}

module.exports =app;