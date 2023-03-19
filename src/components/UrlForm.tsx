// Hooks
import { urlValidation } from '@/hooks'

// Interfaces
interface props {
  setShortURL: Function
  setError: Function
  inputRef: any,
  setModal: Function
}

export default function UrlForm ({ setShortURL, setError, inputRef, setModal }: props) {
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { success, data }: any = urlValidation(inputRef.current.value)
    if (success) {
      try {
        const { shortUrl } = await getData(data)
        setShortURL(shortUrl)
        setError(null)
        setModal(true)
      } catch (error) {
        console.log(error)
      }
    } else {
      setError('invalid url!!')
      setShortURL(null)
      setModal(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-4 mb-32'>
      <input type='text' ref={inputRef} placeholder='example.com' className='w-44 focus:w-72 border-2 rounded-lg shadow-xl h-10 transition-all outline-none p-4 focus:border-cyan-500' />
      <button className='bg-cyan-500 text-gray-50 p-2 rounded-lg hover:bg-cyan-600 transition-all font-bold'>Shorter</button>
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
