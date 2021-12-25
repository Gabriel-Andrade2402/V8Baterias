import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/css/homeComents.css';
import $ from 'jquery';
import comentario1 from '../../../assets/img/coments/comentario1.png';
import comentario2 from '../../../assets/img/coments/comentario2.png';
import comentario3 from '../../../assets/img/coments/comentario3.png';
import comentario4 from '../../../assets/img/coments/comentario4.png';
import comentario5 from '../../../assets/img/coments/comentario5.png';
import comentario6 from '../../../assets/img/coments/comentario6.png';

const HomeComents = () => {
    return (
      <article className='container-flex position-flex'> 
        <div className='col-sm-12 px-3'>
           <img src={comentario1} className='col-4 offset-1'/>
           <img src={comentario2} className='col-4 offset-2'/>
           <img src={comentario3} className='col-6 '/>
           <img src={comentario4} className='col-4'/>
           <img src={comentario5} className='col-4 offset-1'/>
           <img src={comentario6} className='col-6 offset-1'/>
        </div>
      </article>
   );
}
export default HomeComents;