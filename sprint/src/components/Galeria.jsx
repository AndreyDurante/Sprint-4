import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Galeria = () => {
    const [fotos, setFotos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        const buscarFotos = async () => {
            try {
                const resposta = await fetch(
                    "https://picsum.photos/v2/list?page=1&limit=12",
                    { signal: controller.signal }
                )

                if (!resposta.ok) {
                    throw new Error("Falha ao buscar fotos")
                }

                setFotos(await resposta.json())
            } catch (erroBusca) {
                if (erroBusca.name !== "AbortError") {
                    setErro("Não foi possível carregar a galeria no momento.")
                }
            } finally {
                if (!controller.signal.aborted) {
                    setCarregando(false)
                }
            }
        }

        buscarFotos()

        return () => controller.abort()
    }, [])

    return (
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {carregando && (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-neutral-400">
                    <span className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-2 border-accent border-t-transparent" />
                    <p className="mt-4 text-sm font-medium">Carregando capturas reais...</p>
                </div>
            )}

            {erro && (
                <div className="col-span-full rounded-2xl border border-red-500/20 bg-red-950/20 py-8 text-center text-red-300">
                    <p className="text-sm">{erro}</p>
                </div>
            )}

            {fotos.map((foto, index) => (
                <figure
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40"
                    key={foto.id || index}
                >
                    <a href={foto.url} target="_blank" rel="noreferrer" className="block">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                            <img
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                src={`https://picsum.photos/id/${foto.id}/600/450`}
                                alt={`Captura por ${foto.author}`}
                                loading="lazy"
                            />
                            
                            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                            </span>
                        </div>

                        <figcaption className="flex items-center justify-between p-4 text-xs">
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCamera} className="text-accent" />
                                <span className="font-medium text-neutral-200 truncate max-w-[150px]">
                                    {foto.author}
                                </span>
                            </div>
                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-mono text-neutral-400">
                                4K RAW
                            </span>
                        </figcaption>
                    </a>
                </figure>
            ))}
        </div>
    )
}

export default Galeria
