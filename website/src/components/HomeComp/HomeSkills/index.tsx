import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/css/homeSkills.css';
import iconChecked from '../../../assets/img/utils/iconCheck.png';
import $ from 'jquery';

const HomeSkills = () => {
    return (
      <article className='container-flex position-flex'> 
        <div className='row col-12 col-sm-12 px-5 mt-5'>
            <div className='col-12 col-sm-6'>
                <div className='col-12'>
                    <div className='bg-warning col-12 text-center arredonded-40 p-2 mb-4'>
                        <h3>Serviços</h3>
                    </div>
                    <div className='col-12 col-sm-12 row'>
                        <h4 className='col-8 col-sm-8'>Alinhamento</h4>
                        <img src={iconChecked} className='col-2 col-sm-2'/>
                    </div>
                    <div className='col-12 col-sm-12 row'>
                        <h4 className='col-8 col-sm-8'>Balanceamento</h4>
                        <img src={iconChecked} className='col-2 col-sm-2'/>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='bg-warning col-12 text-center arredonded-40 p-2 mb-4'>
                        <h3>Auto-elétrica</h3>
                    </div>
                    <div className='col-12 col-sm-12 row'>
                        <h4 className='col-8 col-sm-8'>Sistema de iluminação</h4>
                        <img src={iconChecked} className='col-2 col-sm-2'/>
                    </div>
                    <div className='col-12 col-sm-12 row'>
                        <h4 className='col-8 col-sm-8'>Alternador de bateria</h4>
                        <img src={iconChecked} className='col-2 col-sm-2'/>
                    </div>
                    <div className='col-12 col-sm-12 row'>
                        <h4 className='col-8 col-sm-8'>Motor de arranque</h4>
                        <img src={iconChecked} className='col-2 col-sm-2'/>
                    </div>
                    <div className='col-12 col-sm-12 row'>
                        <h4 className='col-8 col-sm-8'>Troca de bateria</h4>
                        <img src={iconChecked} className='col-2 col-sm-2'/>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-6'>
                <div className='col-12 col-sm-12'>
                    <div className='bg-warning col-12 text-center arredonded-40 p-2 mb-4'>
                        <h3 className='col-12 col-sm-12 '>Baterias</h3>
                    </div>
                    <div className='col-12 col-sm-12'>
                        <div className='col-12 col-sm-12'>
                            <h4 className='col-12 col-sm-12 text-center arredonded-40 bg-light'>Carro</h4>
                            <ul  className='col-12 col-sm-12 offset-2'>
                                <li><h6>Moura</h6></li>
                                <li><h6>Cral</h6></li>
                                <li><h6>Heliar</h6></li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h4 className='col-12 col-sm-12 text-center arredonded-40 bg-light'>Moto</h4>
                            <ul  className='col-12 col-sm-12 offset-2'>
                                <li><h6>Moura</h6></li>
                                <li><h6>Cral</h6></li>
                                <li><h6>Heliar</h6></li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h4 className='col-12 col-sm-12 text-center arredonded-40 bg-light'>Caminhão</h4>
                            <ul  className='col-12 col-sm-12 offset-2'>
                                <li><h6>Moura</h6></li>
                                <li><h6>Cral</h6></li>
                                <li><h6>Heliar</h6></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
   );
}
export default HomeSkills;