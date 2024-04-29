import '../css/style.css';
import brasao from '../img/index/logo.png';

import phone from '../img/footer/Phone.svg';
import mail from '../img/footer/Mail.svg';

import WhatsApp from '../img/footer/WhatsApp.svg';
import Instagram from '../img/footer/Instagram.svg';
import FB from '../img/footer/Social_icons_black.svg';
import Loc from '../img/footer/Geo_black.svg';

import atualizacao from '../img/documentos/Atualização da Politica de Funcionamento do TCFF.pdf'

function Footer(){

    return(
        <footer>
        <div className="grelha">
          <div className="row">
            <div className="gutter"></div>
  
            <div className="col-lg-2">
              <img style={{marginTop: "3vw",marginLeft: "3vw", width: "6rem"}} src={brasao} alt="brasao"/>
            </div>
  
            <div className="col-lg-2">
              <div className="contactos">

                <div className="redes-sociais">
                  <a style={{cursor: "default"}}>
                    <img src={phone} alt="phone"/>
                    <p>233 422 287 </p>
                  </a>
                </div>
  
                <div className="redes-sociais">
                  <a href="mailto:geral@tcff.com">
                    <img src={mail}  alt="mail"/>
                    <p>geral@tcff.pt</p>
                  </a>
                </div>
  
                <div className="redes-sociais">
                  <a href="https://wa.me/351914837633" target="_blank">
                    <img src={WhatsApp}  alt="wapp"/>
                    <p>+351 914 837 633</p>
                  </a>
                </div>
  
              </div>
            </div>
  
            <div className="col-lg-3" style={{padding: "0"}}>
              <div className="contactos">
  
                <div className="redes-sociais">
                  <a href="https://www.instagram.com/tennisclubdafigueiradafoz1917/" target="_blank">
                    <img src={Instagram}  alt="insta"/>
                    <p>tennisclubfigueiradafoz1917</p>
                  </a>
                </div>
  
                <div className="redes-sociais">
                  <a href="https://www.facebook.com/tennisclubdafigueiradafoz" target="_blank">
                    <img src={FB}  alt="fb"/>
                    <p>Tennis Club Figueira da Foz</p>
                  </a>
                </div>
  
                <div className="redes-sociais">
                  <a style={{cursor: "default"}}>
                    <img src={Loc}  alt="loc"/>
                    <p>Av. 25 de Abril, nº1, Figueira da Foz</p>
                  </a>
                </div>
  
              </div>
            </div>
  
            <div className="col-lg-3 footer-politica">
              <div className="botao-download">
                <a className="white" href={atualizacao} download>
                  Politica de funcionamento
                </a>
              </div>     
            </div>
  
            <div className="col-lg-2 footer-politica" >
              <iframe title="mapa" className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.719384386089!2d-8.867920824107902!3d40.
              14853407191924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd223796c0ce6811%3A0xf61db908961a1904!2sT%C3%A9n
              is%20Club!5e0!3m2!1spt-PT!2spt!4v1706198037171!5m2!1spt-PT!2spt" width="600" height="450" style={{border:"0"}} 
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  
            </div>
  
            <div className="gutter"></div>
          </div>
        </div>
      </footer>

    )
}

export default Footer;