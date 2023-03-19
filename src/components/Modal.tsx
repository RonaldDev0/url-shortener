export default function Modal ({ children, setModal, setCopied }: any) {
  const handleClick = () => {
    setCopied(false)
    setModal(false)
  }

  return (
    <div className='h-screen fixed flex items-center'>
      <div className='bg-gray-100 shadow-xl w-96 border-2 rounded-lg p-4'>
        <div className='flex justify-end  border-b-2'>
          <button className='mb-2' onClick={handleClick}>❌</button>
        </div>
        <div className='break-words flex flex-col items-center gap-2'>
          {children}
        </div>
      </div>
    </div>
  )
}
