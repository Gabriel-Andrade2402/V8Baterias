import $ from 'jquery';
import Logomarca from '../../../assets/img/BV8_Logo.png';
import ConfigIcon from '../../../assets/img/utils/menuLine.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/homeHeader.css';

const renderProfile = () => {
    const userExist = (sessionStorage.getItem("userJson")!=null || sessionStorage.getItem("userJson")!=undefined)?true:false;
    if(!userExist){
        return (
            <div className="col-sm-4 mt-5 ml-5">
                <Link className="col-sm-12 btn btn-dark col-12 m-2 p-2" to="/login">
                    Login
                </Link>
                <Link className="col-sm-12 btn btn-light col-12 m-2 p-2" to="/login">
                    Cadastrar-se
                </Link>
            </div>
        )
    }else{
        return (
            <div className="col-sm-4 ml-5 align-self-center">
                <div className='col-12 col-sm-12'>
                    <Link className="col-sm-12 btn btn-light col-12 m-2 p-2" to="/config">
                        Configurações
                    </Link>
                </div>
            </div>
        )
    }
}
const HomeHeader = () => {
    return (
      <header className='container-flex position-flex bg-dark'> 
        <div className=" row px-4">
            {renderProfile()}
            <div className="col-sm-4 m-3" >
                <Link className="col-12 d-flex justify-content-center" to="/">
                    <img src={Logomarca} alt="V8 Baterias"/>
                </Link>
            </div>
            <div className="col-sm-3 mt-5 ml-5">
                <Link className="btn btn-warning btn-lg col-12 col-sm-12 m-2" to="/loja">
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