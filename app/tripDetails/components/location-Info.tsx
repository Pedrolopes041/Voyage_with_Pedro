import { Calendar, MapPin, Undo2 } from "lucide-react"

const LocationInfo = () => {
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="text-zinc-100">Cabrobó, Brasil</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">17 a 23 de agosto</span>
                </div>


                <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                    Voltar
                    <Undo2 className="size-5" />
                </button>
            </div>
        </div>
    )
}

export default LocationInfo