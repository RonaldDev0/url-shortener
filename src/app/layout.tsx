import { ReactNode } from 'react'

export const metadata = { title: 'Url shortener' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
