// Interfaces
interface props {
  theme: string
  setTheme: Function
}

interface option {
  icon: string
  theme: string
}

export default function ToggleTheme ({ theme, setTheme }: props) {
  const options: option[] = [
    {
      icon: '',
      theme: 'dark'
    },
    {
      icon: '',
      theme: 'light'
    }
  ]

  return (
    <div className='fixed top-5 duration-100 bg-gray-200 dark:bg-slate-700 flex gap-5 rounded-lg p-2 dark:text-gray-200'>
      {options.map(({ icon, theme }) => <button key={theme} onClick={() => setTheme(theme)}>{theme}</button>)}
    </div>
  )
}
