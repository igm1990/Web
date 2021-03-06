"use strict";

class Tiempo {
    constructor() {
        this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.map = new Map();
        $("#mostrar").prop("disabled", true);
    }

    cargarDatos() {
        this.modificarCiudad($("#ciudad").val());
        $("#mostrar").prop("disabled", false);
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                $("div").empty();
                $("div").prepend("<p>" + JSON.stringify(datos, null, 2) + "</p>");
                $("div").prepend("<h3>JSON recibido</h3>");
                tiempo.map.set("Ciudad", datos.name);
                tiempo.map.set("Pais", datos.sys.country);
                tiempo.map.set("Latitud", datos.coord.lat);
                tiempo.map.set("Temperatura", datos.main.temp + " ºC");
                tiempo.map.set("Temperatura máxima", datos.main.temp_max + " ºC");
                tiempo.map.set("Temperatura mínima", datos.main.temp_min + " ºC");
                tiempo.map.set("Presión", datos.main.pressure + " milibares");
                tiempo.map.set("Humedad", datos.main.humidity + " %");
                tiempo.map.set("Amanece", new Date(datos.sys.sunrise * 1000).toLocaleTimeString());
                tiempo.map.set("Oscurece", new Date(datos.sys.sunset * 1000).toLocaleTimeString());
                tiempo.map.set("Direccion del viento", datos.wind.deg + "º");
                tiempo.map.set("Velocidad del viento", datos.wind.speed + " m/s");
                tiempo.map.set("Hora", new Date(datos.dt * 1000).toLocaleTimeString());
                tiempo.map.set("Fecha", new Date(datos.dt * 1000).toLocaleDateString());
                tiempo.map.set("Descripción", datos.weather[0].description);
                tiempo.map.set("Visibilidad", datos.visibility + " m");
                tiempo.map.set("Nubosidad", datos.clouds.all);
            },
            error: function () {
                alert("¡Tenemos problemas! No puedo obtener JSON de OpenWeatherMap");
            }
        });
    }

    modificarCiudad(ciudad) {
        this.ciudad = ciudad;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais
            + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }

    mostrarDatos() {
        $("section").append("<table>");
        $("table").append("<th scope=\"col\" id=\"parametro\">Parámetro</th>");
        $("table").append("<th scope=\"col\" id=\"valor\">Valor</th>");
        var keys = Array.from(this.map.keys());
        for (var parametro in keys) {
            this.añadirTabla(keys[parametro]);
        }
        $("section").append("</table>");
        $("#mostrar").prop("disabled", true);
    }

    añadirTabla(parametro) {
        $("table").append("<tr>");
        $("table").append("<td headers=\"col\">" + parametro + "</td>");
        $("table").append("<td headers=\"col\">" + this.map.get(parametro) + "</td>");
        $("table").append("</tr>");
    }
}

var tiempo = new Tiempo();