import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import logoLivro from './../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import s from './header.module.scss'

export default function header() {
  return (
    <BrowserRouter>
      {/** Para evitar conflitos futuros, deve-se colocar uma className na header */}
      {/** Falta fazer o download das imagens e colocá-las na pasta assets */}
      <header className={s.header}>
        <section className={s.logoHeader}>
          <img src={logoLivro} alt="Imagem de um livro aberto com folhas ao vento" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/livrosdoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/querodoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={s.barraDeBusca}>
          <input type="search" name='' id='' placeholder='O que você procura?' />
          <button>
            <img src={lupa} alt="Ícone de lupa branco" />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosdoados" element={<LivrosDoados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  )
}