const {
    getallpatientsinfo,
    getPatientinfo,
    updateInfoSensor2,
    deleteInfoSensor2,
  } = require("../services/server-service")
  
const getOnePatient = async (req, res) => {
    try {
      const { uid } = req.query;
      const Patient1Info = await getPatientinfo(uid);
      return res.json(Patient1Info);
    } catch (error) {
      console.log(error);
    }
  };
  
const getPatientsValues = async (req, res) => {
    try {
      const allpatients = await getallpatientsinfo();
      return res.json(allpatients);
    } catch (error) {
      console.log(error);
    }
  };
  
  
const updateValueSensor2 = async (req, res) => {
    try {
      const { id } = req.body;
      const { value } = req.body;
      const sensor2Info = await updateInfoSensor2(id, value);
      return res.json(sensor2Info);
    } catch (error) {
      console.log(error);
    }
  };
  
const deleteRecordSensor2 = async (req, res) => {
    try {
      const { _id } = req.body;
      const sensor2Info = await deleteInfoSensor2(_id);
      console.log(req.body);
      return res.json(sensor2Info);
    } catch (error) {
      console.log(error);
    }
  };
  
module.exports = {
    getPatientsValues,
    getOnePatient,
    updateValueSensor2,
    deleteRecordSensor2
  };
    