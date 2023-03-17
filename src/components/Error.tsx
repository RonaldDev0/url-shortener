// Interfaces
interface props {
  error: string
}

export default function Error ({ error }: props) {
  return (
    <div>
      <h1>{error}</h1>
    </div>
  )
}
