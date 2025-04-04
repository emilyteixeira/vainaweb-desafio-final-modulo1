import S from './livrosDoados.module.scss'
import livro1 from '../../assets/livro1.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function LivrosDoados() {

  const [livros, setLivros] = useState([]) // Estado para armazenar os livros

  const getLivros = async () => {
      const response = await axios.get('https://api-livros-vainaweb.onrender.com/livros') // URL da API -> A API é a ponte
      setLivros(response.data) // Faz uma filtragem dos dados obtidos
  }

  useEffect(() => {
      getLivros() // Chama a função para obter os livros ao carregar o componente
  },[]) // O array vazio [] garante que a função seja chamada apenas uma vez, quando o componente é montado

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
         {livros.map((livro) => (
          <article key={livro.id}>
            <img src={livro.imagem_url} alt="" />
            <h3>{livro.titulo}</h3>
            <p>{livro.autor}</p>
            <p>{livro.categoria}</p>
          </article>
        ))}
      </section>
    </section>
  )
}