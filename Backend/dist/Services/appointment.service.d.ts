export declare const AppointmentService: {
    create(data: {
        client_name: string;
        service_id: number;
        date: string;
        time: string;
    }): Promise<{
        client_name: string;
        service_id: number;
        date: string;
        time: string;
        id: any;
    }>;
    getByDate(date: string): Promise<any>;
    deleteById(dataId: number): Promise<boolean>;
};
