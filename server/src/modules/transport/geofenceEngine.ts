export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export class TransportGeofenceEngine {
  public static calculateDistanceKm(point1: GeoPoint, point2: GeoPoint): number {
    const R = 6371; // Earth radius in KM
    const dLat = (point2.latitude - point1.latitude) * Math.PI / 180;
    const dLon = (point2.longitude - point1.longitude) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(point1.latitude * Math.PI / 180) * Math.cos(point2.latitude * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c * 100) / 100;
  }

  public static isWithinGeofence(busLocation: GeoPoint, stopLocation: GeoPoint, radiusKm = 0.5): boolean {
    return this.calculateDistanceKm(busLocation, stopLocation) <= radiusKm;
  }
}
