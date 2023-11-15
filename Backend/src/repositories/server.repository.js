const { db } = require('../config/database/firebase');

const getAllValuesFB = async () => {
  try {
    const snapshot = await db.collection('pacientes').orderBy("cubiculo","asc").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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

const getValueInfoId = async (uid) => {
  try {
    // Buscar los datos del paciente en la colección "pacientes" usando el id del paciente
    const snapshot2 = await db.collection('pacientes').doc(uid).get();
    const pacienteData = snapshot2.data();

    return pacienteData;
  } 
  catch (error) {
    console.log(error);
  }
};

const getUIDInfo = async (idnumber) => {
  try {
    // Buscar los datos del paciente en la colección "pacientes" usando el id del paciente
    const snapshot2 = await db.collection('pacientes').where("idnumber" ,"==", idnumber ).limit(1).get();
    const pacienteDoc = snapshot2.docs[0];
    const docpaciente = pacienteDoc.id;


    const snapshot1 = await db.collection('usuarios').where("paciente" ,"==", docpaciente ).limit(1).get();
    const uid = snapshot1.docs[0].data().uid;

    return uid ;
  } 
  catch (error) {
    console.log(error);
  }
};


const updateValueInfoFB = async (uid, Pcorazon, Prinon, Ppulmon, comentarios) => {
  try {
    await db.collection('pacientes').doc(uid).update({ Pcorazon, Ppulmon, Prinon, Ppulmon, comentarios });
    return true;
  } catch (error) {
    console.log(error);
  }
};

const deleteValueInfoFB = async (_id) => {
  try {
    const item = db.collection('pacientes').doc(_id);
    await item.delete();
        
    const querySnapshot = await db.collection('usuarios').where("paciente", "==", _id).get();
    querySnapshot.forEach(async (doc) => {
      await doc.ref.delete();
    });
    
    return true;
  } catch (error) {
    console.log(error);
  }
};

const createNewPatient = async (Pcorazon, Prinon, Ppulmon, comentarios, cubiculo, date, nombre, 
  apellido, diagnostico, idtype, idnumber, edad, sexo) => {
  try {
    const newPatientRef = db.collection('pacientes').doc();
    await newPatientRef.set({ Pcorazon, Prinon, Ppulmon, comentarios, cubiculo, date, nombre, 
      apellido, diagnostico, idtype, idnumber, edad, sexo });
    return true;
  } catch (error) {
    console.log(error);
  }
};

const getDocumentId = async (idnumber) => {
  try {
    const querySnapshot = await db.collection('pacientes').where("idnumber", "==", idnumber).limit(1).get();
    let docId;
    querySnapshot.forEach((doc) => {
      docId = doc.id;
    });
    return docId;
  } 
  catch (error) {
    console.log(error);
  }
};

const createNewUser = async (uid, paciente) => {
  try {
    const newPatientRef = db.collection('usuarios').doc();
    await newPatientRef.set({ uid, paciente});
    return true;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  getAllValuesFB,
  getValueInfoFB,
  updateValueInfoFB,
  deleteValueInfoFB,
  getUIDInfo,
  getValueInfoId,
  createNewPatient,
  getDocumentId,
  createNewUser
};
