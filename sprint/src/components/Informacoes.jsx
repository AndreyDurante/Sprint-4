const Informacoes = ({ titulo, i1, i2, i3, i4 }) => {
    return (
        <div className="flex flex-col gap-2.5 text-left">
            <h3 className="text-base font-bold text-accent sm:text-lg">{titulo}</h3>
            {i1 && <p className="text-sm text-neutral-300">{i1}</p>}
            {i2 && <p className="text-sm text-neutral-300">{i2}</p>}
            {i3 && <p className="text-sm text-neutral-300">{i3}</p>}
            {i4 && <p className="text-sm text-neutral-300">{i4}</p>}
        </div>
    )
}

export default Informacoes
