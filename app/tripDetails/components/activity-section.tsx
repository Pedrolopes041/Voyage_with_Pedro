"use client"

import { CircleCheck, Plus, Trash2 } from "lucide-react";
import ImportantLinks from "./important-links";
import { useState } from "react";
import CreateActivity from "./create-activity-modal";

const ActivitySection = () => {

    const [isModalActivity, setModalActivity] = useState(false)

    const openModalActivity = () => {
        setModalActivity(true)
    }

    const closeModalActivity = () => {
        setModalActivity(false)
    }

    return (
        <main className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl lg:text-3xl font-semibold">Atividades</h2>
                    <button onClick={openModalActivity} className="bg-lime-300 text-lime-950 rounded-lg font-medium text-base flex items-center gap-2 p-2 lg:px-2 lg:py-2 hover:bg-lime-400">
                        <Plus className="size-5" />
                        Cadastrar atividade
                    </button>
                </div>

                <div className="space-y-8">
                    <div className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-lg lg:text-xl text-zinc-300 font-semibold">Dia 17</span>
                            <span className="text-xs text-zinc-500">Sábado</span>
                        </div>
                        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                    </div>

                    <div className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-lg lg:text-xl text-zinc-300 font-semibold">Dia 20</span>
                            <span className="text-xs text-zinc-500">Segunda</span>
                        </div>
                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100 truncate">Academia em grupo</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                                <Trash2 className="size-5 text-red-800" />
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100 truncate">Estudar</span>
                                <span className="text-zinc-400 text-sm ml-auto">11:00</span>
                                <Trash2 className="size-5 text-red-800" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImportantLinks />

            {isModalActivity && (
                <CreateActivity closeModalActivity={closeModalActivity} />
            )}
        </main>
    );
};

export default ActivitySection;
