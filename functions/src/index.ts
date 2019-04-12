import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest(async (request, response) => {
  try {
    admin.initializeApp()
    await admin.firestore().collection('test').add({test: 1})
    response.sendStatus(200)
  } catch (err) {
    console.log(err)
    response.sendStatus(400)
  }
});
