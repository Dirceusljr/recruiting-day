import { AppLink, Logo } from '@/components/Common'
import { Button, CheckBox, InputText } from '@/components/Form'
import { useState } from 'react'
import { InputPassword } from '@/components/Form/InputPassword'
import { TextField } from '@/components/Form/Fields'

export const DesignPage = () => {
  const [onlyInput, setOnlyInput] = useState('')
  const [onlyInputPassword, setOnlyInputPassword] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <section className='container mx-auto p-[24px] flex flex-col gap-2'>
      <h1 className='text-xl font-extrabold md:text-3xl'>Logo</h1>
      <Logo width={300} />

      <h1 className='text-xl font-extrabold md:text-3xl'>Headings</h1>
      <div className='flex flex-col'>
        <h1 className='text-xl font-extrabold md:text-3xl'>
          Heading Level 1 <small className='text-sm text-gray-400 font-normal'>text-xl font-extrabold md:text-3xl</small>
        </h1>
        <h1 className='text-lg font-bold md:text-xl'>
          Heading Level 2 <small className='text-sm text-gray-400 font-normal'>text-lg font-bold md:text-xl</small>
        </h1>
        <h1 className='font-bold md:text-lg'>
          Heading Level 3 <small className='text-sm text-gray-400 font-normal'>font-bold md:text-lg</small>
        </h1>
        <h1 className='font-normal md:text-lg'>
          Heading Level 4 <small className='text-sm text-gray-400 font-normal'>font-normal md:text-lg</small>
        </h1>
      </div>

      <h1 className='text-xl font-extrabold md:text-3xl'>Colors</h1>
      <div className='flex flex-row gap-2 flex-wrap mb-4'>
        <p className='px-4 py-2 bg-black rounded text-white'>black</p>
        <p className='px-4 py-2 bg-white rounded text-black border border-gray-500'>white</p>
        <p className='px-4 py-2 bg-primary-500 rounded border'>primary</p>
        <p className='px-4 py-2 bg-secundary-500 rounded text-white'>secondary</p>
        <p className='px-4 py-2 bg-tertiary-500 rounded border border-gray-500'>tertiary</p>
        <p className='px-4 py-2 bg-positive rounded'>positive</p>
        <p className='px-4 py-2 bg-negative rounded'>negative</p>
      </div>

      <h1 className='text-xl font-extrabold md:text-3xl'>Colors</h1>
      <div className='flex flex-col gap-2 mb-4'>
        <h2 className='text-lg font-bold md:text-xl'>Body Text</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem dolore doloremque, et, exercitationem facere id
          impedit maxime molestiae molestias non nostrum provident
        </p>

        <h2 className='text-lg font-bold md:text-xl'>Secondary Body Text</h2>
        <p className='text-secundary-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem dolore doloremque, et, exercitationem facere id
          impedit maxime molestiae molestias non nostrum provident
        </p>
      </div>

      <h1 className='text-xl font-extrabold md:text-3xl'>Links</h1>
      <div className='flex flex-col gap-4 mb-4'>
        <AppLink href='https://www.google.com' text='Go to Google!' />
      </div>

      <h1 className='text-xl font-extrabold md:text-3xl'>Form</h1>
      <form noValidate className='flex flex-col gap-4 w-full'>
        <InputText
          name='only-input'
          placeholder='Only text input field'
          onChange={e => setOnlyInput(e.target.value)}
          value={onlyInput}
        />
        <InputPassword
          name='only-password-input'
          placeholder='Only password input field'
          onChange={e => setOnlyInputPassword(e.target.value)}
          value={onlyInputPassword}
        />
        <TextField
          name='name'
          value={name}
          noMargins
          placeholder='Ex.: Maria da Silva'
          onChange={e => setName(e.target.value)}
          label='Nome'
        />
        <TextField
          name='name'
          value={password}
          type='password'
          noMargins
          placeholder='******'
          onChange={e => setPassword(e.target.value)}
          label='Senha'
        />
        <CheckBox label='Li e aceito os termos de uso' name='terms' />
        <Button text='Click here' type='button' />
      </form>
    </section>
  )
}
