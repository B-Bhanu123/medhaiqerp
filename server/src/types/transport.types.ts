
export interface Vehicle {
  id: string;
  vehicleNumber: string;
  model: string;
  capacity: number;
  driverName: string;
  driverPhone: string;
  insuranceExpiry: Date;
  status: 'ACTIVE' | 'MAINTENANCE' | 'OUT_OF_SERVICE';
}

export interface TransportRoute {
  id: string;
  routeName: string;
  startPoint: string;
  endPoint: string;
  stops: string[];
  vehicleId: string;
  annualFee: number;
}
