import { MailOpen, Plus, UserRoundPlus, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
    closeConfirmModal: () => void
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
    handleSubmitConfirmTrip: () => void
}

const ConfirmTripModal = ({addNewEmailToInvite, closeConfirmModal, handleSubmitConfirmTrip}: ConfirmTripModalProps) => {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-4'>
            <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                    <button type='button' onClick={closeConfirmModal}>
                        <X className='size-5 text-zinc-400' />
                    </button>
                </div>
                <p className='text-sm text-zinc-400'>
                    Para concluir a criação da viagem <span className='font-semibold text-zinc-300'>Cabrobó, Brasil</span> nas datas de <span className='font-semibold text-zinc-300'>16 a 27 de agosto de 2024</span> preencha seus dados abaixo
                </p>

                <form onSubmit={addNewEmailToInvite} className='mt-4 '>
                    <div className='flex justify-between items-center bg-zinc-950 rounded-md border border-zinc-800'>
                        <div className='flex gap-2 items-center justify-center p-2'>
                            <UserRoundPlus className='text-zinc-400 size-5' />
                            <input
                                type='email'
                                name='email'
                                placeholder='Seu nome completo' className="bg-transparent text-sm lg:text-lg placeholder-zinc-400 outline-none" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-zinc-950 rounded-md border border-zinc-800 mt-4'>
                        <div className='flex gap-2 items-center justify-center p-2'>
                            <MailOpen className='text-zinc-400 size-5' />
                            <input
                                type='email'
                                name='email'
                                placeholder='Digite o e-mail do convidado' className="bg-transparent text-sm lg:text-lg placeholder-zinc-400 outline-none" />
                        </div>
                    </div>
                    <button
                        onClick={handleSubmitConfirmTrip}
                        type='submit'
                        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center w-full mt-3 gap-2 hover:bg-lime-400">
                        Confirmar criação de viagem
                        <Plus className='size-5' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ConfirmTripModal;