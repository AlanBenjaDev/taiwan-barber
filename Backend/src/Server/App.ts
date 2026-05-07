import express, { Application } from 'express';
import cors from 'cors';
import router from '../Routes/appointment.routes.js';

const app: Application = express();

// Configuración de CORS
app.use(cors({
  origin: 'https://taiwan-barber.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/appointments', router);

export default app;