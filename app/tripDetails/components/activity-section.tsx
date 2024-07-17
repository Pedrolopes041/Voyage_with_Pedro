import { CircleCheck, Link2, Plus } from "lucide-react";
import ImportantLinks from "./important-links";

const ActivitySection = () => {
    return (
        <main className="flex gap-16">
            <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-semibold">Atividades</h2>
                    <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                        <Plus className="size-5" />
                        Cadastrar atividade
                    </button>
                </div>

                <div className="space-y-8">
                    <div className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                            <span className="text-xs text-zinc-500">Sábado</span>
                        </div>
                        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                    </div>

                    <div className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">Dia 20</span>
                            <span className="text-xs text-zinc-500">Segunda</span>
                        </div>
                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100">Academia em grupo</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                            </div>
                        </div>
                        <div className="space-y-2.5">
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100">Estudar</span>
                                <span className="text-zinc-400 text-sm ml-auto">11:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImportantLinks />
        </main>
    );
};

export default ActivitySection;
