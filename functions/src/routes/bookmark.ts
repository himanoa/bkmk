import * as Express from "express";
import { parseInput } from "../entities/bookmark"
import * as admin from 'firebase-admin';

const router = Express.Router();

router.post("/", async (req, res) => {
  const bookmark = parseInput(req.body)
  console.dir(await admin.firestore().collection('bookmark').add(bookmark))
})


export default {
  path: "/bookmarks",
  router
};
