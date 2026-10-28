import Botao from './components/Botao'
import Head from './components/Head'
import Publico from './components/Publico'
import Solucao from './components/Solucao'
import Galeria from './components/Galeria'
import Informacoes from './components/Informacoes'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCamera,
  faBolt,
  faHeart,
  faEye,
  faCode,
  faPalette,
  faLaptopCode,
  faUsers,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons'

import celular1 from "./assets/celular1.png"
import celular22 from "./assets/celular22.png"
import celular3 from "./assets/celular3.png"
import smartphone from "./assets/Smartphone.png"
import inclinado from "./assets/smartphone-inclinado.png"

function App() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-neutral-100 selection:bg-accent selection:text-white">
      <Head />

      <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-12">
          <article className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <h1 className="mt-6 font-scoutie text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Câmera Móvel<span className="text-accent">.</span>
            </h1>

            <p className="mt-3 text-2xl font-bold tracking-tight text-accent sm:text-3xl">
              Mais clareza, menos cliques.
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Revolucione a forma como você registra momentos importantes. Desenvolvemos uma interface limpa, sem sobrecarga cognitiva ou menus ocultos, focada no que realmente importa: enquadrar e fotografar em milissegundos.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Botao link="#solucao" texto="Conheça a solução" />
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10 active:scale-95"
              >
                Ver galeria
              </a>
            </div>

            <div className="mt-12 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center sm:text-left">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">0.15s</p>
                <p className="mt-1 text-xs text-neutral-400">Disparo ultra rápido</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">100%</p>
                <p className="mt-1 text-xs text-neutral-400">Zero menus confusos</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">1 Toque</p>
                <p className="mt-1 text-xs text-neutral-400">Ergonomia total</p>
              </div>
            </div>
          </article>

          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <div className="relative flex items-center justify-center p-6 sm:p-10">
              <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-white/30" />
              <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-white/30" />
              <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-white/30" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-white/30" />

              <img
                className="animate-float-gentle relative z-10 max-h-[500px] w-auto object-contain"
                src={inclinado}
                alt="Aplicativo Câmera Móvel exibido no smartphone"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center px-6 py-24" id="solucao">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="text-center">
            <h2 className="font-scoutie text-4xl text-white sm:text-6xl">
              Nossa <span className="text-accent font-bold">Solução</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Desenvolvemos uma proposta focada em simplificar a experiência da câmera mobile através de uma interface moderna, limpa e intuitiva.
            </p>
          </div>

          <div className="mt-14 grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
            <Solucao
              titulo="Interface Minimalista"
              texto="Redução drástica de elementos visuais desnecessários para priorizar velocidade, nitidez e clareza absoluta na tela."
              imagem={celular1}
              alt="Interface Minimalista da Câmera Móvel"
            />
            <Solucao
              titulo="Navegação Intuitiva"
              texto="Ajustes e comandos principais organizados ergonomicamente na área de alcance natural do polegar."
              imagem={celular22}
              alt="Navegação Intuitiva"
            />
            <Solucao
              titulo="Acesso Rápido"
              texto="Os modos essenciais ficam prontos imediatamente ao abrir o aplicativo, sem submenus escondidos."
              imagem={celular3}
              alt="Acesso Rápido aos Modos de Foto"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center px-6 py-24" id="publico-alvo">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="text-center">
            <h2 className="font-scoutie text-4xl text-white sm:text-6xl">
              Público <span className="text-accent font-bold">Alvo</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Solução pensada tanto para quem precisa de agilidade máxima quanto para quem busca uma experiência sem barreiras de usabilidade.
            </p>
          </div>

          <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Publico
              icone={faCamera}
              subtitulo="Sem ruído visual"
              titulo="Fotógrafos"
              descricao="Interessados em fotografia que desejam praticidade de bolso sem menus intrusivos atrapalhando a composição."
            />
            <Publico
              icone={faBolt}
              subtitulo="Agilidade extrema"
              titulo="Criadores de Conteúdo"
              descricao="Precisam de velocidade imediata entre desbloquear o smartphone, apontar e disparar vídeos ou fotos para as redes."
            />
            <Publico
              icone={faHeart}
              subtitulo="Momentos sem atraso"
              titulo="Pais e Famílias"
              descricao="Momentos com crianças e animais de estimação passam em segundos; o disparo precisa ser imediato e confiável."
            />
            <Publico
              icone={faEye}
              subtitulo="Legibilidade e clareza"
              titulo="Usuários Idosos"
              descricao="Interface com ícones nítidos, texto legível e fluxo sem gestos complexos ou configurações ocultas."
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center px-6 py-24" id="galeria">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="text-center">
            <h2 className="font-scoutie text-4xl text-white sm:text-6xl">
              Galeria de <span className="text-accent font-bold">Capturas</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Fotos que demonstram a nitidez, o equilíbrio de cores e a fidelidade visual proporcionadas por uma captura sem compressões agressivas.
            </p>
          </div>

          <div className="mt-14 w-full">
            <Galeria />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center px-6 py-24" id="equipe">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="text-center">
            <h2 className="font-scoutie text-4xl text-white sm:text-6xl">
              Quem <span className="text-accent font-bold">Somos?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Equipe FGA Sistemas focada em unir engenharia de software com design de interação descomplicado.
            </p>
          </div>

          <div className="mt-14 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Publico
              icone={faCode}
              subtitulo="Arquitetura & Código"
              titulo="Andrey Durante"
              descricao="Desenvolvimento de interfaces reativas, componentização e integração contínua."
            />
            <Publico
              icone={faPalette}
              subtitulo="Design System"
              titulo="Felipe Macedo"
              descricao="Especialista em UX/UI, ergonomia visual e arquitetura de usabilidade."
            />
            <Publico
              icone={faLaptopCode}
              subtitulo="Lógica & Performance"
              titulo="Gustavo Maciel"
              descricao="Desenvolvimento da aplicação, otimização de estados e testes de usabilidade."
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950 px-6 py-16" id="contato">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 sm:flex-row sm:flex-wrap sm:justify-between">
          <div className="flex max-w-sm flex-col gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                <FontAwesomeIcon icon={faCamera} className="text-xs" />
              </span>
              <span className="font-scoutie text-xl font-bold text-white">
                Câmera Móvel<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Projeto desenvolvido pela equipe <strong>FGA Sistemas</strong> como solução para o Challenge da Jovi, repensando a usabilidade da câmera em smartphones.
            </p>
          </div>

          <Informacoes
            titulo="Integrantes & RMs"
            i1="Andrey Durante - RM 569922"
            i3="Felipe Macedo - RM 573404"
            i4="Gustavo Maciel - RM 570720"
          />

          <Informacoes
            titulo="Contato & Suporte"
            i1="São Paulo, SP - Brasil"
            i2="(11) 99999-9999"
            i3="contato@fgasistemas.com"
            i4="Atendimento comercial e acadêmico"
          />
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Câmera Móvel • FGA Sistemas. Todos os direitos reservados.</p>
          <p>Challenge da Jovi</p>
        </div>
      </footer>
    </div>
  )
}

export default App
