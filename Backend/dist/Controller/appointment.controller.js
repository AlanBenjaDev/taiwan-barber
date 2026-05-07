"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointmentById = exports.GetAppointments = exports.CreateAppointment = void 0;
const appointment_service_js_1 = require("../Services/appointment.service.js");
const CreateAppointment = async (req, res) => {
    try {
        const { client_name, service_id, date, time } = req.body;
        console.log("Datos recibidos:", { client_name, service_id, date, time });
        if (!client_name || !service_id || !date || !time) {
            return res.status(400).json({ error: "Faltan datos obligatorios." });
        }
        console.log("Intentando crear turno con:", { client_name, service_id, date, time });
        const appointment = await appointment_service_js_1.AppointmentService.create({
            client_name,
            service_id,
            date,
            time
        });
        return res.status(201).json({
            message: "Turno registrado exitosamente",
            data: appointment
        });
    }
    catch (error) {
        console.log("Error en CreateAppointment:", error);
        return res.status(400).json({ error: error.message });
    }
};
exports.CreateAppointment = CreateAppointment;
const GetAppointments = async (req, res) => {
    try {
        const { date } = req.query;
        if (!date) {
            return res.status(400).json({ error: "Debe proporcionar una fecha." });
        }
        const occupied = await appointment_service_js_1.AppointmentService.getByDate(date);
        return res.status(200).json(occupied);
    }
    catch (error) {
        console.log("Error en GetAppointments:", error);
        return res.status(500).json({ error: "Error al consultar la agenda." });
    }
};
exports.GetAppointments = GetAppointments;
const deleteAppointmentById = async (req, res) => {
    try {
        const dataId = (Number(req.params.id));
        if (!dataId) {
            return res.status(400).json({ error: "Debe proporcionar un ID." });
        }
        const deleted = await appointment_service_js_1.AppointmentService.deleteById(dataId);
        if (!deleted) {
            return res.status(404).json({ error: "Turno no encontrado." });
        }
        return res.status(200).json({ message: "Turno eliminado exitosamente." });
    }
    catch (error) {
        console.log("Error en deleteAppointmentById:", error);
    }
};
exports.deleteAppointmentById = deleteAppointmentById;
