import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import './botao.css';

const Botao = ({ link }) => {
    return (
        <a
            className="botao-transicao inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-white"
            href={link}
        >
            Conheça a solução
            <FontAwesomeIcon icon={faCircleArrowDown} className="text-base" />
        </a>
    )
}

export default Botao
