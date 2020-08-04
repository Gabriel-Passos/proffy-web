import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/43184223?s=460&u=50810abc34900ea6134a9bd0b8a04e2c8640ddc4&v=4" alt="Gabriel Passos"/>
        <div>
          <strong>Gabriel Passos</strong>
          <span>Inteligência Artifícial</span>
        </div>
      </header>    

      <p>
        Entusiasta das melhores tecnologias do ecosistema de I.A.
        <br/><br/>
        Desenvolvendo a skynet e a matrix onde ambas trabalharão  em conjunto para nos proporcionar um mundo melhor.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;