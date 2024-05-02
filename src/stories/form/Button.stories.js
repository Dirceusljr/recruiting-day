import { Button } from '@/components/Form/Button'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    text: 'Botão',
    type: 'button',
  },
}
export const Disabled = {
  args: {
    text: 'Desativado',
    type: 'button',
    isDisabled: true,
  },
}

export const Loading = {
  args: {
    text: 'Carregando',
    type: 'button',
    isLoading: true,
  },
}
