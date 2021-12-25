import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/storeNavbar.css';

const StoreNavBar = () => {
    return (
      <nav className='container-flex position-flex bg-light py-2'> 
        <div className='col-6 col-sm-6 px-4'>
          <input type="text" className='inputPesquisa col-8 col-sm-8 rounded input-sem-borda' placeholder='Faça uma busca aqui...'/>
          <div className='col-2 col-sm-2 btn bg-shadow offset-sm-1'>
            <h6 className=''>Buscar</h6>
          </div>
        </div>
      </nav>
   );
}
export default StoreNavBar;