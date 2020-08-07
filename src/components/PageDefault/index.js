import React from 'react'
import styled, {css} from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main `
   background-color: var(--black);
   color: var(--white);
   flex: 1;
   padding-top: 50px;
   padding-left: 5%;
   padding-right:5%;
   ${({ paddingAll }) => css `
      padding: ${paddingAll};
   `}
`;

/* 
Também dá para usar a desconstrução que é apenas pegando uma propriedade específica
function PageDefault(children){
*/
function PageDefault({children, paddingAll}){
   return(
      <> {/* Essa tag <> funciona como o React.Fragment */}
         <Menu />
            <Main paddingAll={paddingAll}>
               {children}  {/* E aqui colocaria apenas children */}
            </Main>
         <Footer />
      {/* <React.Fragment/> */}
      </>
   );
}

export default PageDefault;