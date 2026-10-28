import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Publico = ({ titulo, descricao, icone = faCircleUser, tag, subtitulo }) => {
    return (
        <div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-950/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                        <FontAwesomeIcon icon={icone} className="text-xl" />
                    </div>
                    {tag && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-400">
                            {tag}
                        </span>
                    )}
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">{titulo}</h3>
                {subtitulo && <p className="mt-0.5 text-xs font-medium text-accent">{subtitulo}</p>}
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-300">{descricao}</p>
            </div>
        </div>
    )
}

export default Publico
