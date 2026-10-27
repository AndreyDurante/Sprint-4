const Solucao = ({titulo, icone, texto, imagem, alt}) => {
    return (
        <article className="flex flex-col items-center gap-6">
        <div className="group flex min-h-48 w-full max-w-sm flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 px-3 py-6 shadow-lg transition duration-700 hover:scale-105 hover:border-[#ff5e5b]">
            <div className="text-center text-white">
                <h3 className="flex items-center justify-center gap-2 text-2xl font-normal group-hover:underline group-hover:decoration-[#ff5e5b] group-hover:decoration-2">{titulo} <span>{icone}</span></h3>
            </div>
            <p className="w-[90%] text-base leading-relaxed text-[#d8d8d8] sm:text-lg">{texto}</p>
        </div>
        <div className="flex justify-center">
            <img className="aspect-[3/5] w-72 object-contain" src={imagem} alt={alt} />
        </div>
        </article>
    )}

export default Solucao
