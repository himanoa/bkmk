import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as Express from 'express';
import { applyRouter } from "./routes";
import * as bodyParser from "body-parser";

const middlewares = [
  bodyParser.json()
]

const app = applyRouter(
  middlewares.reduce(
    (app: Express.Application, middleware) => app.use(middleware),
    Express()
  )
)

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
