import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Head = () => {
    return (
        <header className="fixed left-1/2 top-4 z-50 flex w-[94%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-neutral-950/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6">
            <a href="#" className="flex items-center gap-2.5 text-white transition hover:opacity-90">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
                    <FontAwesomeIcon icon={faCamera} className="text-sm" />
                </span>
                <span className="font-scoutie text-lg font-bold tracking-tight text-white sm:text-xl">
                    Câmera<span className="text-accent">.</span>
                </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
                <a className="text-sm font-medium text-neutral-300 transition hover:text-white" href="#solucao">Solução</a>
                <a className="text-sm font-medium text-neutral-300 transition hover:text-white" href="#publico-alvo">Público-Alvo</a>
                <a className="text-sm font-medium text-neutral-300 transition hover:text-white" href="#galeria">Galeria</a>
                <a className="text-sm font-medium text-neutral-300 transition hover:text-white" href="#equipe">Equipe</a>
            </nav>

            <a
                href="#solucao"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white transition hover:bg-accent hover:text-white sm:text-sm"
            >
                <span>Explorar</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
        </header>
    )
}

export default Head
