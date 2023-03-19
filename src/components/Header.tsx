export default function Header () {
  return (
    <div className='border-2 rounded-lg p-10 shadow-xl hover:border-cyan-300 transition-all flex flex-col gap-3 dark:text-gray-200 '>
      <h1 className='text-xl font-bold'>URL Shortener</h1>
      <p>Shorter your URLs here</p>
    </div>
  )
}
