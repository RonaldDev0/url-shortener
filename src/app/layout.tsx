import { ReactNode } from 'react'

// Tailwind
import 'tailwindcss/tailwind.css'

// Metadata
export const metadata = { title: 'URL shortener' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col items-center justify-center text-center gap-20 bg-gray-100 dark:bg-slate-900  text-black'>
        {children}
      </body>
    </html>
  )
}
