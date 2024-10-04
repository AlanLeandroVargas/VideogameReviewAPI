import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import MongoDB from './Infrastructure/Persistence/MongoDB';
dotenv.config();
MongoDB();
const app = express();
app.use(morgan('dev'));

export default app;