"use client"

import { ArrowBigRight, MapPin, Calendar, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';

const Home = () => {
  const [isInputGuess, setInputGuess] = useState(false);
  const [isModalGuess, setModalGuess] = useState(false);
  const [isEmailGuess, setEmailGuess] = useState([
    'pedrolopes@gmail.com',
    'mery123@gmail.com'
  ])

  const openGuessInput = () => {
    setInputGuess(true)
  }

  const closeGuessInput = () => {
    setInputGuess(false)
  }

  const openGuessModal = () => {
    setModalGuess(true)
  }

  const closeGuessModal = () => {
    setModalGuess(false)
  }

  const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (isEmailGuess.includes(email)) {
      return
    }

    setEmailGuess([
      ...isEmailGuess, email
    ])

    event.currentTarget.reset()
  }

  const removeEmailFromInvites = (emailToRemove: string) => {
    const newEmailList = isEmailGuess.filter(email => email !== emailToRemove )

    setEmailGuess(newEmailList)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <h1 className='font-semibold text-xl'>Voyage with Pedro</h1>
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className='space-y-2'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isInputGuess}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isInputGuess}
                type="text"
                placeholder="Quando você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>

            {isInputGuess ? (
              <button onClick={closeGuessInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                Alterar local/data
                <Settings2 />
              </button>
            ) : (
              <button
                onClick={openGuessInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Continuar
                <ArrowBigRight className="size-5" />
              </button>
            )}
          </div>

          {isInputGuess && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
              <button onClick={openGuessModal} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                >Quem estará na viagem?</span>
              </button>
              <button
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowBigRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pelo Voyage with Pedro você automaticamente concorda
          <br /> com os nossos{' '}
          <a className="text-zinc-300 underline">termos de uso</a> e{' '}
          <a className="text-zinc-300 underline">políticas de privacidade</a>
        </p>
      </div>

      {isModalGuess && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold'>Selecionar Convidados</h2>
              <button type='button' onClick={closeGuessModal}>
                <X className='size-5 text-zinc-400' />
              </button>
            </div>
            <p className='text-sm text-zinc-400'>
              Os convidados irão receber e-mails para confirmar a participação na viagem
            </p>

            <div className='flex flex-wrap gap-2 mt-4'>
              {isEmailGuess.map(email => {
                return (
                  <div key={email} className='bg-zinc-800 p-1 rounded-md flex items-center justify-center gap-1'>
                    <span className='text-zinc-400'>{email}</span>
                    <button onClick={() => removeEmailFromInvites(email)} type='button'>
                      <X className='size-4 text-zinc-400' />
                    </button>
                  </div>
                )
              })}
            </div>

            <div className='w-full h-px bg-zinc-800 mt-4' />

            <form onSubmit={addNewEmailToInvite} className='mt-4 rounded-md bg-zinc-950 border border-zinc-800 flex justify-between'>
              <div className='flex gap-2 items-center justify-center p-2'>
                <AtSign className='text-zinc-400 size-5' />
                <input
                  type='email'
                  name='email'
                  placeholder='Digite o e-mail do convidado' className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
              </div>
              <button
                type='submit'
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Convidar
                <Plus className='size-5' />
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
