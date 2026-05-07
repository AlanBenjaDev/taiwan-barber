import { Router } from 'express';
import { GetAppointments,CreateAppointment } from '../Controller/appointment.controller';
import { deleteAppointmentById } from '../Controller/appointment.controller';
const router = Router();

router.post('/crear/turno', CreateAppointment);
router.get('/ver/turnos', GetAppointments);
router.delete('/eliminar/turno/:id', deleteAppointmentById);
export default router;


