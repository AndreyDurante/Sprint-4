
const Informacoes = ({titulo, i1, i2, i3, i4}) => {
    return (
        <div className="ml-5 flex w-1/5 flex-col gap-5">
            <h3 className="text-xl text-accent sm:text-2xl">{titulo}</h3>
            <p>{i1}</p>
            <p>{i2}</p>
            <p>{i3}</p>
            <p>{i4}</p>
        </div>
    )
}

export default Informacoes
