import { AppLink } from '@/components/Common/AppLink'

export default {
  title: 'Common/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    text: 'Google',
    href: 'https://www.google.com',
  },
}
