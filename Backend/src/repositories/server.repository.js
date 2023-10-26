const { db } = require('../config/database/firebase');

const getAllValuesFB = async () => {
  try {
    const snapshot = await db.collection('pacientes').orderBy("cubiculo","asc").get();
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(error);
  }
};

const getValueInfoFB = async (uid) => {
  try {
    // Obtener el id del paciente desde la colección "Usuarios"
    const snapshot1 = await db.collection('usuarios').where("uid" ,"==", uid ).limit(1).get();
    const pacienteId = snapshot1.docs[0].data().paciente;

    // Buscar los datos del paciente en la colección "pacientes" usando el id del paciente
    const snapshot2 = await db.collection('pacientes').doc(pacienteId).get();
    const pacienteData = snapshot2.data();

    return pacienteData;
  } 
  catch (error) {
    console.log(error);
  }
};


const updateValueInfoFB = async (uid, Pcorazon, Prinon, comentarios) => {
  try {
    await db.collection('pacientes').doc(uid).update({ Pcorazon, Ppulmon, Prinon, comentarios });
    return true;
  } catch (error) {
    console.log(error);
  }
};

const deleteValueInfoFB = async (id) => {
  try {
    const item = db.collection('pacientes').doc(_id);
    const user = db.collection('usuarios').where("paciente" ,"==", _id )
    return item.delete(), user.delete();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllValuesFB,
  getValueInfoFB,
  updateValueInfoFB,
  deleteValueInfoFB,
};
