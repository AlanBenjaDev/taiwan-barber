export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
}

export const SERVICES: Service[] = [
  { id: '1', name: 'Corte', price: 12000, duration: '45 min' },
  { id: '2', name: 'Corte + Barba', price: 15000, duration: '30 min' },
  { id: '3', name: 'Mechas', price: 50000, duration: '3 hs' }
]

export const AVAILABLE_HOURS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];