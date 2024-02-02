import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import precario from '../img/documentos/PRECÁRIO.pdf';
import atualizacao from '../img/documentos/Atualização da Politica de Funcionamento do TCFF.pdf';

import atencao from '../img/servicos/atencao.svg';
import img1 from '../img/servicos/servicos1.png';
import mapa from '../img/servicos/mapa.png';

function Servicos() {
    return (
      <div className="App">
         <NavBar/>
         <div className="grelha">
          <div className="row altura">
            <div className="gutter"></div>
            <div className="col-lg-1"></div>
      
            <div className="col-lg-10 bluecontainer" style={{marginTop: "15vh"}}>
              <h1 className="subtitulo white"  style={{marginTop: "15vh"}}>Utilização dos Serviços</h1>
              <p className="subtexto white"  style={{ width: "40vw" }}>Todos os nossos serviços estão sujeitos à política de funcionamento do clube.</p>
              <a className="subtexto botao_politica" href={atualizacao} download>politica de funcionamento</a>
              <img className="atencao" src={atencao} alt="warning"></img>
            </div>
             
            <div className="col-lg-1"></div>
            <div className="gutter"></div>
          </div>
          <div className="row altura">
            <div className="gutter"></div>
            <div className="col-lg-6">
              <h1 className="subtitulo section">Campos</h1>

              <p className="subtexto">O TCFF disponibiliza <strong>4 campos de ténis</strong> em piso rápido e <strong>3 campos de padel</strong> panorâmico em vidro.</p>
              <p className="subtexto">Os campos 2 e 4 de ténis e o campo 1 de padel estão normalmente reservados para aulas.</p>
              <p className="subtexto"> Os nossos campos podem ser <strong>reservados</strong> por qualquer pessoa a partir da App <strong>TieSports</strong> ou
               pelo nosso <strong>WhatsApp</strong>, <strong>telemóvel</strong> ou <strong>e-mail</strong>.</p>
              <p className="subtexto">Para mais informações contactar a secretaria.</p>

            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5" style={{padding: "0"}}>
              <img className="section" src={img1} alt="servicos1" style={{width: "37.5vw"}} />

              <div className="botao-download botao_aulas">
                    <a className="white" href={precario} download>
                      Preçário de Aluger de Campos
                    </a>
              </div>

            </div>
            <div className="gutter"></div>
          </div>
          <div className="row">
            <div className="gutter"></div>
            <div className="col-lg-12" style={{padding: "0"}}>
              <img id="mapa" src={mapa} alt="mapa_campos"/>
            </div>
            <div className="gutter"></div>
          </div>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Servicos;