import * as yup from "yup"
import * as Express from "express"
import fetch from "node-fetch"
import { Response } from "node-fetch"
import { JSDOM } from "jsdom";

export interface InputHtml {
  url: string;
}

export function parseInput(obj: Object): Promise<InputHtml> {
  const schema: yup.Schema<InputHtml> = yup.object().shape({
    url: yup.string().url().required()
  })
  return schema.validate(obj)
}


const router = Express.Router()
class FetchError {
  constructor(public statusCode: number, public url: string) {
  }
}
const fetchErrorHandler = (response: Response) => {
  const code = response.status
  throw new FetchError(code, response.url)
}

router.get("/", async (req, res) => {
  parseInput(req.params)
    .then(ih => fetch(ih.url))
    .then(fRes => {
      if(!fRes.ok) {
        fetchErrorHandler(fRes)
      }
      return fRes.text()
    })
    .then(body => {
      const { window: win } = new JSDOM(body)
      const title = win.document.querySelector("title")
      if(title) {
        res.status(200).json({title: title.text})
      }
    })
    .catch(err => {
      if(err instanceof yup.ValidationError) {
        res.status(400).json(err)
      } else {
        res.sendStatus
      }
    })
})

export default {
  path: "/getUrl",
  router
}
