import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Caruosel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {

   const [dadosIniciais, setDadosIniciais] = useState([]);
   /* 
      useEffect

      Executa como efeito colateral. 
      Primeiro parâmetro: É o que a gente quer que aconteça
      Segundo parâmetro: Quando quais coisas atualizarem o que é para acontecer. É um aray. Se estiver vazio, vai acontecer uma única vez.
   */
   // http://localhost:8080/categorias?_embed=videos
   useEffect(() => {
      // http://localhost:8080/categorias?_embed=videos
      categoriasRepository.getAllWithVideos()
        .then((categoriasComVideos) => {
          //console.log(categoriasComVideos[0].videos[0]);
          setDadosIniciais(categoriasComVideos);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);


   return (
      <PageDefault paddingAll={0}>
      
      { dadosIniciais.length ===0 && (<div>Carregando ...</div>) }

      { dadosIniciais.map((categoria, indice ) => {
         if ( indice === 0 ){
            return (
               <div key={categoria.id}>
               <BannerMain 
                  videoTitle={dadosIniciais[0].videos[0].titulo} 
                  url={dadosIniciais[0].videos[0].url} 
                  videoDescription ={"O que faz uma desenvolvedora front-end?"}
               />
               <Caruosel 
                  ignoreFirstVideo 
                  category={dadosIniciais[0]}
               />
               </div>
            );
         }

         return(
            <Caruosel 
            key={categoria.id} 
            category={categoria}
         />
         );

      })}

      {/*}
      <BannerMain 
         videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
         url={dadosIniciais.categorias[0].videos[0].url} 
         videoDescription ={"O que faz uma desenvolvedora front-end?"}
      />

      <Caruosel 
         ignoreFirstVideo 
         category={dadosIniciais.categorias[0]}
      />

      <Caruosel 
         category={dadosIniciais.categorias[1]}
      />

      <Caruosel 
         category={dadosIniciais.categorias[2]}
      />

      <Caruosel 
         category={dadosIniciais.categorias[3]}
      />

      <Caruosel 
         category={dadosIniciais.categorias[4]}
      />

      <Caruosel 
         category={dadosIniciais.categorias[5]}
      />
      */}

    </PageDefault>
  );
}

export default Home;