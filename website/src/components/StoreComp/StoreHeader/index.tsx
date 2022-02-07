import $ from 'jquery';
import Logomarca from '../../../assets/img/BV8_Logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/storeHeader.css';
import iconCarrinho from '../../../assets/img/utils/iconCarrinho.png';
import iconLogin from '../../../assets/img/utils/login.png';
import React from 'react';

type props = {
    exists:boolean
}

const storeHeader = ({exists}:props) => {
    return (
      <header className='container-flex position-flex bg-warning'> 
        <div className="row px-4 d-flex justify-content-center">
            <div className="col-sm-4 col-12 m-3" >
                <Link className="col-12 col-sm-12" to="/">
                    <img src={Logomarca} alt="V8 Baterias" className="col-8 col-sm-4"/>
                </Link>
            </div>
            <div className="col-sm-3 align-self-center mx-sm-4">
                <Link className="col-sm-12 btn btn-light col-12 p-2" to="/">
                    Home
                </Link>
            </div>
            {renderProfile({exists})}
        </div>
        <div className='col-12 linhaLaranja'></div>
      </header>
   );
}
const renderProfile = ({exists}:props) => {
    if(exists){
        return (
            <div className="col-sm-4 col-12 row align-self-center d-flex align-items-center" id="loginAndCart">
                <div className="col-sm-6 col-6 m-2 p-2">
                    <Link className="col-sm-12 btn btn-dark col-12 m-2 p-2" to="/config">
                            Configurações
                    </Link>
                </div>
                <Link className="col-sm-3 col-3 offset-sm-0 mx-4" to="/config">
                    <img src={iconCarrinho} alt="Carrinho" className="col-12 col-sm-10"/>
                </Link>
            </div> 
        )
    }else{
        return (
            <div className="col-sm-2 row align-self-center">
                <Link className="col-sm-12 btn btn-dark col-12 p-2" to="/login">
                    Logar
                </Link>
            </div>
        )
    }
}

export default storeHeader;