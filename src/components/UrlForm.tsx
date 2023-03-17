// Hooks
import { urlValidation } from '@/hooks'

// Interfaces
interface props {
  setShortURL: Function
  setError: Function
  inputRef: any
}

export default function UrlForm ({ setShortURL, setError, inputRef }: props) {
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { success, data }: any = urlValidation(inputRef.current.value)
    if (success) {
      try {
        const { shortUrl } = await getData(data)
        setShortURL(shortUrl)
        setError(null)
      } catch (error) {
        console.log(error)
      }
    } else {
      setError('invalid url')
      setShortURL(null)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button>Shorter</button>
    </form>
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
