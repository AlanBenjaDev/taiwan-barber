import { Request, Response } from "express";
export declare const CreateAppointment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const GetAppointments: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteAppointmentById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
