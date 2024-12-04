import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import logoLivro from './../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import S from './header.module.scss'

export default function header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
          <img src={logoLivro} alt="Imagem de um livro aberto com folhas ao vento" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
            <li>
              <Link className={S.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={S.link} to="/livrosdoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={S.link} to="/querodoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={S.boxSearch}>
          <input className={S.boxInput} type="text" name='' id='' placeholder='O que você procura?' />
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