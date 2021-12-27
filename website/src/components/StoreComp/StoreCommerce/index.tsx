import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/storeCommerce.css';
import imgBateriaMoura from '../../../assets/img/baterias/bateriaMoura.png';
import imgBateriaCral from '../../../assets/img/baterias/bateriaCral.png';
import imgBateriaHeliar from '../../../assets/img/baterias/bateriaHeliar.png';


const StoreCommerce = () => {
    return (
      <div className='container-flex position-flex py-2'> 
        <div className='row'>
            <aside className='col-3 col-sm-3 bg-light rounded-bottom px-sm-4'>
                <h5 className='col-12 col-sm-12 text-center mt-3'>
                    Filtrar
                </h5>
                <div className='col-12 col-sm-12'>
                    <h6 className='col-12 col-sm-12'>
                        Marca
                    </h6>
                    <div className='col-12 col-sm-12 px-2'>
                        <label className='col-8 col-sm-8'>Moura</label>
                        <input className='col-12 col-sm-4' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 px-2'>
                        <label className='col-8 col-sm-8'>Heliar</label>
                        <input className='col-12 col-sm-4' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 px-2'>
                        <label className='col-8 col-sm-8'>Cral</label>
                        <input className='col-12 col-sm-4' type="checkbox"/>
                    </div>
                </div>
                <div className='col-12 col-sm-12 mt-3'>
                    <h6 className='col-12 col-sm-12'>
                        Amperagem
                    </h6>
                    <div className='col-12 col-sm-12 row px-2'>
                        <input type="range" className='col-12 col-sm-7 offset-2 offset-sm-0'/>
                        <label className='col-8 col-sm-3'>&ge;valor</label>
                        <label className='col-2 col-sm-2'>Ah</label>
                    </div>
                </div>
                <div className='col-12 col-sm-12 mt-3'>
                    <h6 className='col-12 col-sm-12'>
                        Veiculo
                    </h6>
                    <div className='col-12 col-sm-12 row px-2'>
                        <label className='col-8 col-sm-8'>Carro</label>
                        <input className='col-12 col-sm-4' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 row px-2'>
                        <label className='col-8 col-sm-8'>Moto</label>
                        <input className='col-12 col-sm-4' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 row px-2'>
                        <label className='col-8 col-sm-8'>Caminhão</label>
                        <input className='col-12 col-sm-4' type="checkbox"/>
                    </div>
                </div>
                <div className='col-12 col-sm-12 mt-3'>
                    <h6 className='col-12 col-sm-12'>
                        Preço
                    </h6>
                    <div className='col-12 col-sm-12 row px-2'>
                        <input type="range" className='col-12 col-sm-7 offset-2 offset-sm-0'/>
                        <label className='col-2 col-sm-2'>&ge;R$</label>
                        <label className='col-8 col-sm-3'>valor</label>
                    </div>
                </div>
            </aside>
            <section className='col-9 col-sm-9'>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4'>
                        <img src={imgBateriaMoura} className='col-12 col-sm-12'/>
                    </div>
                    <div className='col-12 col-sm-4 mt-4'>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Marca:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Moura
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Amperagem:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                40 Ah
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Veiculos:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Carro
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Tempo estimativo de vida:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                2 anos
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6>
                                Descrição:
                            </h6>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur]
                            adipiscing elit, sed do 
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 mt-sm-5 mb-4 mt-3'>
                        <div className='col-12 col-sm-12'>
                            <h4>R$ XX,xx</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row'>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-4'>
                                    <input type="text" className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4'>
                        <img src={imgBateriaHeliar} className='col-12 col-sm-12'/>
                    </div>
                    <div className='col-12 col-sm-4 mt-4'>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Marca:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Heliar
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Amperagem:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                20 Ah
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Veiculos:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Moto
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Tempo estimativo de vida:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                5 anos
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6>
                                Descrição:
                            </h6>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur]
                            adipiscing elit, sed do 
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 mt-sm-5 mb-4 mt-3'>
                        <div className='col-12 col-sm-12'>
                            <h4>R$ XX,xx</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row'>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-4'>
                                    <input type="text" className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4'>
                        <img src={imgBateriaCral} className='col-12 col-sm-12'/>
                    </div>
                    <div className='col-12 col-sm-4 mt-4'>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Marca:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Cral
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Amperagem:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                40 Ah
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Veiculos:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Caminhão
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Tempo estimativo de vida:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                3 anos
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6>
                                Descrição:
                            </h6>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur]
                            adipiscing elit, sed do 
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 mt-sm-5 mb-4 mt-3'>
                        <div className='col-12 col-sm-12'>
                            <h4>R$ XX,xx</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row'>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-4'>
                                    <input type="text" className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4'>
                        <img src={imgBateriaCral} className='col-12 col-sm-12'/>
                    </div>
                    <div className='col-12 col-sm-4 mt-4'>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Marca:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Cral
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Amperagem:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                40 Ah
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Veiculos:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Caminhão
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Tempo estimativo de vida:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                3 anos
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6>
                                Descrição:
                            </h6>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur]
                            adipiscing elit, sed do 
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 mt-sm-5 mb-4 mt-3'>
                        <div className='col-12 col-sm-12'>
                            <h4>R$ XX,xx</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row'>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-4'>
                                    <input type="text" className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4'>
                        <img src={imgBateriaMoura} className='col-12 col-sm-12'/>
                    </div>
                    <div className='col-12 col-sm-4 mt-4'>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Marca:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Moura
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Amperagem:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                40 Ah
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Veiculos:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                Carro
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 row'>
                            <h6 className='col-6 col-sm-6'>
                                Tempo estimativo de vida:
                            </h6>
                            <div className='col-6 col-sm-6'>
                                2 anos
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6>
                                Descrição:
                            </h6>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur]
                            adipiscing elit, sed do 
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 mt-sm-5 mb-4 mt-3'>
                        <div className='col-12 col-sm-12'>
                            <h4 className='col-12 col-sm-12'>R$ XX,xx</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row'>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-4'>
                                    <input type="text" className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-1 col-sm-1'>
                                    <h4 className='col-12 col-sm-12'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
      </div>
   );
}
export default StoreCommerce;