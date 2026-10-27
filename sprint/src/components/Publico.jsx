import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Publico = ({ titulo, descricao }) => {
    return (
        <div className="flex min-h-72 w-full max-w-xs flex-col items-center justify-center rounded-2xl border border-white/10 bg-black px-4 py-5 transition duration-1000 hover:scale-105 hover:border-[#ff5e5b]">
            <FontAwesomeIcon icon={faCircleUser} className="mb-2 text-4xl text-[#ff5e5b]" />
            <div className="imagem-publico"></div>
            <h3 className="m-3 text-center text-xl text-white">{titulo}</h3>
            <p className="w-4/5 text-center leading-relaxed text-[#d8d8d8]">{descricao}</p>
        </div>
    )
}

export default Publico
