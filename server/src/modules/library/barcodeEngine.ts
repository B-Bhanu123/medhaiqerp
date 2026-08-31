export class LibraryBarcodeEngine {
  public static generateBarcode(isbn: string, copyIndex: number): string {
    const cleanIsbn = isbn.replace(/-/g, '');
    const paddedIndex = copyIndex.toString().padStart(3, '0');
    return `LIB-${cleanIsbn}-${paddedIndex}`;
  }

  public static parseBarcode(barcode: string): { isbn: string; copyIndex: number } | null {
    const parts = barcode.split('-');
    if (parts.length !== 3 || parts[0] !== 'LIB') return null;
    return {
      isbn: parts[1],
      copyIndex: parseInt(parts[2], 10)
    };
  }
}
