import express from 'express';
import { findById } from '../models/index.js';
import jwt from 'jsonwebtoken';

const routesUser = express.Router();

routesUser.get('/:id', checkToken, async  (req, res) => {
  const id = req.params.id

  const user = await findById(id)

  if (!user[0] > 0) {
    return res.status(404).json({ message: 'user not found'});
  }
  res.send(user);
})

function checkToken(req, res, next) {

  const autHeader = req.headers['authorization']
  const token = autHeader && autHeader.split(' ')[1]

  if(!token) {
    return res.status(401).json({ message: 'Access denied'});
  }
    try {
      const secret = process.env.SECRET;
      jwt.verify(token, secret);

      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token'});
  }
}
export default routesUser;