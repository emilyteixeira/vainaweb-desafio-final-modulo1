import S from './livrosDoados.module.scss'
import livro1 from '../../assets/livro1.png'

export default function LivrosDoados() {
  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxCard}>
        <article>
          <img src={livro1} alt="" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
      </section>
    </section>
  )
}