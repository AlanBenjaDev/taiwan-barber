"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const db_js_1 = __importDefault(require("../Config/db.js")); // ajustá el path según tu estructura
exports.AppointmentService = {
    async create(data) {
        const { client_name, service_id, date, time } = data;
        const [existing] = await db_js_1.default.execute('SELECT id FROM appointments WHERE appointment_date = ? AND appointment_time = ?', [date, time]);
        if (existing.length > 0) {
            throw new Error('Lo sentimos, este horario ya ha sido reservado.');
        }
        const [result] = await db_js_1.default.execute('INSERT INTO appointments (client_name, service_id, appointment_date, appointment_time) VALUES (?, ?, ?, ?)', [client_name, service_id, date, time]);
        return { id: result.insertId, ...data };
    },
    async getByDate(date) {
        const [rows] = await db_js_1.default.execute(`SELECT a.id, a.appointment_time, s.name as service_name 
       FROM appointments a 
       JOIN services s ON a.service_id = s.id 
       WHERE a.appointment_date = ?`, [date]);
        return rows.map((row) => ({
            id: row.id, // <--- AHORA SÍ PASAMOS EL ID AL FRONTEND
            time: row.appointment_time.substring(0, 5),
            service: row.service_name
        }));
    },
    async deleteById(dataId) {
        const [result] = await db_js_1.default.execute('DELETE FROM appointments WHERE id = ?', [dataId]);
        return result.affectedRows > 0;
    }
};
//# sourceMappingURL=appointment.service.js.map