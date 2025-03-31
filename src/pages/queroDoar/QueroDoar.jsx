import S from './queroDoar.module.scss'
import Vector from '../../assets/Vector.png'
import axios from 'axios'
import { useState } from 'react'

export default function QueroDoar() {

  // Declaração dos estados para armazenar os dados do livro
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [autor, setAutor] = useState('')
  const [imagem_url, setImagemUrl] = useState('')

  // Função assíncrona para enviar os dados do livro para a API
  const enviarDados = async () => {
    
    const urlApi = 'https://api-livros-vainaweb.onrender.com/doar' // URL da API

    const dadosEnviar = {
      titulo: titulo,
      categoria: categoria,
      autor: autor,
      imagem_url: imagem_url
    }

    await axios.post(urlApi, dadosEnviar) // Envia os dados para a API via método POST
      alert('Livro cadastrado com sucesso!') // Alerta de sucesso

      // Reseta os campos do formulário
      setTitulo('')
      setCategoria('')
      setAutor('')
      setImagemUrl('')
  }

  // Funções para capturar e atualizar os estados com os valores inseridos pelo usuário
  const capturaTitulo = (e) => {
    setTitulo(e.target.value)
    console.log(e.target.value) // Exibe o valor no console para debug
  }
  const capturaCategoria = (e) => {
    setCategoria(e.target.value)
  }
  const capturaAutor = (e) => {
    setAutor(e.target.value)
  }
  const capturaImagem = (e) => {
    setImagemUrl(e.target.value)
  }

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