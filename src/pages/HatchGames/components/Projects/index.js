import React from 'react';
import CardGame from '../../../../components/shared/CardGame';
import './Projects.scss';

function Projects() {
  return (
    <div className='projectsContainer'>
        <div className='projectsContent'>
          <h2>Choose a project</h2>
          <div className='projectsCards'>
            <CardGame
              name={"Jogo da Velha"}
              className="projectsCard"
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Jogo_da_velha_-_tic_tac_toe.png/1200px-Jogo_da_velha_-_tic_tac_toe.png'
            />
            <CardGame
              name={"Regente"}
              className="projectsCard"
              image='https://img.sitemercado.com.br/produtos/78c9197759289b3276d4733d9ca68d2f06e41177e942dafff3cdd1c94855ea9a_full.jpg'
            />
          </div>
        </div>
    </div>
  );
}

export default Projects;