'use client'
import { supabase } from '@/lib'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Navigate ({ params: { shortUrl } }: {params: { shortUrl: string }}) {
  const router = useRouter()

  useEffect(() => {
    async function redirect () {
      router.push(await getUrl(shortUrl))
    }redirect()
  }, [shortUrl, router])
}

async function getUrl (shortUrl: string) {
  const { data }: any = await supabase.from('urlShorter').select('*').eq('shortUrl', shortUrl)
  const { url }: any = data[0]
  const redirect = `https://${url}`

  return redirect
}
