import { ArrowBigRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface InputDestinationProps {
    isInputGuess: boolean
    openGuessInput: () => void
    closeGuessInput: () => void
}

const InputDestination = ({isInputGuess, openGuessInput, closeGuessInput}: InputDestinationProps) => {
    return (
        <div className="rounded-xl flex flex-col items-center gap-3 p-2">
            <div className="flex bg-zinc-900 h-16 rounded-xl items-center gap-2 p-4 w-full">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    disabled={isInputGuess}
                    type="text"
                    placeholder="Para onde você vai?"
                    className="bg-transparent text-sm lg:text-lg placeholder-zinc-400 outline-none"
                />
            </div>
            <div className="flex bg-zinc-900 h-16 rounded-xl items-center gap-2 p-4 w-full">
                <Calendar className="size-5 text-zinc-400" />
                <input
                    disabled={isInputGuess}
                    type="text"
                    placeholder="Quando você vai?"
                    className="bg-transparent text-sm lg:text-lg placeholder-zinc-400 outline-none"
                />
            </div>

            {isInputGuess ? (
                <button onClick={closeGuessInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 w-full h-14 hover:bg-zinc-700 text-sm lg:text-lg">
                    Alterar local/data
                    <Settings2 />
                </button>
            ) : (
                <button
                    onClick={openGuessInput}
                    className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center h-14 gap-2 w-full hover:bg-lime-400 text-sm lg:text-lg"
                >
                    Continuar
                    <ArrowBigRight className="size-5" />
                </button>
            )}
        </div>
    )
}

export default InputDestination;