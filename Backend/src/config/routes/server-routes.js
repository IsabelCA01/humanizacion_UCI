const { Router } = require('express');

const router = Router();

const {
    getOnePatient,
    updateValueSensor2,
    deleteRecordSensor2,
    getPatientsValues,
} = require("../../controllers/server-controller");

router.get('/patient', getOnePatient);
router.get('/patient/all', getPatientsValues);
router.put("/patient", updateValueSensor2);
router.delete('/patient', deleteRecordSensor2);

module.exports = router;
