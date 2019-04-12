import * as yup from "yup"

interface Bookmark {
  id: string;
  url: string;
  bodyHtml: string;
  comment: string | null;
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
