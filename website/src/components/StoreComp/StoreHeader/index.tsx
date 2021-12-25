import $ from 'jquery';
import Logomarca from '../../../assets/img/BV8_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/storeHeader.css';
import iconCarrinho from '../../../assets/img/utils/iconCarrinho.png';
import iconLogin from '../../../assets/img/utils/login.png';

const storeHeader = () => {
    return (
      <header className='container-flex position-flex bg-warning'> 
        <div className=" row px-4">
            <div className="col-sm-4 col-12 m-3" >
                <Link className="col-12 col-sm-12" to="/">
                    <img src={Logomarca} alt="V8 Baterias" className="col-8 col-sm-5"/>
                </Link>
            </div>
            <div className="col-sm-2 mt-4">
                <Link className="col-sm-12 btn btn-dark col-12 p-2" to="/">
                    Logar
                </Link>
            </div>
            <div className="col-sm-3 mt-4">
                <Link className="col-sm-12 btn btn-dark col-12 p-2" to="/">
                    Home
                </Link>
            </div>
            <div className="col-sm-2 col-12 mt-3 row" id="loginAndCart">
                <Link className="col-sm-6 col-3 offset-sm-0 offset-3" to="/">
                    <img src={iconLogin} alt="Logar" className="col-12 col-sm-12"/>
                </Link>
                <Link className="col-sm-6 col-3 offset-sm-0" to="/">
                    <img src={iconCarrinho} alt="Carrinho" className="col-12 col-sm-12"/>
                </Link>
            </div>
        </div>
        <div className='col-12 linhaLaranja'></div>
      </header>
   );
}
$(document).ready(function(){
    $("#iconLogin").hide();
});
export default storeHeader;