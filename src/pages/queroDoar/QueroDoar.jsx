import S from './queroDoar.module.scss'
import Vector from '../../assets/Vector.png'
import axios from 'axios'
import { useState } from 'react'

export default function QueroDoar() {

  // Declaração dos estados para armazenar os dados do livro -> Coleta dados
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [autor, setAutor] = useState('')
  const [imagem_url, setImagemUrl] = useState('')

  // Função assíncrona para enviar os dados do livro para a API -> Envia dados
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
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <img src={Vector} alt="Imagem de um livro aberto" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder='Título' onChange={capturaTitulo} value={Titulo} />
          <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={Categoria} />
          <input type="text" placeholder='Autor' onChange={capturaAutor} value={Autor} /> 
          <input type="link" placeholder='Link da Imagem' onChange={capturaImagem} value={imagem_url} />
          <input className={S.doar} onClick={enviarDados} type="submit" value="Doar" />
        </form>
      </section>
    </section>
  )
}