import { ArrowBigRight, UserRoundPlus } from "lucide-react"

interface InputInviteProps {
    openGuessModal: () => void
    isEmailGuess: string[]
    openConfirmModal: () => void
}

const InputInvite = ({ isEmailGuess, openConfirmModal, openGuessModal }: InputInviteProps) => {
    return (
        <div className="px-4 rounded-xl flex items-center gap-3 h-16 mt-6 bg-zinc-900">
            <button onClick={openGuessModal} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                {isEmailGuess.length > 0 ? (
                    <span
                        className="bg-transparent text-sm lg:text-lg placeholder-zinc-100 outline-none"
                    >{isEmailGuess.length} pessoa(s) convidado(s)</span>
                ) : (
                    <span
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                    >Quem estará na viagem?</span>
                )}
            </button>
            <button
                onClick={openConfirmModal}
                className="bg-lime-300 text-lime-950 rounded-lg font-medium flex items-center gap-2 p-2 hover:bg-lime-400"
            >
                Confirmar viagem
                <ArrowBigRight className="size-5" />
            </button>
        </div>
    )
}

export default InputInvite