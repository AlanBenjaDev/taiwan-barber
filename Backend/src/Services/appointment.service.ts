import pool from '../Config/db.js'; // ajustá el path según tu estructura

export const AppointmentService = {
  async create(data: { client_name: string; service_id: number; date: string; time: string }) {
    const { client_name, service_id, date, time } = data;

    const [existing]: any = await pool.execute(
      'SELECT id FROM appointments WHERE appointment_date = ? AND appointment_time = ?',
      [date, time]
    );

    if (existing.length > 0) {
      throw new Error('Lo sentimos, este horario ya ha sido reservado.');
    }

    const [result]: any = await pool.execute(
      'INSERT INTO appointments (client_name, service_id, appointment_date, appointment_time) VALUES (?, ?, ?, ?)',
      [client_name, service_id, date, time]
    );

    return { id: result.insertId, ...data };
  },

 async getByDate(date: string) {
    const [rows]: any = await pool.execute(
      `SELECT a.id, a.appointment_time, s.name as service_name 
       FROM appointments a 
       JOIN services s ON a.service_id = s.id 
       WHERE a.appointment_date = ?`,
      [date]
    );

    return rows.map((row: any) => ({
      id: row.id, // <--- AHORA SÍ PASAMOS EL ID AL FRONTEND
      time: row.appointment_time.substring(0, 5),
      service: row.service_name
    }));
  },
  async deleteById(dataId: number) {
    const [result]: any = await pool.execute(
      'DELETE FROM appointments WHERE id = ?',
      [dataId]
    );

    return result.affectedRows > 0;
  }
};


