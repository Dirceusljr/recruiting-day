import { Badge } from '@/components/Common/Badge'

export default {
  title: 'Common/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    text: 'Badge',
    bg: 'bg-sky-800',
  },
}

export const Large = {
  args: {
    text: 'Badge',
    bg: 'bg-sky-800',
    size: 'lg',
  },
}
