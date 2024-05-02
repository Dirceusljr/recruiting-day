import { VscCopy } from 'react-icons/vsc'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

const ReferenceLink = () => {
  const indicationUrl = `${import.meta.env.VITE_BASE_URL}/afiliados/${'user.indicationCode'}`

  return (
    <>
      <CopyToClipboard
        text={indicationUrl}
        onCopy={() =>
          toast.success('Copiado com sucesso!', {
            position: 'top-center',
            autoClose: 2000,
          })
        }
      >
        <div className='flex p-4 rounded gap-2 items-center justify-center bg-gray-200 w-full text-center'>
          <div className=' text-lg'>
            <VscCopy />
          </div>
          <div className='text-sm truncate'>{indicationUrl}</div>
        </div>
      </CopyToClipboard>
    </>
  )
}

export default ReferenceLink
