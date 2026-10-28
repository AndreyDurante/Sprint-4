const Solucao = ({ titulo, texto, imagem, alt, tag }) => {
    return (
        <article className="group relative flex flex-col items-center justify-between rounded-3xl border border-white/10 bg-neutral-950/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
            <div className="flex w-full flex-col items-center text-center">
                {tag && (
                    <span className="mb-3 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {tag}
                    </span>
                )}
                <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white sm:text-3xl">
                    {titulo}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-300 sm:text-base">
                    {texto}
                </p>
            </div>
            
            <div className="relative mt-6 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 p-4">
                <img
                    className="relative z-10 aspect-[3/5] w-64 object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    src={imagem}
                    alt={alt || titulo}
                    loading="lazy"
                />
            </div>
        </article>
    )
}

export default Solucao
