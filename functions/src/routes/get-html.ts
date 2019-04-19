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
  try {
    const params = await parseInput(req.params)
    const fRes = await fetch(params.url)
    if(!fRes.ok) {
      throw new FetchError(fRes.status, fRes.url)
    }
    const { window: win } = new JSDOM(await fRes.text())
    const title = win.document.querySelector("title")
    res.status(200).json({
      title: title ? title: ""
    })
  } catch(err) {
    if(err instanceof yup.ValidationError) {
      res.status(400).json(err)
    } else {
      res.sendStatus
    }
  }
})

export default {
  path: "/gethtml",
  router
}
