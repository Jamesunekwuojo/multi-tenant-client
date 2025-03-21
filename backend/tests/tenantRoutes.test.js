// const request = require('supertest');
// const app = require('../app');

import request from 'supertest';
import app from '../app';

describe('GET /api/tenants', () => {
    it('This should return a list of tenants', async () => {
        const res = await request(app).get('/api/tenants');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});