export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
}

export const SERVICES: Service[] = [
  { id: '1', name: 'Corte Tradicional', price: 20, duration: '45 min' },
  { id: '2', name: 'Barba Imperial', price: 15, duration: '30 min' },
  { id: '3', name: 'Mechas', price: 50, duration: '3 hs' }, // El trigger de lógica
  { id: '4', name: 'Ritual Completo', price: 60, duration: '1.5 hs' },
];

export const AVAILABLE_HOURS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];