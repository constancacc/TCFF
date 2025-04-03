import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import tenis from '../img/aulas/tenis.JPG'
import padel from '../img/aulas/padel.JPG'

import precario_tenis from '../img/documentos/escolatenis_precario.pdf'
import precario_padel from '../img/documentos/Preçario padel.1.pdf'


function Aulas() {
    return (
      <div className="App">
         <NavBar/>
         <div className="grelha">
          <div className="row">
              <div className="gutter"></div>
              <div className="col-lg-7" style={{padding: "0"}}>
                  <h1 className="subtitulo section">Escola de Ténis</h1>

                  <p className="subtexto"> Somos uma instituição dedicada à promoção e ensino do ténis, e estamos
                  entusiasmados por partilhar a nossa paixão por este desporto consigo.</p>

                  <p className="subtexto"> Se procura um local onde pode desenvolver as suas habilidades,
                  manter-se em forma e fazer parte de uma comunidade de entusiastas do ténis, está no sítio certo!</p>

                  <p className="subtexto">Aceitamos desde os <strong>5 anos</strong> até <strong>jogadores séniores</strong>.</p>

                  <p className="subtexto">Para se inscrever precisamos de saber a sua <strong>idade</strong>, <strong>disponibilidade horária</strong> e se
                  tem <strong>experiência</strong> (as nossas aulas experimentais têm a duração de 30 minutos e são grátis). A inscrição na escola
                  requer uma jóia de inscrição de 20€ que contém a inscrição na federação portuguesa de ténis e a oferta 
                  de uma tshirt.</p>

              </div>
        

              <div className="col-lg-1 mobile_height" ></div>
              <div className="col-lg-4" style={{padding: "0"}}>
                <img src={tenis} className="aulas_tenis section" alt="tenis"/>

                <div className="botao-download botao_aulas">
                  <a className="white" href={precario_tenis} download>
                    Preçário de Ténis
                  </a>
                </div>

              </div>
              <div className="gutter"></div>
             </div>

             <div className="row" style={{marginTop: "20vh", marginBottom: "20vh"}}>
                <div className="gutter"></div>
                <div className="col-lg-4" style={{padding: "0"}}>
                  <img src={padel} className="aulas_tenis section" style={{marginTop: "0"}} alt="tenis"/>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-7" style={{padding: "0"}}>
                  <h1 className="subtitulo">Escola de Padel</h1>

                  <p className="subtexto"> O padel é muito mais do que apenas um desporto, é uma experiência 
                  social emocionante e desafiante.</p>

                  <p className="subtexto">Na nossa escola, não apenas aprendemos e aperfeiçoamos as técnicas do padel, mas 
                  também criamos laços, partilhamos risos e promovemos um ambiente amigável e acolhedor para todos os amantes 
                  deste desporto.</p>

                  <p className="subtexto">Aceitamos desde os <strong>5 anos</strong> até <strong>jogadores séniores</strong>.</p>

                  <p className="subtexto">Para se inscrever precisamos de saber o seu <strong>contacto</strong> e o seu <strong>e-mail</strong>.</p>

                  <div className="botao-download botao_aulas">
                    <a className="white" href={precario_padel} download>
                      Preçário de Padel
                    </a>
                  </div>

                </div>
                <div className="gutter"></div>
             </div>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Aulas;