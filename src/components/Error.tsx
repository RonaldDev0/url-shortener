// Interfaces
interface props {
  error: string
}

export default function Error ({ error }: props) {
  return (
    <h1 className='my-10'>
      {error}
    </h1>
  )
}
