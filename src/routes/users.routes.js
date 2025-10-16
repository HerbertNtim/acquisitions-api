import { fetchAllUsers } from '#controllers/users.controller.js';
import express from 'express';

const userRouter = express.Router();

userRouter.get('/', fetchAllUsers);
userRouter.get('/users/:id', (req, res) => {
  res.send('GET /users/:id');
});
userRouter.put('/users/:id', (req, res) => {
  res.send('PUT /users/:id');
});
userRouter.delete('/', (req, res) => {
  res.send('DELETE /users/:id');
});

export default userRouter; 
