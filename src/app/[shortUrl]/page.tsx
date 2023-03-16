'use client'
import { supabase } from '@/lib'
import { useState, useEffect } from 'react'

export default function TestPage ({ params: { shortUrl } }: {params: { shortUrl: string }}) {
  const [fullUrl, setFullUrl] = useState<any>([])

  useEffect(() => {
    async function updateData () {
      const { data }: any = await supabase.from('urlShorter').select('*').eq('shortUrl', shortUrl)
      const { url }: any = data[0]
      setFullUrl(url)
    } updateData()
  }, [shortUrl])

  return (
    <div>
      <h1>welcome to page: {shortUrl}</h1>
      <h1>this is te original site: {fullUrl}</h1>
    </div>
  )
}
