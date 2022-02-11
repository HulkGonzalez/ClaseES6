import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

const impuesto01 = new Impuesto();
impuesto01.brutoAnual = 10000000;
impuesto01.deducciones = 2500000;

const cliente01 = new Cliente("Cliente01", impuesto01);
const totalCliente01 = cliente01.calcularImpuesto();
console.log(totalCliente01);