import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/homeFooter.css';
import iconInstagram from '../../assets/img/utils/iconInstagram.png';
import iconFacebook from '../../assets/img/utils/iconFacebook.png';
import iconYoutube from '../../assets/img/utils/iconYoutube.png';
import imgRodape from '../../assets/img/rodape.png';
import $ from 'jquery';

const HomeFooter = () => {
    return (
      <footer className='container-flex position-flex'>
        <div className='col-12 col-sm-12'>
            <img src={imgRodape}/>
        </div> 
        <div className=' bg-dark'>
            <div className='col-12 row py-2 px-4'>
                <a target="blank" href="https://www.facebook.com/bateriasv8" className='col-sm-4 ml-3 style-link-none'> 
                    <img className='col-2' src={iconFacebook}/>
                    <h6 className='col-8 text-ffa'>Baterias v8</h6> 
                </a>
                <a target="blank" href="https://www.instagram.com/bateriasv8oficial/" className='col-sm-4 style-link-none'>
                    <img className='col-2' src={iconInstagram}/> 
                    <h6 className='text-ffa'>Baterias v8 oficial</h6> 
                </a>
                <a target="blank" href="https://www.youtube.com/channel/UCrl3CX9m9N6rKCdlq18AiUg" className='col-sm-4 style-link-none'> 
                    <img className='col-2' src={iconYoutube}/>
                    <h6 className='text-ffa'>Baterias v8</h6> 
                </a>
                <div className='col-sm-12 row'> 
                    <caption className='col-sm-12 text-secondary font-size-min'>By Gabriel (gabriel.andrade2402@gmail.com)</caption> 
                </div>
            </div>
        </div>
      </footer>
   );
}
export default HomeFooter;