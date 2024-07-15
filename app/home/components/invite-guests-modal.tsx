import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface InviteGuessModalProps {
    closeGuessModal: () => void
    isEmailGuess: string[]
    removeEmailFromInvites: (email: string) => void
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

const InviteGuessModal = (props: InviteGuessModalProps) => {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Selecionar Convidados</h2>
                    <button type='button' onClick={props.closeGuessModal}>
                        <X className='size-5 text-zinc-400' />
                    </button>
                </div>
                <p className='text-sm text-zinc-400'>
                    Os convidados irão receber e-mails para confirmar a participação na viagem
                </p>

                <div className='flex flex-wrap gap-2 mt-4'>
                    {props.isEmailGuess.map(email => {
                        return (
                            <div key={email} className='bg-zinc-800 p-1 rounded-md flex items-center justify-center gap-1'>
                                <span className='text-zinc-400'>{email}</span>
                                <button onClick={() => props.removeEmailFromInvites(email)} type='button'>
                                    <X className='size-4 text-zinc-400' />
                                </button>
                            </div>
                        )
                    })}
                </div>

                <div className='w-full h-px bg-zinc-800 mt-4' />

                <form onSubmit={props.addNewEmailToInvite} className='mt-4 rounded-md bg-zinc-950 border border-zinc-800 flex justify-between'>
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
    )
}

export default InviteGuessModal