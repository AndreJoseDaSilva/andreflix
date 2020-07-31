import React from 'react';


function ButtonLink(props) {
   // props => {className: "nome da classe css", href: "link"  }
   return (
      <a href="{href}" className={props.className} >
         {props.children}
      </a>
   )
}

export default ButtonLink