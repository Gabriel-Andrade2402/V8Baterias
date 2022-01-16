import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/storeCommerce.css';
import imgBateriaMoura from '../../../assets/img/baterias/bateriaMoura.png';
import imgBateriaCral from '../../../assets/img/baterias/bateriaCral.png';
import imgBateriaHeliar from '../../../assets/img/baterias/bateriaHeliar.png';
import { useState } from 'react';


const StoreCommerce = () => {
    const [amperagemFilter,setAmperagemFilter] = useState('0');
    const [valueFilter,setValueFilter] = useState('0');

    return (
      <div className='container-flex position-flex py-2'> 
        <div className='row'>
            <aside className='col-3 col-sm-3 bg-light rounded-bottom px-sm-4 border-right'>
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
                        <input type="range" id='rangeAmperagem' min={25} max={120} 
                        onChange={(value)=>{var total = $('#rangeAmperagem').val();setAmperagemFilter(''+total)}} 
                        className='col-12 col-sm-7 offset-2 offset-sm-0'/>
                        <label className='col-3 col-sm-1'>&ge;</label>
                        <label className='col-5 col-sm-2'>{amperagemFilter}</label>
                        <label className='col-2 col-sm-1'>Ah</label>
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
                        <input type="range" id='rangeValueFilter' min={150} max={500} 
                        onChange={(value)=>{var total = $('#rangeValueFilter').val();setValueFilter(''+total)}} 
                        className='col-12 col-sm-7 offset-2 offset-sm-0'/>
                        <label className='col-2 col-sm-2'>&ge;R$</label>
                        <label className='col-8 col-sm-3'>{valueFilter}</label>
                    </div>
                </div>
            </aside>


            <section className='col-9 col-sm-9'>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4 d-flex justify-content-center'>
                        <img src={imgBateriaMoura} className='col-12 col-sm-9'/>
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
                            <h4 id='valueBateria1'>R$ 140.50</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row px-3 mb-1'>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria1');
                                    if($(input).val()!=1){
                                        var quantity = parseInt($(input).val()+'')-1;
                                        $(input).val(quantity);
                                        var btAdicionar = $('#btAddicionar1');
                                        var textValueBateria = $('#valueBateria1');
                                        var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                        btAdicionar.text('Adicionar R$ '+newValue);
                                    }   
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-3'>
                                    <input type="text" id='inputBateria1'
                                    readOnly={true}
                                    value={1} className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria1');
                                    var quantity = parseInt($(input).val()+'')+1;
                                    $(input).val(quantity);
                                    var btAdicionar = $('#btAddicionar1');
                                    var textValueBateria = $('#valueBateria1');
                                    var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                    btAdicionar.text('Adicionar R$ '+newValue);
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success' id='btAddicionar1'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4 d-flex justify-content-center'>
                        <img src={imgBateriaHeliar} className='col-12 col-sm-9'/>
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
                            <h4 id='valueBateria2'>R$ 200.00</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row px-3 mb-1'>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria2');
                                    if($(input).val()!=1){
                                        var quantity = parseInt($(input).val()+'')-1;
                                        $(input).val(quantity);
                                        var btAdicionar = $('#btAddicionar2');
                                        var textValueBateria = $('#valueBateria2');
                                        var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                        btAdicionar.text('Adicionar R$ '+newValue);
                                    }   
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-3'>
                                    <input type="text" id='inputBateria2'
                                    readOnly={true}
                                    value={1} className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria2');
                                    var quantity = parseInt($(input).val()+'')+1;
                                    $(input).val(quantity);
                                    var btAdicionar = $('#btAddicionar2');
                                    var textValueBateria = $('#valueBateria2');
                                    var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                    btAdicionar.text('Adicionar R$ '+newValue);
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success' id='btAddicionar2'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4 d-flex justify-content-center'>
                        <img src={imgBateriaCral} className='col-12 col-sm-9'/>
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
                            <h4 id='valueBateria3'>R$ 210.00</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row px-3 mb-1'>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria3');
                                    if($(input).val()!=1){
                                        var quantity = parseInt($(input).val()+'')-1;
                                        $(input).val(quantity);
                                        var btAdicionar = $('#btAddicionar3');
                                        var textValueBateria = $('#valueBateria3');
                                        var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                        btAdicionar.text('Adicionar R$ '+newValue);
                                    }   
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-3'>
                                    <input type="text" id='inputBateria3'
                                    readOnly={true}
                                    value={1} className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria3');
                                    var quantity = parseInt($(input).val()+'')+1;
                                    $(input).val(quantity);
                                    var btAdicionar = $('#btAddicionar3');
                                    var textValueBateria = $('#valueBateria3');
                                    var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                    btAdicionar.text('Adicionar R$ '+newValue);
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success' id='btAddicionar3'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4 d-flex justify-content-center'>
                        <img src={imgBateriaCral} className='col-12 col-sm-9'/>
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
                            <h4 id='valueBateria4'>R$ 100,00</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row px-3 mb-1'>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria4');
                                    if($(input).val()!=1){
                                        var quantity = parseInt($(input).val()+'')-1;
                                        $(input).val(quantity);
                                        var btAdicionar = $('#btAddicionar4');
                                        var textValueBateria = $('#valueBateria4');
                                        var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                        btAdicionar.text('Adicionar R$ '+newValue);
                                    }   
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-3'>
                                    <input type="text" id='inputBateria4'
                                    readOnly={true}
                                    value={1} className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria4');
                                    var quantity = parseInt($(input).val()+'')+1;
                                    $(input).val(quantity);
                                    var btAdicionar = $('#btAddicionar4');
                                    var textValueBateria = $('#valueBateria4');
                                    var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                    btAdicionar.text('Adicionar R$ '+newValue);
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success' id='btAddicionar4'>
                                Adicionar
                            </div>
                        </div>
                    </div>
                </article>
                <div className='col-12 col-sm-12'>
                    <div className='linhaDark rounded-30'></div>
                </div>
                <article className='col-12 col-sm-12 row rounded'>
                    <div className='col-12 col-sm-4 d-flex justify-content-center'>
                        <img src={imgBateriaMoura} className='col-12 col-sm-9'/>
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
                            <h4 className='col-12 col-sm-12' id='valueBateria5'>R$ 300,00</h4>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <h6 className='col-6 col-sm-6'>
                                Quantidade:
                            </h6>
                            <div className='col-12 col-sm-12 row px-3 mb-1'>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria5');
                                    if($(input).val()!=1){
                                        var quantity = parseInt($(input).val()+'')-1;
                                        $(input).val(quantity);
                                        var btAdicionar = $('#btAddicionar5');
                                        var textValueBateria = $('#valueBateria5');
                                        var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                        btAdicionar.text('Adicionar R$ '+newValue);
                                    }   
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        -
                                    </h4>
                                </div>
                                <div className='col-4 col-sm-3'>
                                    <input type="text" id='inputBateria5'
                                    readOnly={true}
                                    value={1} className='col-12 col-sm-12 px-2'/>
                                </div>
                                <div className='col-2 col-sm-2 bg-quantity-product'
                                onClick={()=>{
                                    var input = $('#inputBateria5');
                                    var quantity = parseInt($(input).val()+'')+1;
                                    $(input).val(quantity);
                                    var btAdicionar = $('#btAddicionar5');
                                    var textValueBateria = $('#valueBateria5');
                                    var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                    btAdicionar.text('Adicionar R$ '+newValue);
                                }}>
                                    <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                        +
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12'>
                            <div className='col-12 col-sm-12 btn btn-success' id='btAddicionar5'>
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