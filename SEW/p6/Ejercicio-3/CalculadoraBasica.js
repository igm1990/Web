"use strict";

class Calculadora {
    constructor() {
        this.pantalla = "0";
        this.memoria = "";
        this.memoriaActual = "";
        this.esResultado = false;
    }

    actualizarPantalla() {
        let p = document.getElementById("pantalla");
        p.value = this.pantalla;
    }

    agregarDisplay(digito) {
        if (this.esResultado) {
            this.limpiarResultado();
            this.pantalla = digito;
        }
        else if (this.pantalla === "0") {
            this.pantalla = digito;
        }
        else {
            this.pantalla += digito;
        }
        this.esResultado = false;
        this.actualizarPantalla();
    }

    agregarPunto() {
        if (!this.pantalla.includes(".")) {
            this.pantalla += ".";
        }
        this.actualizarPantalla();
    }

    limpiarDisplay() {
        this.pantalla = "0";
        this.actualizarPantalla();
    }

    limpiarResultado() {
        this.limpiarDisplay();
        this.memoriaActual = "";
    }

    limpiarTodo() {
        this.limpiarResultado();
        this.memoria = "";
    }

    operacion(operador) {
        this.memoriaActual += this.pantalla + " " + operador;
        this.limpiarDisplay();
    }

    mostrarResultado() {
        this.memoriaActual += this.pantalla;
        this.pantalla = eval(this.memoriaActual);
        this.actualizarPantalla();
        this.esResultado = true;
        this.memoriaActual = 0;
    }

    memoriaMas() {
        this.memoria += "+" + this.pantalla;
        this.memoria = eval(this.memoria);
        this.limpiarDisplay();
    }

    memoriaMenos() {
        this.memoria += "-" + this.pantalla;
        this.memoria = eval(this.memoria);
        this.limpiarDisplay();
    }

    memoriaMostrar() {
        this.pantalla = this.memoria;
        this.memoriaActual = "";
        this.actualizarPantalla();
    }
}

let calculadora = new Calculadora();