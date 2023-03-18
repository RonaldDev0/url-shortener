export default function urlValidation (url : string) {
  const URL: string = url.trim()
  const validate: boolean = (!URL.includes(' ') && URL.includes('.') && !URL.endsWith('.'))

  if (validate) {
    return { success: true, data: URL }
  } else return { success: false }
}
