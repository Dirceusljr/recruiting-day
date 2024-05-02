import { RoundedSpinnerIcon } from '@/components/Common/RoundedSpinnerIcon'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center m-auto gap-1'>
      <RoundedSpinnerIcon stroke='#000' />
      <p>Carregando</p>
    </div>
  )
}
