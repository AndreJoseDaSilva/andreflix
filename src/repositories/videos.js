/* A idéia é que este arquivo concentre a origem de todos os dados de Categorias */

import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`; 

function create(objetoDoVideo) {
   return fetch(`${URL_VIDEOS}?_embed=videos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDoVideo),
    })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
   create,
}