import React from 'react';
import { Link } from "react-router-dom";
import '../style/About.css'
import Endpoints from './Endpoints';

const About = () => {
    
  return ( 
  <>  
   <div className="AboutContent">
     <h1 className="AboutTitle">Cenários Propostos:</h1>
      <h6 className="AboutText">•	Criação de um Website contendo um jogo relacionado com Crypto moedas;</h6>
      <h6 className="AboutText">•	Desenvolver o Front-End e Backend e efetuar o deploy num servidor para ficar hosted na Web;</h6>
      <h6 className="AboutText">•	Obtenção de data-series de um período aleatório (1 mês de valores) de uma Base de Dados dedicada a crypto moedas para garantir um jogo justo.</h6>
   </div>

   <div className="AboutContent">
   <h1 className="AboutTitle">Objetivos do Jogo</h1>
    <h6 className="AboutText" > •	Criação de um grupo de jogadores para competir entre si;</h6>
    <h6 className="AboutText" >•	Atribuição de uma carteira inicial com fundos virtuais para transações;</h6>
    <h6 className="AboutText" >•	Simular um período temporal com as respetivas oscilações dos preços das moedas, sendo esse período uma proxy de um período de 1 mês real comprimido em apenas 3 a 5 minutos de jogo, permitindo a compra e venda das moedas em qualquer momento do jogo;</h6>
    <h6 className="AboutText" >•	Calcular o valor final da carteira dos jogadores, dando um ranking final e determinando o(s) vencedor(es). Mostrar um ranking final.</h6>
       
   </div>
   <Link to="/Endpoints" className="EndpointButton">Endpoints</Link>

  </> 
   );
}
 
export default About;
