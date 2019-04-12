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

export function parseInput(obj: Object): Promise<InputBookMark> {
  const schema: yup.Schema<InputBookMark> = yup.object().shape({
    url: yup.string().url().required(),
    bodyHtml: yup.string().required(),
    comment: yup.string().nullable().required()
  })
  return schema.validate(obj)
}

export function parse(obj: Object): Promise<Bookmark> {
  const schema: yup.Schema<Bookmark> = yup.object().shape({
    id: yup.string().required(),
    url: yup.string().url().required(),
    bodyHtml: yup.string().required(),
    comment: yup.string().nullable().required()
  })
  return schema.validate(obj)
}
