import { Link2, Plus } from "lucide-react"

const ImportantLinks = () => {
    return (
        <div className="w-80 space-y-6">
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Links Importantes</h2>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">Reserva do AirnBnB</span>
                            <a href="#" className="block text-xs text-zinc-400 truncate">
                                https://www.airbnb.com.br
                            </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5 shrink-0" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">Reserva do AirnBnB</span>
                            <a href="#" className="block text-xs text-zinc-400 truncate">
                                https://www.airbnb.com.br
                            </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5 shrink-0" />
                    </div>
                </div>
                <button className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
                    <Plus className="size-5" />
                    Adicionar link
                </button>
            </div>
        </div>
    )
}

export default ImportantLinks