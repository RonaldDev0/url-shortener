import { supabase } from '@/lib'
import { redirect } from 'next/navigation'

export default async function Navigate ({ params: { shortUrl } }: {params: { shortUrl: string }}) {
  const { data }: any = await supabase.from('urlShorter').select('*').eq('shortUrl', shortUrl)
  const { url }: any = data[0]
  redirect(`https://${url}`)
}
