'use client'
import { useState, useRef, useEffect } from 'react'

// Components
import { UrlForm, ShortLink, Error, Header, Modal, ToggleTheme } from '@/components'

export default function Home () {
  const inputRef = useRef()
  const [shortURL, setShortURL] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <ToggleTheme theme={theme} setTheme={setTheme} />
      <Header />
      <UrlForm setShortURL={setShortURL} setError={setError} inputRef={inputRef} setModal={setModal} />
      {modal &&
        <Modal setModal={setModal} setCopied={setCopied}>
          {shortURL && <ShortLink shortURL={shortURL} setCopied={setCopied} copied={copied} />}
          {error && <Error error={error} />}
        </Modal>}
    </>
  )
}
