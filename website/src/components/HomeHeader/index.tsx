import $ from 'jquery';
import Logomarca from '../../assets/img/BV8_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../assets/css/homeHeader.css';

const HomeHeader = () => {
    return (
      <header className='container-flex position-flex bg-dark'> 
        <div className=" row">
            <div className="col-sm-4">
                <div className="col-sm-8 m-2">
                    <label className="col-12 text-lowercase text-nowrap font-weight-bold mt-2 textLaranja" id='email'>Email</label>
                    <input type="text" name="email" id="email" className="col-12 ml-3"/>
                </div>
                <div className="col-sm-8 m-2">
                    <label className="col-12 text-lowercase text-nowrap font-weight-bold mt-2 textLaranja">Password</label>
                    <input type="password" name="senha" id="senha" className="col-12 ml-3"/>
                </div>
                <Link className="col-sm-3 m-2 btn btn-dark" to="/">
                    Login
                </Link>
                <Link className="col-sm-5 m-2 btn btn-light" to="/">
                    Cadastrar-se
                </Link>
            </div>
            <div className="col-sm-4 m-3" >
                <Link className="col-12" to="/">
                <img src={Logomarca} alt="V8 Baterias"/>
                </Link>
            </div>
            <div className="col-sm-3 mt-5 ml-5">
                <Link className="btn btn-warning btn-lg col-12 m-2" to="/loja">
                    Loja
                </Link>
                <a className="btn btn-dark btn-lg col-12 m-2" href="#articleAbout">
                    Sobre
                </a>
            </div>
        </div>
        <div className='col-12 linhaLaranja'></div>
      </header>
   );
}
export default HomeHeader;