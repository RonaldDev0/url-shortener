'use client'
import { useState, useRef } from 'react'

// Components
import { UrlForm, ShortLink, Error, Header, Modal } from '@/components'

export default function Home () {
  const inputRef = useRef()
  const [shortURL, setShortURL] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  return (
    <>
      <Header />
      <UrlForm setShortURL={setShortURL} setError={setError} inputRef={inputRef} setModal={setModal} />
      {modal &&
        <Modal setModal={setModal}>
          {shortURL && <ShortLink shortURL={shortURL} setCopied={setCopied} copied={copied} />}
          {error && <Error error={error} />}
        </Modal>}
    </>
  )
}
