import React,{useState} from "react";
import $ from 'jquery';
import imgBateriaMoura from '../../../../assets/img/baterias/bateriaMoura.png';
import imgBateriaCral from '../../../../assets/img/baterias/bateriaCral.png';
import imgBateriaHeliar from '../../../../assets/img/baterias/bateriaHeliar.png';
import iconPaymentBoleto from '../../../../assets/img/utils/iconBoleto.png';
import iconPaymentPix from '../../../../assets/img/utils/iconPix.png';
import iconPaymentCard from '../../../../assets/img/utils/iconPaymentTypes.png';

const ArticleCart = () =>{
    const compRetirarNaLoja = () =>{
        return(
            <>
            <div className="col-12 col-sm-12 p-3">
                <div className="col-12 col-sm-12">
                    <label className="label-title-sub-group">Selecione um endereço</label>
                </div>
                <div className="col-12 col-sm-12 p-3">
                    <div onClick={()=>{
                        $(".bloco-address-clicked").toggleClass('bloco-address-clicked')
                        $("#address1").toggleClass('bloco-address-clicked');
                    }} 
                    id="address1"
                    className="col-sm-12 col-12  font-size-24 py-2 bloco-address d-flex justify-content-center">
                        Avenida Canal *******
                    </div>
                    <div onClick={()=>{
                        $(".bloco-address-clicked").toggleClass('bloco-address-clicked')
                        $("#address2").toggleClass('bloco-address-clicked');
                    }} 
                    id="address2"
                    className="col-sm-12 col-12 mt-2 font-size-24 py-2 bloco-address d-flex justify-content-center">
                        Ilha da ***
                    </div>
                </div>
            </div>
            </>
        );
    }
    const creditPaymentLayout = () => {
        return (
        <>
            <div className="col-12 col-sm-12 p-2">
                <div className="col-12 col-sm-12">
                    <label className="label-title-sub-group">Selecione um cartão cadastrado</label>
                </div>
                <div className="col-12 col-sm-12 p-3">
                    <div 
                        onClick={()=>{
                        $(".bloco-card-clicked").toggleClass('bloco-card-clicked')
                        $("#card1").toggleClass('bloco-card-clicked');
                    }} 
                    id="card1"
                    className="col-sm-12 col-12  font-size-24 py-2 bloco-card d-flex justify-content-center">
                        4897 4564 **** ****
                    </div>
                    <div onClick={()=>{
                        $(".bloco-card-clicked").toggleClass('bloco-card-clicked')
                        $("#card2").toggleClass('bloco-card-clicked');
                    }} 
                    id="card2"
                    className="col-sm-12 col-12 mt-2 font-size-24 py-2 bloco-card d-flex justify-content-center">
                        1325 1324 **** ****
                    </div>
                </div>
            </div>
        </>);
    }

    const [sendForm,setSendForm] = useState(<></>);
    const [paymentForm,setPaymentForm] = useState(<></>);
    return (
        <>
            <div className="col-12 backgroun-3d3d col-sm-12 p-3">
                <label className="titleArticle">Carrinho</label>
            </div>
            <div className="col-12 col-sm-12 px-3">
                <div className="col-12 col-sm-12 border-bottom d-flex justify-content-center">
                    <div className="col-12 col-sm-12 p-sm-2 mb-2 row background-ffa">
                        <div className="col-12 col-sm-3 d-flex justify-content-center">
                            <img src={imgBateriaMoura} className='col-10 col-sm-12'/>
                        </div>
                        <div className="col-sm-9 col-12 p-sm-3">
                            <div className="col-12 col-sm-12 row mt-3">
                                <div className="col-12 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                        <label className="col-sm-4 col-6">Moura</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                        <label className="col-sm-4 col-6">Carro</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-4 col-8 subtitle-description">Amperagem:</label>
                                        <label className="col-sm-4 col-4">40 Ah</label>
                                    </div> 
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-9 col-8 subtitle-description">Tempo estimado de vida:</label>
                                        <label className="col-sm-3 col-4">2 anos</label>
                                    </div>
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-8 col-6 subtitle-description">Preço unidade:</label>
                                        <label className="col-sm-4 col-6" id='precoUnidadeRequest1'>R$ 120,00</label>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row mt-2">
                                <div className="col-12 col-sm-2 "> 
                                    <div className="col-1 col-sm-1">
                                        <label className="col-sm-8 col-6 subtitle-description">Quantidade:</label>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-10 row px-3 mb-1'>
                                    
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
                                    <div className='col-6 col-sm-3'>
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
                                <div className="col-12 col-sm-3 font-size-25 text-bold">Sub-total:</div>
                                <div className="col-12 col-sm-5 font-size-25 text-color-1C1C" id="valueRequest1">R$120.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 border-bottom d-flex justify-content-center">
                    <div className="col-12 col-sm-12 p-sm-2 mb-2 row background-ffa">
                        <div className="col-12 col-sm-3 d-flex justify-content-center">
                            <img src={imgBateriaHeliar} className='col-10 col-sm-12'/>
                        </div>
                        <div className="col-sm-9 col-12 p-sm-3">
                            <div className="col-12 col-sm-12 row mt-3">
                                <div className="col-12 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                        <label className="col-sm-4 col-6">Heliar</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                        <label className="col-sm-4 col-6">Carro</label>
                                    </div> 
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-4 col-8 subtitle-description">Amperagem:</label>
                                        <label className="col-sm-4 col-4">44 Ah</label>
                                    </div> 
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-9 col-8 subtitle-description">Tempo estimado de vida:</label>
                                        <label className="col-sm-3 col-4">2 anos</label>
                                    </div>
                                    <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                        <label className="col-sm-8 col-6 subtitle-description">Preço unidade:</label>
                                        <label className="col-sm-4 col-6" id='precoUnidadeRequest2'>R$ 130,00</label>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row mt-2">
                                <div className="col-12 col-sm-2 "> 
                                    <div className="col-1 col-sm-1">
                                        <label className="col-sm-8 col-6 subtitle-description">Quantidade:</label>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-10 row px-3 mb-1'>
                                    
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
                                    <div className='col-6 col-sm-3'>
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
                                <div className="col-12 col-sm-3 font-size-25 text-bold">Sub-total:</div>
                                <div className="col-12 col-sm-5 font-size-25 text-color-1C1C" id="valueRequest2">R$130.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-12">
                    <label className="subtitleArticle">Entrega / Buscar</label>
                </div>
                <div className="col-12 col-sm-12 row d-flex justify-content-center background-ffb">
                    <div className="col-12 col-sm-3 p-2 d-flex px-4 align-items-center">
                      <input type='checkbox' id='checkBoxReceiveHome' onChange={(check)=>{
                          if($('#checkBoxReceiveHome').is(':checked')){
                            setSendForm(compRetirarNaLoja);
                            $("#checkBoxStoreRedemption").prop('checked', false);
                          }else{
                            setSendForm(<></>);
                          }
                      }} className="checkBox-25"/>
                      <label className="mx-3 font-size-18">Receber em casa</label>
                    </div>
                    <div className="col-12 col-sm-3 p-2 d-flex px-4 align-items-center">
                      <input type='checkbox' className="checkBox-25" id='checkBoxStoreRedemption' onChange={(check)=>{
                          if($('#checkBoxStoreRedemption').is(':checked')){
                            setSendForm(<></>);
                            $("#checkBoxReceiveHome").prop('checked', false);
                          }
                      }}/>
                      <label className="mx-3 font-size-18">Retirar na loja</label>
                    </div>
                </div>
                {sendForm}
                <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12 row p-4 d-flex justify-content-center">
                        <div
                            id="paymentCard" 
                            className="col-sm-3 col-12 m-1 bloco-payment-form d-flex justify-content-center aligm-items-center">
                            <img src={iconPaymentCard} className="col-10 col-sm-10"
                            onClick={()=>{
                                $(".bloco-payment-form-clicked").toggleClass('bloco-payment-form-clicked');
                                $("#paymentCard").toggleClass('bloco-payment-form-clicked');
                                setPaymentForm(creditPaymentLayout);
                            }}/>
                        </div>
                        <div 
                            id="paymentPix"
                            className="col-sm-3 col-12 m-1 bloco-payment-form d-flex justify-content-center aligm-items-center">
                            <img src={iconPaymentPix} className="col-10 col-sm-10"
                            onClick={()=>{
                                $(".bloco-payment-form-clicked").toggleClass('bloco-payment-form-clicked');
                                $("#paymentPix").toggleClass('bloco-payment-form-clicked');
                                setPaymentForm(<></>);
                            }}/>
                        </div>
                        <div 
                            id="paymentBoleto"
                            className="col-sm-3 col-12 m-1 bloco-payment-form d-flex justify-content-center aligm-items-center">
                            <img src={iconPaymentBoleto} className="col-10 col-sm-10"
                            onClick={()=>{
                                $(".bloco-payment-form-clicked").toggleClass('bloco-payment-form-clicked');
                                $("#paymentBoleto").toggleClass('bloco-payment-form-clicked');
                                setPaymentForm(<></>);
                            }}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12">
                      {paymentForm}
                    </div>
                </div>
                
            </div>
            <div className="col-12 col-sm-12 m-0">
                <div className="col-12 col-sm-12 p-2 d-flex justify-content-center">
                    <label className="titleFinish">Finalizar compra</label>
                </div>
                <div className="col-12 col-sm-12 row">
                    <div className="col-12 col-sm-8 p-4">
                        <div className="col-12 col-sm-12 d-flex justify-content-center">
                            <label className="subTitleFinish">Informações do pedido:</label>
                        </div>
                        <div className="col-12 col-sm-12 p-3">
                            <div className="col-12 col-sm-12 row border-bottom">
                                <div className="col-12 col-sm-9 sale-title">
                                    Bateria moura 40 Ah
                                </div>
                                <div className="col-4 col-sm-3 sale-title">
                                    Qt: 5
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row border-bottom">
                                <div className="col-12 col-sm-9 sale-title">
                                    Bateria Cral 44 Ah
                                </div>
                                <div className="col-4 col-sm-3 sale-title">
                                    Qt: 1
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row border-bottom">
                                <div className="col-12 col-sm-12 sale-title">
                                    Frete
                                </div>
                            </div>
                            <div>
                                <div className="col-9 col-sm-9">
                                    <div className="col-12 col-sm-9">
                                        <label className="bold-80 font-size-20">Endereço/Loja para retirada:</label>
                                    </div>
                                    <div className="col-12 col-sm-12 px-2">
                                        <div className="col-12 col-sm-9 sale-title">
                                            Avenida canal de tutoia
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mx-3 mx-sm-0 col-sm-4 rounded bg-shadow-gray p-4">
                        <div className="col-12 col-sm-12 d-flex justify-content-center">
                            <label className="subTitleFinish">Valores:</label>
                        </div>
                        <div className="col-12 col-sm-12 p-3">
                            <div className="col-12 col-sm-12 row border-bottom">
                                <div className="col-12 col-sm-12 d-flex justify-content-center sale-title">
                                    R$ 00.00
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row border-bottom">
                                <div className="col-12 col-sm-12 d-flex justify-content-center sale-title">
                                    R$ 00.00
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row border-bottom">
                                <div className="col-12 col-sm-12 d-flex justify-content-center sale-title">
                                    R$ 00.00
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 row mt-4 bg-cinza">
                                <div className="col-12 col-sm-12">
                                    <label className="font-size-24">Total:</label>
                                    <label className="font-size-24 margin-left-8">R$ 00.00</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 margin-top-15 d-flex justify-content-center">
                <div className="col-12 col-sm-5 btn-success p-1 rounded d-flex justify-content-center btn-confirm">
                    Confirmar Pedido
                </div>
            </div>
        </>
    );
   
}


export default ArticleCart;