const {db} = require('./firebase');

var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", function () {
  client.subscribe("Jhon&Isabel_fb");
});

client.on("message", function (topic, message) {
  const data = JSON.parse(message.toString());
  
  // Guardar en Firebase
  const doc = db.collection('Jhon&Isabel').doc();
  doc.set({
    date: data.Fecha,
    value: data.Valor,
    location: data.Localidad
  });
  console.log(message.toString());
});
