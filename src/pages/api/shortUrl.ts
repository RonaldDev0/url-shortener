import { supabase } from '@/lib'

export default async function handler (req: any, res: any) {
  const { url } = req.body

  try {
    const shortUrl = Math.random().toString(36).substring(2, 5)
    const { error } = await supabase.from('urlShorter').insert({ url, shortUrl }).single()
    if (error) { throw new Error(error.message) }

    res.status(200).json({ url, shortUrl })
  } catch (error) {
    const { data }: any = await supabase.from('urlShorter').select('*').eq('url', url)
    const { shortUrl } = data[0]
    res.status(200).json({ shortUrl })
  }
}
