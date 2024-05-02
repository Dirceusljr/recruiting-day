import { PositiveNegativeLabel } from '@/components/Common/PositiveNegativeLabel'

export default {
  title: 'Common/PositiveNegativeLabel',
  component: PositiveNegativeLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    flag: { options: ['true', 'false'] },
  },
}

export const Primary = {
  args: {
    flag: 'true',
  },
}
