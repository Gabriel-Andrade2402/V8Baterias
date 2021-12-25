import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/css/homeLocation.css';
import lojaItaqua from '../../../assets/img/location/lojaItaqua.jpg';
import lojaItaim from '../../../assets/img/location/lojaItaim.jpg';
import lojaGuarulhos from '../../../assets/img/location/lojaGuarulhos.jpg';
import locationIcon from '../../../assets/img/utils/esbocoLocalizacao.png';
import { Link } from 'react-router-dom';

const HomeLocation = () => {
    return (
      <article className='container-flex position-flex bg-dark py-3 mt-5'> 
        <div className='row col-12 justify-content-center align-items-center'>
          <a title='Ir para o maps' target='blank' href='https://www.google.com/maps?ll=-23.490713,-46.365206&z=17&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6150738730667813034' className='col-sm-3 col-6 row m-2 box-shadow-zoom-animate style-link-none' id='blocoLocationItaqua'>     
              <img src={locationIcon} className='col-11 max-lenght-100'/>
              <h3>
                Itaquaquecetuba
              </h3>
              <h5 className='text-ffa'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </h5>
          </a>
          <a title='Ir para o maps' target='blank' href='https://www.google.com/maps?ll=-23.451219,-46.535361&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6585765478092794966' className='col-sm-3 col-6 row m-2 box-shadow-zoom-animate style-link-none' id='blocoLocationItaim'>     
              <img src={locationIcon} className='col-11 max-lenght-100'/>
              <h3>
                Guarulhos
              </h3>
              <h5 className='text-ffa'>
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              </h5>
          </a>
          <a title='Ir para o maps' target='blank' href='https://www.google.com/maps?ll=-23.494851,-46.409289&z=17&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6997639485909189440' className='col-sm-3 col-6 row m-2 box-shadow-zoom-animate style-link-none' id='blocoLocationGuarulhos'>     
              <img src={locationIcon} className='col-11 max-lenght-100'/>
              <h3>
                Itaim paulista
              </h3>
              <h5 className='text-ffa'>
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              </h5>
          </a>
        </div>
      </article>
   );
}
$(document).ready(function(){

});

export default HomeLocation;