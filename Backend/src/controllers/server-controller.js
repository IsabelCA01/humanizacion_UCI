const {
    getallpatientsinfo,
    getPatientinfo,
    updateInfoPatient,
    deleteInfoPatient,
    getUid,
    getPatientinfoid,
    createInfoPatient,
    getIdDocument,
    createInfoUser,
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

  const getOnePatientId = async (req, res) => {
    try {
      const { uid } = req.query;
      const Patient1Info = await getPatientinfoid(uid);
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

  const getUidPatient = async (req, res) => {
    try {
      const { idnumber } = req.query;
      const Patientuid = await getUid(idnumber);
      return res.json(Patientuid);
    } catch (error) {
      console.log(error);
    }
  };
  
  
const updateValuePatient = async (req, res) => {
    try {
      const { uid } = req.query;
      const { Pcorazon } = req.query;
      const { Prinon } = req.query;
      const {Ppulmon} = req.query;
      const { comentarios } = req.query;
      const PatientInfo = await updateInfoPatient(uid, Pcorazon, Prinon, Ppulmon, comentarios);
      return res.json(PatientInfo);
    } catch (error) {
      console.log(error);
    }
  };
  
const deleteRecordPatient = async (req, res) => {
    try {
      const { _id } = req.query;
      const PatientInfo = await deleteInfoPatient(_id);
      console.log(req.body);
      return res.json(PatientInfo);
    } catch (error) {
      console.log(error);
    }
};

const CreateValuePatient = async (req, res) => {
  try {
    const {
      Pcorazon,
      Prinon,
      Ppulmon,
      comentarios,
      cubiculo,
      date,
      nombre,
      apellido,
      diagnostico,
      idtype,
      idnumber,
      edad,
      sexo
    } = req.body;
    const dateArr = date.split("-");
    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]) - 1; // Los meses en JavaScript van de 0 a 11
    const day = parseInt(dateArr[2]);
    const dateObj = new Date(year, month, day)
    const PatientInfo = await createInfoPatient(
      Pcorazon,
      Prinon,
      Ppulmon,
      comentarios,
      cubiculo,
      dateObj,
      nombre,
      apellido,
      diagnostico,
      idtype,
      idnumber,
      edad,
      sexo
    );

    return res.json(PatientInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getIdPatientDoc = async (req, res) => {
  try {
    const { idnumber } = req.query;
    const docId = await getIdDocument(idnumber);
    return res.json(docId);
  } catch (error) {
    console.log(error);
  }
};

const CreateValueUser = async (req, res) => {
  try {
    const {
      uid,
      paciente
    } = req.body;

    const PatientInfo = await createInfoUser(
      uid,
      paciente
    );
    return res.json(PatientInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
  
module.exports = {
    getPatientsValues,
    getOnePatient,
    updateValuePatient,
    deleteRecordPatient,
    getUidPatient,
    getOnePatientId,
    CreateValuePatient,
    getIdPatientDoc,
    CreateValueUser,
  };
    