import S from './inicio.module.scss'
import reading from '../../assets/reading.png'
import balance from '../../assets/balance.png'
import networking from '../../assets/networking.png'
import transform from '../../assets/transform.png'

export default function Inicio() {
  return (
    <main>
      <section className={S.post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            {/* O article se autoexplica */}
            <img src={networking} alt="Imagem de quatro mãos dadas" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </article>
          <article>
            <img src={reading} alt="Imagem de um boneco segurando um livro aberto" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={transform} alt="Imagem de pessoas observando um outdoor com uma imagem de um punho serrado" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </article>
          <article>
            <img src={balance} alt="Imagem de uma balança equilibrada" />
            <p>Garante que todos, independetemente de sua condição, tenham oportunidades de aprendizado.</p>
          </article>
        </section>
      </section>
    </main>
  )
}
