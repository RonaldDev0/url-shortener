// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  const { url } = req.body
  const shortUrl = Math.random().toString(36).substring(2, 5)

  res.status(200).json({ url, shortUrl })
}
