import React from "react";
import $ from 'jquery';
import imgBateriaMoura from '../../../../assets/img/baterias/bateriaMoura.png';
import imgBateriaCral from '../../../../assets/img/baterias/bateriaCral.png';
import imgBateriaHeliar from '../../../../assets/img/baterias/bateriaHeliar.png';

const ArticleCart = () =>{
    return (
        <>
            <div className="col-12 col-sm-12 p-3">
                <label className="titleArticle">Carrinho</label>
            </div>
            <div className="col-12 col-sm-12">
                <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12 p-2 mb-2 row background-ffa">
                        <div className="col-3 col-sm-3">
                            <img src={imgBateriaMoura} className='col-12 col-sm-12'/>
                        </div>
                        <div className="col-sm-9 col-9 p-3">
                            <div className="col-12 col-sm-12 row mt-3">
                                <div className="col-6 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                        <label className="col-sm-4 col-6">Moura</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                        <label className="col-sm-4 col-6">Carro</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-4 col-6 subtitle-description">Amperagem:</label>
                                        <label className="col-sm-4 col-6">40 Ah</label>
                                    </div> 
                                </div>
                                <div className="col-6 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-9 col-6 subtitle-description">Tempo estimado de vida:</label>
                                        <label className="col-sm-3 col-6">2 anos</label>
                                    </div>
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-8 col-6 subtitle-description">Preço unidade:</label>
                                        <label className="col-sm-4 col-6" id='precoUnidadeRequest1'>R$ 120,00</label>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row mt-2">
                                <div className="col-2 col-sm-2 "> 
                                    <div className="col-1 col-sm-1">
                                        <label className="col-sm-8 col-6 subtitle-description">Quantidade:</label>
                                    </div>
                                </div>
                                <div className='col-10 col-sm-10 row px-3 mb-1'>
                                    
                                    <div className='col-2 col-sm-2 bg-quantity-product'
                                    onClick={()=>{
                                        var input = $('#quantidadeRequest1');
                                        if($(input).val()!=1){
                                            var quantity = parseInt($(input).val()+'')-1;
                                            $(input).val(quantity);
                                            var subTotal = $('#valueRequest1');
                                            var textValueBateria = $('#precoUnidadeRequest1');
                                            var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                            subTotal.text('R$'+newValue);
                                        }   
                                    }}>
                                        <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                            -
                                        </h4>
                                    </div>
                                    <div className='col-4 col-sm-3'>
                                        <input type="text" id='quantidadeRequest1'
                                        readOnly={true}
                                        value={1} className='col-12 col-sm-12 px-2'/>
                                    </div>
                                    <div className='col-2 col-sm-2 bg-quantity-product'
                                    onClick={()=>{
                                        var input = $('#quantidadeRequest1');
                                        var quantity = parseInt($(input).val()+'')+1;
                                        $(input).val(quantity);
                                        var subTotal = $('#valueRequest1');
                                        var textValueBateria = $('#precoUnidadeRequest1');
                                        var newValue = parseFloat($(textValueBateria).text().substring(2,$(textValueBateria).text().length))*quantity;
                                        subTotal.text('R$'+newValue);
                                    }}>
                                        <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                            +
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row d-flex align-items-center">
                                <div className="col-4 col-sm-3 font-size-25 text-bold">Sub-total:</div>
                                <div className="col-5 col-sm-5 font-size-25 text-color-1C1C" id="valueRequest1">R$120.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12 p-2 mb-2 row background-ffa">
                        <div className="col-3 col-sm-3">
                            <img src={imgBateriaHeliar} className='col-12 col-sm-12'/>
                        </div>
                        <div className="col-sm-9 col-9 p-3">
                            <div className="col-12 col-sm-12 row mt-3">
                                <div className="col-6 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                        <label className="col-sm-4 col-6">Heliar</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                        <label className="col-sm-4 col-6">Carro</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-4 col-6 subtitle-description">Amperagem:</label>
                                        <label className="col-sm-4 col-6">44 Ah</label>
                                    </div> 
                                </div>
                                <div className="col-6 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-9 col-6 subtitle-description">Tempo estimado de vida:</label>
                                        <label className="col-sm-3 col-6">2 anos</label>
                                    </div>
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-8 col-6 subtitle-description">Preço unidade:</label>
                                        <label className="col-sm-4 col-6" id='precoUnidadeRequest2'>R$ 130,00</label>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row mt-2">
                                <div className="col-2 col-sm-2 "> 
                                    <div className="col-1 col-sm-1">
                                        <label className="col-sm-8 col-6 subtitle-description">Quantidade:</label>
                                    </div>
                                </div>
                                <div className='col-10 col-sm-10 row px-3 mb-1'>
                                    
                                    <div className='col-2 col-sm-2 bg-quantity-product'
                                    onClick={()=>{
                                        var input = $('#quantidadeRequest2');
                                        if($(input).val()!=1){
                                            var quantity = parseInt($(input).val()+'')-1;
                                            $(input).val(quantity);
                                            var subTotal = $('#valueRequest2');
                                            var textValueBateria = $('#precoUnidadeRequest2');
                                            var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                                            subTotal.text('R$'+newValue);
                                        }   
                                    }}>
                                        <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                            -
                                        </h4>
                                    </div>
                                    <div className='col-4 col-sm-3'>
                                        <input type="text" id='quantidadeRequest2'
                                        readOnly={true}
                                        value={1} className='col-12 col-sm-12 px-2'/>
                                    </div>
                                    <div className='col-2 col-sm-2 bg-quantity-product'
                                    onClick={()=>{
                                        var input = $('#quantidadeRequest2');
                                        var quantity = parseInt($(input).val()+'')+1;
                                        $(input).val(quantity);
                                        var subTotal = $('#valueRequest2');
                                        var textValueBateria = $('#precoUnidadeRequest2');
                                        var newValue = parseFloat($(textValueBateria).text().substring(2,$(textValueBateria).text().length))*quantity;
                                        subTotal.text('R$'+newValue);
                                    }}>
                                        <h4 className='col-12 col-sm-12 d-flex justify-content-center'>
                                            +
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row d-flex align-items-center">
                                <div className="col-4 col-sm-3 font-size-25 text-bold">Sub-total:</div>
                                <div className="col-5 col-sm-5 font-size-25 text-color-1C1C" id="valueRequest2">R$130.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-12">
                    <label className="subtitleArticle">Entrega / Buscar</label>
                </div>
                <div className="col-12 col-sm-12 row d-flex justify-content-center background-ffb">
                    <div className="col-6 col-sm-3 p-2 d-flex align-items-center">
                      <input type='checkbox' className="checkBox-25"/>
                      <label className="mx-3 font-size-18">Receber em casa</label>
                    </div>
                    <div className="col-6 col-sm-3 p-2 d-flex align-items-center">
                      <input type='checkbox' className="checkBox-25"/>
                      <label className="mx-3 font-size-18">Retirar na loja</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticleCart;