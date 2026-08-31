export class BarcodeScannerEngine {
  public static parse(code: string): boolean { return code.startsWith("LIB"); }
}
