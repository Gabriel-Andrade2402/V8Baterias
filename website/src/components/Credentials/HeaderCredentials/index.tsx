import React from "react";
import { Link } from "react-router-dom";
import iconHome from '../../../assets/img/utils/iconHome.png';
import iconStore from '../../../assets/img/utils/iconStoreWhite.png';
import iconPerson from '../../../assets/img/utils/login.png';
import logomarca from '../../../assets/img/BV8_Logo.png';

const HeaderCredentials = () => {
    return (
        <>
        <header>
            <div className='col-12 col-sm-12 mx-0 bg-dark px-5 py-2'>
                <Link className="col-12 mx-4" to="/">
                    <img src={logomarca} alt="V8 Baterias" className="col-4 col-sm-1 offset-sm-5 offset-3"/>
                </Link>
            </div>
            <div className="col-sm-12 col-12 p-2 row bg-dark m-0">
                <div className="col-12 col-sm-6 px-5 mt-2">
                    <Link className="col-12 col-sm-11 btn-light btn-lg row justify-content-center textDecorationNone" to="/">
                        <div className="col-1 col-sm-1">
                            <img src={iconHome} alt="home" style={{height:30,width:30}} className="col-12 col-sm-12"/>
                        </div>
                        <div className="col-3 col-sm-3 marginLeft10 textSize23">
                            Home
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 px-5 mt-2">
                    <Link className="col-12 col-sm-11 btn-warning btn-lg row justify-content-center textDecorationNone" to="/loja">
                        <div className="col-1 col-sm-1">
                            <img src={iconStore} alt="home" style={{height:35,width:35}} className="col-12 col-sm-12"/>
                        </div>
                        <div className="col-3 col-sm-3 marginLeft10 textSize23 colorTextWhite">
                            Loja
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-sm-12 col-12 p-2 row bg-light m-0 px-5 row align-items-center">
                <img src={iconPerson} alt="conect" style={{height:45,width:70}} className="col-1 col-sm-1"/>
                <h4 className='col-11 col-sm-11'>
                    Conectar-se
                </h4>
            </div>
        </header>
        </>
    )
}
export default HeaderCredentials;