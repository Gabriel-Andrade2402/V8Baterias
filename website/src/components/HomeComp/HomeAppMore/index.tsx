import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/css/homeAppMore.css';
import iconMotoboy from '../../../assets/img/utils/entregador.png';
import celphoneHand from '../../../assets/img/articles/celularNaMao.png';
import textBaixeJa from '../../../assets/img/utils/baixeJa.png';

const HomeAppMore = () => {
    return (
      <article className='container-flex position-flex bg-orange' style={{overflowX:"hidden"}}> 
        <div className='row justify-content-center align-items-center'>
            <div className='col-12 col-sm-6 p-5 row'>
                <div className='col-12 row'>
                    <img src={iconMotoboy} className='col-5'/>
                    <h1 className='col-3 mt-5 text-ffa'>Delivery?</h1>
                </div>
                <div className='col-12 row mt-3 text-ffa'>
                Sim, nós fazemos entrega e instalação em casa, basta acessar nossa loja
                comprar um de nossos produtos e adicionar um endereço para receber em casa
                ou você pode enviar uma mensagem por whatsapp.
                </div>
            </div>
            <div className='col-12 col-sm-6 p-5 row bg-dark box-shadow-zoom-animate'>
                <img src={celphoneHand} className='col-12 col-sm-8  offset-sm-2'/>
            </div>
        </div>
      </article>
   );
}

export default HomeAppMore;