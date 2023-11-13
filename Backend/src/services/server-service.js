const {
    getAllValuesFB,
    getValueInfoFB,
    updateValueInfoFB,
    deleteValueInfoFB,
    getUIDInfo,
    getValueInfoId,
    createNewPatient,
} = require('../repositories/server.repository');
  
const getallpatientsinfo = async () => {
    try {
      return await getAllValuesFB();
    } catch (error) {
      console.log(error);
    }
};
  
const getPatientinfo = async (uid) => {
    try {
      return await getValueInfoFB(uid);
    } catch (error) {
      console.log(error);
    }
};

const getPatientinfoid = async (uid) => {
  try {
    return await getValueInfoId(uid);
  } catch (error) {
    console.log(error);
  }
};

const getUid = async (idnumber) => {
  try {
    return await getUIDInfo(idnumber);
  } catch (error) {
    console.log(error);
  }
};
  
const updateInfoPatient = async (uid, Pcorazon, Prinon, Ppulmon, comentarios) => {
    try {
      return await updateValueInfoFB(uid, Pcorazon, Prinon, Ppulmon, comentarios);
    } catch (error) {
      console.log(error);
    }
};
  
const deleteInfoPatient = async (_id) => {
    try {
      return await deleteValueInfoFB(_id);
    } catch (error) {
      console.log(error);
    }
};

const createInfoPatient = async (Pcorazon, Prinon, Ppulmon, comentarios, cubiculo, date, nombre, 
  apellido, diagnostico, idtype, idnumber, edad, sexo) => {
  try {
    return await createNewPatient(Pcorazon, Prinon, Ppulmon, comentarios, cubiculo, date, nombre, 
      apellido, diagnostico, idtype, idnumber, edad, sexo);
  } catch (error) {
    console.log(error);
  }
};
  
module.exports = {
    getallpatientsinfo,
    getPatientinfo,
    updateInfoPatient,
    deleteInfoPatient,
    getUid,
    getPatientinfoid,
    createInfoPatient,
  };