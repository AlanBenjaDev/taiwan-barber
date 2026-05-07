import express, { Application, Request, Response } from 'express';
import cors from 'cors'
const app : Application = express()
import router from '../Routes/appointment.routes.js';

app.use(cors())
app.use(express.json())
app.use('/api/appointments', router)
export default app