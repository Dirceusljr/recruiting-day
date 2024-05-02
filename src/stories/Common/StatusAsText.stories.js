import { StatusAsText } from '@/components/Common/StatusAsText'

export default {
  title: 'Common/StatusAsText',
  component: StatusAsText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['PENDING', 'APPROVED', 'REFUSED', 'AWAITING_PAYMENT', 'UNDER_ANALYSIS', 'ACTIVE', 'ACTIVE_VOUCHER'],
    },
  },
}

export const Primary = {
  args: {
    status: 'PENDING',
  },
}
