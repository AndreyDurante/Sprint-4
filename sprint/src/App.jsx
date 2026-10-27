import Botao from './components/Botao'
import Head from './components/Head'
import Publico from './components/Publico'
import Solucao from './components/Solucao'
import Galeria from './components/Galeria'
import '@fortawesome/fontawesome-svg-core/styles.css';
import celular1 from "./assets/celular1.png"
import celular22 from "./assets/celular22.png"
import celular3 from "./assets/celular3.png"
import smartphone from "./assets/Smartphone.png"
import Informacoes from './components/Informacoes'


function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <section className="mt-16 flex w-4/5 flex-col items-center justify-center gap-5 bg-black pt-24 text-center sm:mt-48 lg:mt-0 lg:min-h-screen lg:w-full lg:flex-row lg:pt-24 lg:text-left">
        <Head></Head>
        <article className="flex w-full flex-col items-center justify-center gap-7 px-6 lg:w-1/2 lg:items-start lg:pl-20 lg:text-left">
          <h1 className="font-scoutie text-6xl leading-normal text-white lg:text-7xl lg:leading-none">Câmera Móvel.</h1>
          <span className="text-2xl font-bold text-accent drop-shadow-sm sm:text-3xl">Mais clareza, menos cliques.</span>
          <p className="max-w-prose text-base text-neutral-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, debitis fugit error rerum consequatur.</p>
          <Botao
            link={"#solucao"}
          />
        </article>
        <div className="flex w-full items-center justify-center border-white/10 lg:h-full lg:w-1/2 lg:border-l">
          <img className="h-4/5 w-1/2 object-contain" src={smartphone} alt="Celular" />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-8 bg-black px-5 py-10" id='solucao'>
        
        <h2 className="pt-24 text-center font-scoutie text-5xl text-neutral-100 sm:text-7xl">Nossa <span className="font-bold text-accent drop-shadow-sm">Solução</span></h2>
        <p className="w-4/5 text-center text-lg sm:w-1/2">Desenvolvemos uma proposta focada em simplificar a experiência da câmera mobile através de uma interface moderna, limpa e intuitiva.</p>
        <div className="mx-auto mt-5 grid w-full max-w-7xl grid-cols-1 text-center gap-10 lg:grid-cols-3">
          <Solucao
            titulo="Interface Minimalista"
            texto="Redução de elementos desnecessários para priorizar foco, velocidade e clareza visual."
            imagem={celular1}
            alt={""}
          />
          <Solucao
            titulo="Navegação Intuitiva"
            texto="Organização simples dos recursos principais para facilitar o uso diário."
            imagem={celular22}
            alt={""}
          />
          <Solucao
            titulo="Acesso Rápido"
            texto="Os modos mais utilizados ficam acessíveis imediatamente sem menus complexos."
            imagem={celular3}
            alt={""}
          />

        </div>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center gap-16 bg-black px-5 py-12" id='publico-alvo'>
        <h2 className="font-scoutie text-4xl text-neutral-100 sm:text-5xl">Público Alvo</h2>
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
          <Publico
            titulo={"Fotógrafos"}
            descricao={"Pessoas que já têm interesse em fotografia mas não têm equipamento profissional."}
          />
          <Publico
            titulo={"Criadores de conteúdo"}
            descricao={"Precisam de agilidade extrema entre abrir o app, enquadrar e capturar — seja foto ou vídeo"}
          />
          <Publico
            titulo={"Pais e famílias"}
            descricao={"Precisam de simplicidade e velocidade: crianças não esperam."}
          />
          <Publico
            titulo={"Usuários idosos"}
            descricao={"Muitas vezes se frustram com interfaces cheias de ícones e gestos pouco intuitivos."}
          />
        </div>
      </section>

      <section className="mb-24 flex flex-col items-center justify-center bg-black px-5" id='galeria'>
        <h2 className="font-scoutie text-4xl text-neutral-100 sm:text-5xl p-10">Galeria</h2>
        <Galeria />
      </section>

      <section className="flex flex-col items-center justify-center gap-12 bg-black px-5 py-12 text-center lg:min-h-screen" id='equipe'>
        <h2 className="font-scoutie text-4xl text-neutral-100 sm:text-5xl">Quem somos?</h2>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Publico
            titulo={"Andrey Durante"}
            descricao={"Desenvolvedor Full-Stack."}
          />
          <Publico
            titulo={"Felipe Macedo"}
            descricao={"Especialista em UI/UX"}
            />
          <Publico
            titulo={"Gustavo Maciel"}
            descricao={"Desenvolvedor da aplicação"}
          />

        </div>
        <footer className="relative left-1/2 mt-12 flex w-screen -translate-x-1/2 flex-col items-center gap-8 bg-surface text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-around sm:text-left lg:min-h-96" id="contato">
          <Informacoes
          titulo={"Integrantes"}
          i1={"Andrey - RM 569922"}
          i2={"Fabrício - RM 573450"}
          i3={"Felipe - RM 573404"}
          i4={"Gustavo - RM 570720"}
          />
          <Informacoes
          titulo={"Contato"}
          i1={"São Paulo, SP - Brasil"}
          i2={"(11) 99999-9999"}
          i3={"contato@fgasistemas.com"}
          i4={"Sempre atendendo"}
          />

          <p className="px-5 text-sm sm:max-w-xs sm:text-base">Projeto desenvolvido pela equipe FGA Sistemas para projeto do Challenge da Jovi</p>
        </footer>
      </section>
    </div>


  )
}

export default App
