import Link from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import QRCode from 'react-qr-code'

// Hooks
import { domain } from '@/hooks'

// Interfaces
interface props{
  shortURL: string
  setCopied: Function
  copied: boolean
}

export default function ShortLink ({ shortURL, setCopied, copied }: props) {
  return (
    <>
      <p className='text-xl font-bold mt-5'>your new url is: </p>
      <div className='flex gap-5 items-center'>
        <Link href={`/${shortURL}`} className='text-s font-bold text-cyan-600'>{domain + shortURL}</Link>
        <CopyToClipboard text={'www.' + domain + shortURL}>
          <button onClick={() => setCopied(true)} className='bg-cyan-500 text-gray-50 px-2 py-1 rounded-lg hover:bg-cyan-600 transition-all text-lg font-bold'>
            {copied ? 'text copied!!' : 'copy'}
          </button>
        </CopyToClipboard>
      </div>
      <div className='bg-white p-5 dark:bg-white'>
        <QRCode value={domain + shortURL} className='dark:text-black' />
      </div>
    </>
  )
}
