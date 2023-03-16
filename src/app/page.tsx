'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// Compoents
import { domain } from '@/components'

export default function Home () {
  const inputRef = useRef<any>()
  const [shortURL, setShortURL] = useState<string>('')
  const [copied, setCopied] = useState<boolean>(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const { shortUrl } = await getData(inputRef.current.value)
      setShortURL(shortUrl)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>URL Shortener</h1>
      <p>Shorter your URLs here</p>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={inputRef} />
        <button>Shorter</button>
        {shortURL && (
          <>
            <p>your new url is: </p>
            <Link href={`/${shortURL}`}>{domain + shortURL}</Link>
            <CopyToClipboard text={domain + shortURL}>
              <button onClick={() => setCopied(true)}>copy</button>
            </CopyToClipboard>
            {copied && <span>text copied!!</span>}
          </>
        )}
      </form>
    </div>
  )
}

async function getData (url: string) {
  const res = await fetch('/api/shortUrl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  })

  return res.json()
}
