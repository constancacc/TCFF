import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Torneio from '../components/Torneio.js';
import Staff from '../components/Staff.js';
import Direcao from '../components/Direcao.js';
import Patrocinadores from '../components/Patrocinadores.js';

import inicio from '../img/index/inicio.png';
import brasao from '../img/index/logo.png';
import raquetes from '../img/index/img1.JPG';

function Index() {
    return (
      <div className="App">
        <NavBar />

        <main>
            {/*IMAGEM INICIAL */}
        <img src={inicio} style={{marginLeft: "-1vw"}} className="imgindex" alt="TCFF"/>
            <div className="grelha">

            {/*frase introdutória*/}
            <div className="row altura">
                <div className="gutter">
                
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                <div className="caixa">
                <h1 className="titulo">vamos jogar?</h1>
                <p className="texto"> se és apaixonado por ténis ou padel, aqui é o lugar certo para ti! </p>
                </div>
                </div>
                <div className="gutter"></div>
                </div>

               {/* Contexto*/}
                <div className="row altura">
                <div className="gutter"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-3 centrar">

                {/* brasão ténis */}
                <img src={brasao} className="brasao" alt="brasao"/>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-7" style={{padding: "0"}}>
                <div className="caixa_texto"> 

                    <h1 className="subtitulo"> Sobre nós </h1>

                    <p className="subtexto"> O Tennis Club Figueira da Foz é um clube centenário localizado na Figueira da Foz.
                    O clube disponibiliza 4 campos de ténis em piso rápido e 3 campos de padel panorâmico em vidro.</p>
                    
                    <p className="subtexto"> O clube disponibiliza aluguer de campos e aulas de ténis e padel com técnicos certificados
                    para todos quantos queiram dar os primeiros passos nestas modalidades.</p>
                </div>
                </div>
                <div className="gutter"></div>
                </div>

                {/* Sócios */}
                <div className="row altura">
                <div className="gutter"></div>
                <div className="col-lg-1"></div>

                <div className="col-lg-10 bluecontainer" style={{marginTop: "15vh"}}>
                    <h1 className="subtitulo white">Vantagens de te tornares Sócio</h1>
                    <ul>
                    <li className="subtexto white">Acesso ao nosso novo ginásio!</li>
                    <li className="subtexto white">Descontos na reserva de campos e em aulas de ténis e padel.</li>
                    <li className="subtexto white">Acesso à sala social a partir de dados biométricos.</li>
                    <li className="subtexto white">Acesso aos balneários.</li>
                    </ul>

                    <img src={raquetes} id="img1" alt="raquetes"/>
                </div>
                <div className="col-lg-1"></div>
                <div className="gutter"></div>
                </div>

                {/*Torneio Ativo*/}
                <div className="row altura">
                <div className="gutter"></div>

                <div className="col-lg-1" style={{padding: "0"}}>
                    <h1 className="subtitulo section">Torneio Ativo</h1>
                </div>
               
                <div className="col-lg-10" style={{position: "relative", padding:"0"}}>
                    <Torneio />
                </div>
                <div className="col-lg-1"></div>
                <div className="gutter"></div>
                </div>

                {/*Staff*/}
                <div className="row altura">
                <div className="gutter"></div>

                <div className="col-lg-12" style={{padding:"0"}}>
                    <h1 className="subtitulo section">Staff</h1>
                        <Staff/>
                </div>

                <div className="gutter"></div>
                </div>

                {/*Direção*/}
                <div className="row altura">
                <div className="gutter"></div>

                <div className="col-lg-12" style={{padding:"0"}}>
                    <h1 className="subtitulo section">Direção</h1>
                    <Direcao/>
                </div> 

                <div className="gutter"></div>
                </div>

                {/*Patrocinadores*/}
                <div className="row altura">
                <div className="gutter"></div>
                <div className="col-lg-12" style={{padding:"0"}}>
                    <h1 className="subtitulo section">Patrocinadores</h1>
                    <Patrocinadores/>
                </div>
                <div className="gutter"></div>
                </div>

            </div>

        </main>
        <Footer />
      </div>
    );
  }
  
  export default Index;