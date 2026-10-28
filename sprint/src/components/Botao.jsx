import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Botao = ({ link, texto = "Conheça a solução" }) => {
    return (
        <a
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#e64a47] active:scale-95"
            href={link}
        >
            <span>{texto}</span>
            <FontAwesomeIcon icon={faArrowDown} className="text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
    )
}

export default Botao
