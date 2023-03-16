export async function POST (req: any) {
  const { url } = req.body
  const shortUrl = Math.random().toString(36).substring(2, 5)

  return Response.json({ url, shortUrl })
}
