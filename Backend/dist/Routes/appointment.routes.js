"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointment_controller_1 = require("../Controller/appointment.controller");
const appointment_controller_2 = require("../Controller/appointment.controller");
const router = (0, express_1.Router)();
router.post('/crear/turno', appointment_controller_1.CreateAppointment);
router.get('/ver/turnos', appointment_controller_1.GetAppointments);
router.delete('/eliminar/turno/:id', appointment_controller_2.deleteAppointmentById);
exports.default = router;
// /api/appointments/crear/turno
// /api/appointments/ver/turnos
//http://localhost:4000/api/appointments/ver/turnos
//# sourceMappingURL=appointment.routes.js.map