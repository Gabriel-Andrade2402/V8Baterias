import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/homeFooter.css';
import iconInstagram from '../../assets/img/utils/iconInstagram.png';
import iconFacebook from '../../assets/img/utils/iconFacebook.png';
import iconYoutube from '../../assets/img/utils/iconYoutube.png';
import $ from 'jquery';

const Footer = () => {
    return (
      <footer className='container-flex position-flex' id='footer' style={{overflowX:"hidden"}}> 
        <div className='bg-light mt-2 border-top-1C1C'>
            <div className='col-12 row py-2 px-4'>
                <a target="blank" href="https://www.facebook.com/bateriasv8" className='row col-sm-3 ml-3 mt-2 style-link-none'> 
                    <img className='col-2' src={iconFacebook}/>
                    <h6 className='col-10 text-1C1C'>Baterias v8</h6> 
                </a>
                <a target="blank" href="https://www.instagram.com/bateriasv8oficial/" className='row col-sm-3 mt-2 style-link-none'>
                    <img className='col-2' src={iconInstagram}/> 
                    <h6 className='col-10 text-1C1C'>Baterias v8 oficial</h6> 
                </a>
                <a target="blank" href="https://www.youtube.com/channel/UCrl3CX9m9N6rKCdlq18AiUg" className='row mt-2 col-sm-3 style-link-none'> 
                    <img className='col-2' src={iconYoutube}/>
                    <h6 className='col-10 text-1C1C'>Baterias v8</h6> 
                </a>
                <div className='col-sm-12 row'> 
                    <caption className='col-sm-12 text-secondary font-size-min'>By Gabriel (gabriel.andrade2402@gmail.com)</caption> 
                </div>
            </div>
        </div>
      </footer>
   );
}
export default Footer;