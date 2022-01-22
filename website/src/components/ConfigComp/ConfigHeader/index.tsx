import $ from 'jquery';
import Logomarca from '../../../assets/img/BV8_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/ConfigHeader.css';

const ConfigHeader = () => {
    return (
      <header className='container-flex position-flex bg-dark'> 
        <div className=" row px-4">
            <div className="col-sm-4 mt-5 ml-5">
                <Link className="btn btn-light btn-lg col-12 col-sm-12 m-2" to="/">
                    Home
                </Link>
            </div>
            <div className="col-sm-4 m-3" >
                <Link className="col-12 d-flex justify-content-center" to="/">
                    <img src={Logomarca} className='col-sm-5' alt="V8 Baterias"/>
                </Link>
            </div>
            <div className="col-sm-3 mt-5 ml-5">
                <Link className="btn btn-warning btn-lg col-12 col-sm-12 m-2" to="/loja">
                    Loja
                </Link>
            </div>
        </div>
        <div className='col-12 linhaLaranja'></div>
      </header>
   );
}
export default ConfigHeader;