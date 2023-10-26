const {
    getAllValuesFB,
    getValueInfoFB,
    updateValueInfoFB,
    deleteValueInfoFB,
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
  
const updateInfoSensor2 = async (id, value) => {
    try {
      return await updateValueInfoFB(id, value);
    } catch (error) {
      console.log(error);
    }
};
  
const deleteInfoSensor2 = async (_id) => {
    try {
      return await deleteValueInfoFB(_id);
    } catch (error) {
      console.log(error);
    }
};
  
module.exports = {
    getallpatientsinfo,
    getPatientinfo,
    updateInfoSensor2,
    deleteInfoSensor2,
  };