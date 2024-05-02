import classNames from 'classnames'
import { AiOutlineClose } from 'react-icons/ai'

export const ModalForgotPassword = ({ modalIsOpen, handleModalIsOpen, handleSubmit, handleChange, values = {}, loading }) => {
  return (
    <>
      {modalIsOpen && (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50'>
            <div className='border-0 rounded-md shadow-lg relative flex flex-col  my-6 mx-auto w-[85%] lg:w-[50%] bg-white outline-none focus:outline-none px-3'>
              <div className='flex items-center  justify-between rounded-t pt-4 pb-2 '>
                <h3 className='text-xl lg:text-xl text-colorPrimary font-semibold'>Esqueci minha senha</h3>
                <button className='text-black text-lg lg:text-xl' type='button' onClick={() => handleModalIsOpen()}>
                  <AiOutlineClose />
                </button>
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col w-full mt-2'>
                <label className='lg:text-lg text-slate-600 font-semibold'>Email</label>
                <input
                  className='rounded-md p-3 border border-slate-400'
                  name='email'
                  type='text'
                  placeholder={'Digite seu Email'}
                  value={values.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                <div className='flex items-center justify-between'>
                  <button className='font-bold text-gray-400 bg-transparent' onClick={() => handleModalIsOpen()}>
                    Voltar
                  </button>
                  <button
                    type='submit'
                    className={classNames('rounded-md  text-white my-4 font-bold px-4 py-2', {
                      'bg-slate-300': loading,
                      'bg-primary': !loading,
                    })}
                    disabled={loading}
                  >
                    Redefinir senha
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}
