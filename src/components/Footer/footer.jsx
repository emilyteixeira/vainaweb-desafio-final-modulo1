import logoFacebook from '../../assets/logoFacebook.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedIn from '../../assets/logoLinkedIn.png'
import logoInstagram from '../../assets/logoInstagram.png'
import S from './footer.module.scss'

export default function Footer() {
  return (
    <footer>
      {/* Parte azul */}
      <section className={S.boxSocial}>
        <h3>4002-8922</h3>
        <nav>
          <a href="">
            <img src={logoFacebook} alt="Logo do Facebook" />
          </a>
          <a href="">
            <img src={logoTwitter} alt="Logo do Twitter" />
          </a>
          <a href="">
            <img src={logoYoutube} alt="Logo do Youtube" />
          </a>
          <a href="">
            <img src={logoLinkedIn} alt="Logo do LinkedIn" />
          </a>
          <a href="">
            <img src={logoInstagram} alt="Logo do Instagram" />
          </a>
        </nav>
      </section>
      {/* Parte preta */}
      <section className={S.boxTexto}>
        <p>Layout desenvolvido pela Vai na Web para fins educativos - 2025</p>
      </section>
    </footer>
  )
}