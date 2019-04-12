import * as yup from "yup"

export interface Bookmark {
  id: string;
  url: string;
  bodyHtml: string;
  comment: string | null;
}

export interface InputBookMark {
  url: string;
  bodyHtml: string;
  comment: string | null
}

export function parseInput(obj: Object): InputBookMark {
  const schema: yup.Schema<InputBookMark> = yup.object().shape({
    url: yup.string().url(),
    bodyHtml: yup.string(),
    comment: yup.string().nullable()
  })
  return schema.validateSync(obj)
}

export function parse(obj: Object): Bookmark {
  const schema: yup.Schema<Bookmark> = yup.object().shape({
    id: yup.string().required(),
    url: yup.string().url(),
    bodyHtml: yup.string(),
    comment: yup.string().nullable()
  })
  return schema.validateSync(obj)
}
