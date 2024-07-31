import { Plus, Trash2 } from "lucide-react"
import ManageGuests from "./manage-guests"
import { useState } from "react"
import AddLink from "./add-link"

const ImportantLinks = () => {

    const [isModalAddLink, setModalAddLink] = useState(false)

    const openModalAddLink = () => {
        setModalAddLink(true)
    }

    const closeModalAddLink = () => {
        setModalAddLink(false)
    }

    return (
        <div className="w-full space-y-6 lg:w-80">
            <div className="space-y-6">
                <h2 className="font-semibold text-lg lg:text-xl">Links Importantes</h2>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-base text-zinc-100 truncate">Reserva do AirnBnB</span>
                            <a href="#" className="block text-xs text-zinc-400 truncate">
                                https://www.airbnb.com.br
                            </a>
                        </div>
                        <Trash2 className="size-5 text-red-800" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-base text-zinc-100">Reserva do AirnBnB</span>
                            <a href="#" className="block text-xs text-zinc-400 truncate">
                                https://www.airbnb.com.br
                            </a>
                        </div>
                        <Trash2 className="size-5 text-red-800" />
                    </div>
                </div>
                <button onClick={openModalAddLink} className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700">
                    <Plus className="size-5" />
                    Adicionar link
                </button>
            </div>
            <ManageGuests />

            {isModalAddLink && (
                <AddLink closeModalAddLink={closeModalAddLink} />
            )}
        </div>
    )
}

export default ImportantLinks