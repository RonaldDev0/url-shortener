export default function UrlValidation (url : string) {
  const URL: string = url.trim()
  const validate: boolean = (!URL.includes(' ') && URL.includes('.'))

  if (validate) {
    return { success: true, data: URL }
  } else return { success: false }
}
