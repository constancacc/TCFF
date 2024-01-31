import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ListaTorneios from '../components/ListaTorneios.js';

function Torneios() {
    return (
      <div className="App">
         <NavBar/>
         <div className="grelha">
          <div className="row" style={{marginBottom: "10vh"}}>
              <div className="gutter"></div>
              <div className="col-lg-1" style={{padding: "0"}}>
                  <h1 className="subtitulo section">Torneios</h1>
              </div>
                
              <div className="col-lg-10" style={{position: "relative", padding:"0"}}>
                  <ListaTorneios />
              </div>

              <div className="col-lg-1"></div>
              <div className="gutter"></div>
             </div>
         </div>
         <Footer/>
      </div>
    );
  }
  
  export default Torneios;