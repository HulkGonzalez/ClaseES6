"use strict";

var _cliente = require("./cliente.js");

var _impuesto = require("./impuesto.js");

var impuesto01 = new _impuesto.Impuesto();
impuesto01.brutoAnual = 10000000;
impuesto01.deducciones = 2500000;
var cliente01 = new _cliente.Cliente("Cliente01", impuesto01);
var totalCliente01 = cliente01.calcularImpuesto();
console.log(totalCliente01);