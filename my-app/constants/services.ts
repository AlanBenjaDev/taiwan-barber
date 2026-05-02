export interface Service {
  id: string;
  name: string;
  price: number;
}

export const SERVICES: Service[] = [
  { id: '1', name: 'Corte de pelo', price: 12000 },
  { id: '2', name: 'Corte VIP', price: 17000 },
  { id: '3', name: 'Mechas', price: 40000 },
  { id: '4', name: 'Mechas VIP', price: 50000 }
];

export const AVAILABLE_HOURS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];