export class DatatypeConversorService {

  static toString(value: unknown) {
    return typeof value === 'object' ? JSON.stringify(value) : `${value}`;
  }

  static toObject<T = Record<string | number, unknown>>(value: unknown): T {
    const stringified = DatatypeConversorService.toString(value);
    try {
      return JSON.parse(stringified) ?? {};
    } catch (e) {
      return {} as T;
    }
  }

  static toDateString (date: Date): string {
    return date.toLocaleDateString('pt-BR');
  }

  static toDateTimeString (date: Date): string {
    return `${DatatypeConversorService.toDateString(date)} ${date.toLocaleTimeString('pt-BR')}`
  }
}
