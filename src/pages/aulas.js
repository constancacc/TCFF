import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';


function Aulas() {
    return (
      <div className="App">
         <NavBar/>
         <div className="grelha">
          <div className="row altura">
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
        

              <div className="col-lg-1"></div>
              <div className="col-lg-4">

              </div>
              <div className="gutter"></div>
             </div>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Aulas;