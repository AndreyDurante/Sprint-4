import { useEffect, useState } from "react"

const Galeria = () => {
    const [fotos, setFotos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        const controller = new AbortController()

        const buscarFotos = async () => {
            try {
                const resposta = await fetch(
                    "https://picsum.photos/v2/list?page=1&limit=20",
                    { signal: controller.signal }
                )

                if (!resposta.ok) {
                    throw new Error("Falha ao buscar fotos")
                }

                setFotos(await resposta.json())
            } catch (erroBusca) {
                if (erroBusca.name !== "AbortError") {
                    setErro("Nao foi possivel carregar as fotos.")
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
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {carregando && (
                <p className="col-span-full py-10 text-center text-neutral-300" role="status">
                    Carregando fotos...
                </p>
            )}

            {erro && (
                <p className="col-span-full py-10 text-center text-red-300" role="alert">
                    {erro}
                </p>
            )}

            {fotos.map((foto) => (
                <figure className="overflow-hidden rounded-2xl border border-white/10 bg-surface" key={foto.id}>
                    <a href={foto.url} target="_blank" rel="noreferrer">
                        <img
                            className="aspect-[4/3] w-full object-cover"
                            src={`https://picsum.photos/id/${foto.id}/600/450`}
                            alt={`Foto por ${foto.author}`}
                            loading="lazy"
                        />
                        <figcaption className="p-3 text-sm text-neutral-200">
                            Foto por {foto.author}
                        </figcaption>
                    </a>
                </figure>
            ))}
        </div>
    )
}

export default Galeria
