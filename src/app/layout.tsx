import { ReactNode } from 'react'

export const metadata = { title: 'URL shortener' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
