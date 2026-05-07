import { Request, Response } from "express";
import { AppointmentService } from "../Services/appointment.service.js";


export const CreateAppointment = async (req: Request, res: Response) => {
  try {
    const { client_name, service_id, date, time } = req.body;

    console.log("Datos recibidos:", { client_name, service_id, date, time });

    if (!client_name || !service_id || !date || !time) {
      return res.status(400).json({ error: "Faltan datos obligatorios." });
    }


    console.log("Intentando crear turno con:", { client_name, service_id, date, time });
    const appointment = await AppointmentService.create({ 
      client_name, 
      service_id, 
      date, 
      time 
    });

    return res.status(201).json({
      message: "Turno registrado exitosamente",
      data: appointment
    });
  } catch (error: any) {
    console.log("Error en CreateAppointment:", error);
    return res.status(400).json({ error: error.message });
  }
};


export const GetAppointments = async (req: Request, res: Response) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: "Debe proporcionar una fecha." });
    }

    const occupied = await AppointmentService.getByDate(date as string);
    
    return res.status(200).json(occupied);
  } catch (error: any) {
    console.log("Error en GetAppointments:", error);
    return res.status(500).json({ error: "Error al consultar la agenda." });
  }
};

export const deleteAppointmentById = async (req: Request, res:Response) =>{
  try {
    const dataId = (Number(req.params.id));

    if (!dataId) {
      return res.status(400).json({ error: "Debe proporcionar un ID." });
    }

    const deleted = await AppointmentService.deleteById(dataId);

    if (!deleted) {
      return res.status(404).json({ error: "Turno no encontrado." });
    }

    return res.status(200).json({ message: "Turno eliminado exitosamente." });
  } catch (error) {
    console.log("Error en deleteAppointmentById:", error);
    
    
  }
}