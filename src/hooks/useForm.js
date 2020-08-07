import { useState } from 'react';

function useForm(valoresIniciais){
   const [values, setValues] = useState(valoresIniciais);

   // Essa função foi criada para receber a Chave e o valor dinamico, por uqe é usada nos 3 componentes do formulario.
   function setValue(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
      });
   }

   function handleChange(infosDoEvento) {
      setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
      );
   }

   function clearForm(){
      setValue(valoresIniciais);
   }

   return {
      values, 
      handleChange, 
      clearForm
   };
}

export default useForm;