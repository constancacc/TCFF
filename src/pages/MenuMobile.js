
import NavBar from "../components/NavBar.js";/* componente */
import { Link } from "react-router-dom";/*links*/

import '../css/style.css'; /*css*/

function MenuMobile() {
  return (
    <div id="menucontainer">
      <NavBar />

    {/*Menu Mobile */}
    <div id="container_lista">
    
        <Link to={"/aulas"}>
          <div className="row_mobile">
              <h1 className="position" > Aulas </h1>
          </div>
        </Link>


        <Link to={"/servicos"}>
          <div className="row_mobile">
              <h1 className="position" > Serviços </h1>
          </div>
        </Link>

        <Link to={"/torneios"}>
          <div className="row_mobile">
              <h1 className="position"> Torneios </h1>
          </div>
        </Link>

      </div>
    </div>

  );
}

export default MenuMobile;
