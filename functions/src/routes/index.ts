import * as Express from "express";
import bookmark from "./bookmark"
import getHtml from "./get-html"

const router = Express.Router();

router.get("/health", async (req, res) => {
  console.dir(router)
  res.status(200).json(router);
});

const endPoints = [
  bookmark,
  getHtml,
  { path: "/", router }
];

export function applyRouter(app: Express.Application): Express.Application {
  return endPoints.reduce(
    (app, endPoint) => app.use(endPoint.path, endPoint.router),
    app
  );
}

