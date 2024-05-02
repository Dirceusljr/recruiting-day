import { CustomerStatus } from '@/components/Common/CustomerStatus'

export default {
  title: 'Common/CustomerStatus',
  component: CustomerStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Active = {
  args: { isActive: true },
}
export const Inative = {
  args: {},
}
