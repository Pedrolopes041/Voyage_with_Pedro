import { CircleDashed } from "lucide-react";

const ManageGuests = () => {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-lg lg:text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-base text-zinc-100 truncate">Jessica White</span>
                        <p className="block text-xs text-zinc-400 truncate">
                            jessicawhite.456@gmail.com
                        </p>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-base text-zinc-100 truncate">Dr. Rita Pacocha</span>
                        <p className="block text-xs text-zinc-400 truncate">
                            ritapacocha.123@gmail.com
                        </p>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>
        </div>
    )
}

export default ManageGuests;