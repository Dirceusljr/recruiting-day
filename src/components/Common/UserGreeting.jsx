import { CustomerStatus } from './CustomerStatus'

const UserGreeting = () => {
  return (
    <div className='flex rounded-md items-center justify-between lg:justify-start gap-8 w-full'>
      <div className='text-sm'>
        Olá, <span className='font-bold'>{'user.username'}</span>
      </div>
      <CustomerStatus isActive={true} />
    </div>
  )
}

export default UserGreeting
