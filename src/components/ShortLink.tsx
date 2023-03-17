import Link from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import QRCode from 'react-qr-code'

// Hooks
import { domain } from '@/hooks'

// Interfaces
interface props{
  shortURL: string,
  setCopied: Function,
  copied: boolean
}

export default function ShortLink ({ shortURL, setCopied, copied }: props) {
  return (
    <div>
      <p>your new url is: </p>
      <Link href={`/${shortURL}`}>{domain + shortURL}</Link>
      <CopyToClipboard text={domain + shortURL}>
        <button onClick={() => setCopied(true)}>copy</button>
      </CopyToClipboard>
      {copied && <span>text copied!!</span>}
      <QRCode value={domain + shortURL} />
    </div>
  )
}
