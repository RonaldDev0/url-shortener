'use client'

import { useState, useRef } from 'react'

export default function Home () {
  const inputRef = useRef<any>()
  const [shortURL, setShorURL] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const url = inputRef.current.value
    // TODO: Get API
    fetch('/api/shortUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    }).then(res => res.json())
      .then(data => {
        setShorURL(data.shortUrl)
        console.log(shortURL)
      })
  }

  return (
    <div>
      <h1>URL Shortener</h1>
      <p>Shorter your URLs here</p>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={inputRef} />
        <button>Shorter</button>
        <span>{shortURL}</span>
      </form>
    </div>
  )
}
