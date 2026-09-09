const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');

const app = require('./index');

test('GET /api/employees returns employee list', async () => {
  const response = await request(app).get('/api/employees');

  assert.strictEqual(response.statusCode, 200);
  assert.ok(Array.isArray(response.body));
});

test('GET /api/employees/:id returns an employee', async () => {
  const response = await request(app).get('/api/employees/1');

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.body.id, 1);
});

test('GET /api/employees/:id returns 404 for unknown employee', async () => {
  const response = await request(app).get('/api/employees/99999');

  assert.strictEqual(response.statusCode, 404);
  assert.strictEqual(response.body.message, 'Employee not found');
});

test('POST /api/employees creates an employee', async () => {
  const response = await request(app)
    .post('/api/employees')
    .send({
      name: 'Test Employee',
      role: 'QA Engineer',
      experience: '1 Year',
    });

  assert.strictEqual(response.statusCode, 201);
  assert.strictEqual(response.body.name, 'Test Employee');
  assert.strictEqual(response.body.role, 'QA Engineer');
});

test('PUT /api/employees/:id updates an employee', async () => {
  const response = await request(app)
    .put('/api/employees/1')
    .send({
      name: 'Emily Updated',
      role: 'Senior QA Engineer',
      experience: '3 Years',
    });

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.body.name, 'Emily Updated');
  assert.strictEqual(response.body.role, 'Senior QA Engineer');
});

test('PATCH /api/employees/:id partially updates an employee', async () => {
  const response = await request(app)
    .patch('/api/employees/1')
    .send({
      role: 'QA Lead',
    });

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.body.role, 'QA Lead');
});

test('DELETE /api/employees/:id deletes an employee', async () => {
  const response = await request(app).delete('/api/employees/1');

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(
    response.body.message,
    'Employee deleted successfully'
  );
});

test('DELETE /api/employees/:id returns 404 for unknown employee', async () => {
  const response = await request(app).delete('/api/employees/99999');

  assert.strictEqual(response.statusCode, 404);
  assert.strictEqual(response.body.message, 'Employee not found');
});
