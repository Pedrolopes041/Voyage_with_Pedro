import { Link, Tag, X } from "lucide-react";

interface AddLinkProps {
    closeModalAddLink: () => void
}

const AddLink = ({ closeModalAddLink }: AddLinkProps) => {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-4'>
            <div className='w-[640px] rounded-xl py-5 px-6 bg-zinc-900'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Adicionar link</h2>
                    <button type='button' onClick={closeModalAddLink}>
                        <X className='size-5 text-zinc-400' />
                    </button>
                </div>
                <p className='text-sm text-zinc-400'>
                    Cadastre um link para a viagem específica.
                </p>

                <form className='mt-4 '>
                    <div className='flex justify-between items-center bg-zinc-950 rounded-md border border-zinc-800'>
                        <div className='flex gap-2 items-center justify-center p-2'>
                            <Tag className='text-zinc-400 size-5' />
                            <input
                                type='email'
                                name='email'
                                placeholder='Qual é o titulo do link?' className="bg-transparent text-sm lg:text-lg placeholder-zinc-400 outline-none" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-zinc-950 rounded-md border border-zinc-800 mt-4'>
                        <div className='flex gap-2 items-center justify-center p-2 w-full'>
                            <Link className='text-zinc-400 size-5' />
                            <input
                                type='url'
                                name='url'
                                placeholder="Link da atividade"
                                className="bg-transparent text-sm lg:text-lg placeholder-zinc-400 outline-none w-full [color-scheme:dark]" />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center w-full mt-3 gap-2 hover:bg-lime-400 text-sm lg:text-lg">
                        Salvar link
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddLink;