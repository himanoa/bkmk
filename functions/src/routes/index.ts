import * as Express from "express";
import bookmark from "./bookmark"

const router = Express.Router();

router.get("/health", async (req, res) => {
  res.send("live!");
});

const endPoints = [
  bookmark,
  { path: "/", router }
];

export function applyRouter(app: Express.Application): Express.Application {
  return endPoints.reduce(
    (app, endPoint) => app.use(endPoint.path, endPoint.router),
    app
  );
}

