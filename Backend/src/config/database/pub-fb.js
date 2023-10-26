var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com");

var MUNICIPIOS = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Soacha", "Ibagué", "Bucaramanga", "Santa Marta", "Villavicencio", "Valledupar", "Pereira", "Montería", "Neiva"];

client.on("connect", function(){
  setInterval(() => {
    var value_mqtt = Math.floor(Math.random() * 100);
    var time = new Date().toLocaleString();
    var lugar= MUNICIPIOS[Math.floor(Math.random() * MUNICIPIOS.length)];

    const message = JSON.stringify({
      Fecha: time,
      Valor: value_mqtt,
      Localidad: lugar
    });

    client.publish("Jhon&Isabel_fb", message)
    console.log("Datos publicados: " + time + "," + value_mqtt.toString() + "," + lugar);
  }, 20000);
})
