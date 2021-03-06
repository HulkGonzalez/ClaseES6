"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuesto = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(brutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);

    this._brutoAnual = brutoAnual;
    this._deducciones = deducciones;
  }

  _createClass(Impuesto, [{
    key: "brutoAnual",
    get: function get() {
      return this._brutoAnual;
    },
    set: function set(value) {
      this._brutoAnual = value;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(value) {
      this._deducciones = value;
    }
  }]);

  return Impuesto;
}();

exports.Impuesto = Impuesto;