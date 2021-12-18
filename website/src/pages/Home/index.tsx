import Logomarca from 'assets/img/BV8_Logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <header> 
        <div className="container row">
            <div className="col-sm-4">
                <div className="col-sm-8 m-2">
                    <label className="col-12 text-uppercase text-nowrap font-weight-bold mt-2">Email</label>
                    <input type="text" name="email" id="email" className="col-12 ml-3"/>
                </div>
                <div className="col-sm-8 m-2">
                    <label className="col-12 text-uppercase text-nowrap font-weight-bold mt-2">Password</label>
                    <input type="password" name="senha" id="senha" className="col-12 ml-3"/>
                </div>
                <Link className="col-sm-3 m-2 btn btn-dark" to="/">
                    Login
                </Link>
                <Link className="col-sm-5 m-2 btn btn-light" to="/">
                    Cadastrar-se
                </Link>
            </div>
            <div className="col-sm-5 mt-3 justify-content-center align-items" >
                <Link className="col-12 ml-3 mr-3" to="/">
                <img src={Logomarca} alt="V8 Baterias" width='250' />
                </Link>
            </div>
            <div className="col-sm-3 mt-3">
                <Link className="btn btn-warning btn-lg col-12 m-2" to="/loja">
                    Loja
                </Link>
                <Link className="btn btn-dark btn-lg col-12 m-2" to="/loja">
                    Sobre
                </Link>
            </div>
        </div>
      </header>
   );
}
export default Home;