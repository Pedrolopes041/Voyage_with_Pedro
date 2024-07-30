import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityProps {
    closeModalActivity: () => void
}

const CreateActivity = ({ closeModalActivity }: CreateActivityProps) => {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-4'>
            <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                    <button type='button' onClick={closeModalActivity}>
                        <X className='size-5 text-zinc-400' />
                    </button>
                </div>
                <p className='text-sm text-zinc-400'>
                    Todos os convidados podem visualizar as atividades.
                </p>

                <form className='mt-4 '>
                    <div className='flex justify-between items-center bg-zinc-950 rounded-md border border-zinc-800'>
                        <div className='flex gap-2 items-center justify-center p-2'>
                            <Tag className='text-zinc-400 size-5' />
                            <input
                                type='email'
                                name='email'
                                placeholder='Qual é a atividade?' className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-zinc-950 rounded-md border border-zinc-800 mt-4'>
                        <div className='flex gap-2 items-center justify-center p-2 w-full'>
                            <Calendar className='text-zinc-400 size-5' />
                            <input
                                type='datetime-local'
                                name='datetime'
                                placeholder="Data e Hora da atividade"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full [color-scheme:dark]" />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center w-full mt-3 gap-2 hover:bg-lime-400">
                        Salvar atividade
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateActivity;