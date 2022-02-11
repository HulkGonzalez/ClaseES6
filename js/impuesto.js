export class Impuesto {
    constructor(brutoAnual, deducciones) {
      this._brutoAnual = brutoAnual;
      this._deducciones = deducciones;
    }
    get brutoAnual() {
      return this._brutoAnual;
    }
    get deducciones() {
      return this._deducciones;
    }
    set brutoAnual(value) {
      this._brutoAnual = value;
    }
    set deducciones(value) {
      this._deducciones = value;
    }
  }