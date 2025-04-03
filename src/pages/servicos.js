import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import precario from '../img/documentos/PRECÁRIO.pdf';
import atualizacao from '../img/documentos/Atualização da Politica de Funcionamento do TCFF.pdf';
import ginasio from '../img/documentos/POLÍTICA DE FUNCIONAMENTO DO GINÁSIO.pdf';
import socio from '../img/documentos/quotas_de_socio.pdf';
import encordoacoes from '../img/documentos/encordoacoes.png';

import atencao from '../img/servicos/atencao.svg';
import img1 from '../img/servicos/servicos1.png';
import mapa from '../img/servicos/mapa.png';
import balneario from '../img/servicos/balneario.jpeg';
import ginasio1 from '../img/servicos/ginasio1.png'; 
import ginasio2 from '../img/servicos/ginasio2.png'; 
import ginasio3 from '../img/servicos/ginasio3.png';
import socios from '../img/servicos/socios.png';


function Servicos() {
    return (
      <div className="App">
         <NavBar/>
         <div className="grelha">
          {/*Utilização de Serviços*/}
          <div className="row altura">
            <div className="gutter"></div>
            <div className="col-lg-1"></div>
      
            <div className="col-lg-10 bluecontainer" >
              <h1 className="subtitulo white"  >Utilização dos Serviços</h1>
              <img className="atencao" src={atencao} alt="warning"></img>
              <p className="subtexto white desktop" >Todos os nossos serviços estão sujeitos à política de funcionamento do clube.</p>
              <a className="subtexto botao_politica" href={atualizacao} download>politica de funcionamento</a>
              
            </div>
             
            <div className="col-lg-1"></div>
            <div className="gutter"></div>
          </div>
          {/*Campos*/}
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
              <img className="section imagens_servicos" src={img1} alt="servicos1"/>

              <div className="botao-download botao_aulas">
                    <a className="white" href={precario} download>
                      Preçário de Aluger de Campos
                    </a>
              </div>

            </div>
            <div className="gutter"></div>
          </div>
          {/*Legenda Campos*/}
          <div className="row">
            <div className="gutter"></div>
            <div className="col-lg-12" style={{padding: "0"}}>
              <img id="mapa" src={mapa} alt="mapa_campos" style={{borderRadius: "2.5rem"}}/>
            </div>
            <div className="gutter"></div>
          </div>
          {/*Balneários*/}
          <div className="row" style={{marginTop: "15vh", marginBottom: "15vh"}}>
            <div className="gutter"></div>
            <div className="col-lg-6">
              <h1 className="subtitulo section">Balneários</h1>

              <p className="subtexto">Os Balneários estão situados ao lado da secretaria e <strong>todos os nossos atletas</strong> podem usufruir deles.</p>
              <p className="subtexto">Equipados com <strong>chuveiros</strong>, <strong>cabides</strong> e <strong>casas de banho</strong>.</p>
             
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5" style={{padding: "0", width: "100%"}}>
              <img className="section imagens_servicos" src={balneario} alt="servicos1" />

            </div>
            <div className="gutter"></div>
          </div>
          {/*Ginásio*/}
          <div className="row">
            <div className="gutter"></div>
            
            <div className="col-lg-6" style={{padding:0}}>
              <h1 className="subtitulo section">Ginásio</h1>
              <p className="subtexto">A última <strong>novidade</strong> do nosso clube!</p>
              <p className="subtexto">Este ginásio, além do seu espaço amplo, possui uma <strong>passadeira, elíptica e bicicleta</strong>.
              Temos, também, uma escolha variada de <strong>pesos</strong> e instrumentos para alcançar a sua condição física de sonho.</p>
              <p className="subtexto">Para usufruir torne-se <strong>sócio</strong> ou inscreva-se numa das nossas <strong>escolas</strong>!</p>
              <img className="imagens_servicos" id="ginasio3"src={ginasio3} alt="ginasio" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5" style={{padding:0}}>
              <img className="section imagens_servicos" src={ginasio1} alt="ginasio" />
              <div className="botao-download botao_aulas">
                    <a className="white" href={ginasio} download>
                      Guia de Utilização
                    </a>
              </div>
              <img className="section imagens_servicos" src={ginasio2} alt="ginasio"/>
              
            </div>
            
            <div className="gutter"></div>
          </div>
          {/*Sócios*/}
          <div className="row" style={{marginBottom: "15vh", marginTop: "15vh"}}>
            <div className="gutter"></div>
            <div className="col-lg-6">
              <h1 className="subtitulo section">Sócios</h1>

              <p className="subtexto">Ao se tornar sócio tem não só <strong>descontos</strong> em reservas de campos e aulas de ténis e padel,
              como <strong>acesso à sala social</strong>, a <strong>utilização do nosso ginásio</strong> utilização imitada do nosso ginásio e, também a possibilidade de ser convidado
              para eventos exclusivos.</p>
              <p className="subtexto">Para realizar a sua ficha de sócio tem que se dirigir à <strong>secretaria.</strong></p>
             
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5" style={{padding: "0"}}>
            <img className="section imagens_servicos" src={socios} alt="socios" />
            <div className="botao-download botao_aulas">
                    <a className="white" href={socio} download>
                      Quotas de sócio
                    </a>
              </div>
            </div>
            <div className="gutter"></div>
          </div>
          {/*Secretaria*/}
          <div className="row" style={{marginBottom: "15vh"}}>
            <div className="gutter"></div>
            <div className="col-lg-7" style={{padding: "0"}}>
              <h1 className="subtitulo section">Secretaria</h1>

              <p className="subtexto">Segunda a Sexta: 10h - 12h | 15h - 20h</p>
              <p className="subtexto" style={{marginTop: "0vh"}}>Sábado: 9h30 - 13h</p>
              <p className="subtexto"> Na secretaria encontrará todo o tipo de informação que precisa de saber sobre o clube. </p>
              <p className="subtexto"> É aqui que conseguirá realizar todo o tipo de pagamentos e inscrições que pretender, assim como poderá tratar de encordoar a sua raquete! </p>
              <div className="botao-download botao_aulas">
                  <a className="white" href={encordoacoes} download>
                      Encordoações
                  </a>
              </div>
            </div>
            
            <div className="col-lg-5" style={{padding: "0"}}>
            </div>
            <div className="gutter"></div>
          </div>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Servicos;