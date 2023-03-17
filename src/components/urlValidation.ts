import { z } from 'zod'

export default function UrlValidation (url : string) {
  const urlSchema = z
    .string({
      required_error: 'The url is required',
      invalid_type_error: 'This is not url'
    })
    .url({ message: 'invalid url' })

  const newUrl = `https://${url}`
  const validation = urlSchema.safeParse(newUrl)

  return validation
}
