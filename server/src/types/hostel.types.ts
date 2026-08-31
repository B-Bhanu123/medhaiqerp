
export interface HostelBuilding {
  id: string;
  name: string;
  type: 'BOYS' | 'GIRLS' | 'CO_ED';
  wardenName: string;
  wardenPhone: string;
  totalFloors: number;
  totalRooms: number;
}

export interface Room {
  id: string;
  buildingId: string;
  roomNumber: string;
  floor: number;
  capacity: number;
  occupied: number;
  roomType: 'SINGLE' | 'DOUBLE' | 'TRIPLE' | 'SUITE';
  monthlyFee: number;
  isAvailable: boolean;
}

export interface RoomAllocation {
  id: string;
  roomId: string;
  studentId: string;
  allocatedDate: Date;
  vacatedDate?: Date;
  status: 'ACTIVE' | 'VACATED';
}
