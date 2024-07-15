import { ArrowBigRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface InputDestinationProps {
    isInputGuess: boolean
    openGuessInput: () => void
    closeGuessInput: () => void
}

const InputDestination = ({isInputGuess, openGuessInput, closeGuessInput}: InputDestinationProps) => {
    return (
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
    )
}

export default InputDestination;