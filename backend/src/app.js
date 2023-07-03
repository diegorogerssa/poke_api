import express from 'express';
import route from './routes/index.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();

app.use(cors());

app.use(bodyParser.json())

app.use(express.json());

app.use(route)

app.use(errorMiddleware)

export default app;
