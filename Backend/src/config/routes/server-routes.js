const { Router } = require('express');

const router = Router();

const {
    getOnePatient,
    updateValuePatient,
    deleteRecordPatient,
    getPatientsValues,
    getUidPatient,
    getOnePatientId,
    CreateValuePatient,
    getIdPatientDoc,
    CreateValueUser,
} = require("../../controllers/server-controller");

router.get('/patient', getOnePatient);
router.get('/patient/all', getPatientsValues);
router.put("/patient", updateValuePatient);
router.delete('/patient', deleteRecordPatient);
router.get('/patient/getuid', getUidPatient);
router.get('/patientid', getOnePatientId);
router.post('/patient', CreateValuePatient);
router.get('/patient/getid', getIdPatientDoc);
router.post('/user', CreateValueUser);


module.exports = router;
