import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/30246642?s=460&u=24105a32bde1c0c2bc975b2d998bceb92df6bf5e&v=4" alt="André Borges" />
        <div>
          <strong>André Borges</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada
        <br />
        <br />
        Apaixonado porexplodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
      </p>

      <footer>
        <p>Preço/hora</p>
        <strong>R$ 100,00</strong>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
