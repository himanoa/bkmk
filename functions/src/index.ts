import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as Express from 'express';
import { applyRouter } from "./routes";

const app = applyRouter(Express())
admin.initializeApp()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest(async (request, response) => {
//   try {
//     admin.initializeApp()
//     await admin.firestore().collection('test').add({test: 1})
//     response.sendStatus(200)
//   } catch (err) {
//     console.log(err)
//     response.sendStatus(400)
//   }
// });

export const api = functions.https.onRequest(app)
