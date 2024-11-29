import S from './queroDoar.module.scss'
import Vector from '../../assets/Vector.png'

export default function QueroDoar() {
  return (
    <section className={S.principal}>
      <section className={S.container}>
        <h2>Por favor, preencha o formulário com suas informações e as do livro:</h2>
        <form action="">
          <div>
            <img src={Vector} alt="Imagem de um livro aberto" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder='Título' />
          <input type="text" placeholder='Categoria' />
          <input type="text" placeholder='Autor' />
          <input type="link" placeholder='Link da Imagem' />
          <input className={S.doar} type="submit" value="Doar" />
        </form>
      </section>
    </section>
  )
}