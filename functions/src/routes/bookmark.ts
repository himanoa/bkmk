import * as Express from "express";
import { parseInput } from "../entities/bookmark"
import * as admin from 'firebase-admin';

const router = Express.Router();

router.post("/", async (req, res) => {
  try {
    const bookmark = await parseInput(req.body)
    await admin.firestore().collection('bookmark').add(bookmark)
  } catch(err) {
    console.dir(err)
    res.status(400).json({})
  }
})

router.get('/', async(req, res) => {
  await admin.firestore().collection('bookmark')
})


export default {
  path: "/bookmarks",
  router
};
