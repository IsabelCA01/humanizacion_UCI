const { getFirestore } = require('firebase-admin/firestore');

const admin = require('firebase-admin');

const serviceAccount = require('../../../firebase1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

module.exports = { db };