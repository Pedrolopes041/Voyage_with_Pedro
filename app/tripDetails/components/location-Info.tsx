"use client"

import { Calendar, MapPin, Undo2 } from "lucide-react"
import { useRouter } from "next/navigation"

const LocationInfo = () => {

    const router = useRouter()

    const handleClickHome = () => {
        router.push("/")
    }

    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="text-zinc-100">Cabrobó</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100"></span>
                </div>


                <button onClick={handleClickHome} className="bg-zinc-800 text-zinc-200 rounded-lg p-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                    Voltar
                    <Undo2 className="size-5" />
                </button>
            </div>
        </div>
    )
}

export default LocationInfo