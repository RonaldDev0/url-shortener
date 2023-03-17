'use client'
import { useState, useRef } from 'react'

// Components
import { UrlForm, ShortLink, Error } from '@/components'

export default function Home () {
  const inputRef = useRef()
  const [shortURL, setShortURL] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  return (
    <div>
      <h1>URL Shortener</h1>
      <p>Shorter your URLs here</p>
      <UrlForm setShortURL={setShortURL} setError={setError} inputRef={inputRef} />
      {shortURL && <ShortLink shortURL={shortURL} setCopied={setCopied} copied={copied} />}
      {error && <Error error={error} />}
    </div>
  )
}
