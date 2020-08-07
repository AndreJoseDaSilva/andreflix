import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FFFFFF',
  };

  const { handleChange, values, clearForm } = useForm( valoresIniciais );

  const [categorias, setCategorias] = useState([]);

/* 
   Executa como efeito colateral. 
   Primeiro parâmetro: É o que a gente quer que aconteça
   Segundo parâmetro: Quando quais coisas atualizarem o que é para acontecer. É um aray. Se estiver vazio, vai acontecer uma única vez.
*/
  useEffect(() =>
  {
   const URL = window.location.hostname.includes('localhost')
   ? 'http://localhost:8080/categorias' 
   : 'https://andreflix.herokuapp.com/categorias'

   fetch(URL)
      .then( async (respostaDoServidorQueOFetchBuscou) => {
         const resposta = await respostaDoServidorQueOFetchBuscou.json();

         setCategorias([
            ...resposta, // Esses 3 pontinhos indicam que as informações de categorias se mantém.
            //values, // E aqui inclui o novo valor
          ]);

      });
   }
   ,[]
  );

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      { /*  O React trabalha com o conceito de State */}
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias, // Esses 3 pontinhos indicam que as informações de categorias se mantém.
          values, // E aqui inclui o novo valor
        ]);
        
        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
         <div>
            {/* Carregando... */}
            Carregando ...
         </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
