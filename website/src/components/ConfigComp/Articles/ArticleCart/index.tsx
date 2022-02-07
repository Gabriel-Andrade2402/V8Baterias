import react,{ useState,useEffect } from 'react';
import $ from 'jquery';
import imgBateriaMoura from '../../../../assets/img/baterias/bateriaMoura.png';
import imgBateriaCral from '../../../../assets/img/baterias/bateriaCral.png';
import imgBateriaHeliar from '../../../../assets/img/baterias/bateriaHeliar.png';
import iconPaymentBoleto from '../../../../assets/img/utils/iconBoleto.png';
import iconPaymentPix from '../../../../assets/img/utils/iconPix.png';
import iconPaymentCard from '../../../../assets/img/utils/iconPaymentTypes.png';
import noProductCart from '../../../../assets/img/noProductCart.png';
import axios from "axios";
import { BASE_URL } from "../../../../utils/requests";
import { parse } from 'path';

const ArticleCart = () =>{
    var requestBody = {
        product_id: {
            "strCodeProduct": ""
        },
        address_id: {
            strRoad: "",
            numResidence: 0,
            strCep: "",
            strReferencePoint: "",
            strObservation: ""
        },
        dtRequest: "2021-12-12",
        strCodeRequest: "",
        bolPaymentAproved: true,
        strSituation: "",
        dtCanceled: null,
        strReasonCancel: null,
        client_id: {
            strName: "",
            strCpf: "",
            strTelephone: "",
            strEmail: ""
        }
    }

    var token = "";
    var bodyFormData = new FormData();
    bodyFormData.append("grant_type","password");
    bodyFormData.append("username","cliente");
    bodyFormData.append("password","123456");
    useEffect(() => {
        authCart();
      }, []);
    const compRetirarNaLoja = () =>{
        var userJson = JSON.parse(sessionStorage.getItem("userJson")+"");
        var listAddress = userJson.listAddress;
        var constructDiv = "<div class=\"col-12 col-sm-12 p-3\" id='blockListAddress'>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<label class=\"label-title-sub-group\">Selecione um endereço</label>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12 p-3\">";
        listAddress.forEach((item:any,index:number)=>{
            constructDiv+="<div id=\"address"+index+"\" class=\"unidadeDeEndereco col-sm-12 col-12 m-1  font-size-24 py-2 bloco-address d-flex justify-content-center\">"+
            item.strRoad+"</div>"
        });
        return(constructDiv);
    }
    const layoutNoProductCart = () => {
        return(<>
            <div className='col-12 col-sm-12 col-lg-12'>
                <div className='col-12 col-sm-12 col-lg-12 d-flex justify-content-center'>
                    <img src={noProductCart} className='col-8 col-sm-8'/>
                </div>
            </div>
        </>);
    }
    const creditPaymentLayout = () => {
        var cardJson = JSON.parse(localStorage.getItem("cardJson")+"");
        var constructDiv = "<div class=\"col-12 col-sm-12 p-2\">"+
        "<div class=\"col-12 col-sm-12\">"+
            "<label class=\"label-title-sub-group\">Selecione um cartão cadastrado</label>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12 p-3\">";
        cardJson.forEach(function(item:any,index:number){
            constructDiv+="<div "+ 
        " id=\"card\""+index+
        " class=\"col-sm-12 unidadeCardCredit col-12 m-1 font-size-24 py-2 bloco-card d-flex justify-content-center\">"+
            item.numberCard+
        "</div>";
        });
        constructDiv+="</div>";
        return (constructDiv);
    }
    function authCart(){
        axios({
            method: "post",
            url: BASE_URL+"/oauth/token",
            data: bodyFormData,
            auth: {
                username:"client",
                password:"123"
            },
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then(function (response) {
            token = response.data.token_type + " " + response.data.access_token;
            initializeCart();
            })
            .catch(function (response) {
            console.log(response);
            });
    }
    function initializeCart(){
        var cartJson = JSON.parse(sessionStorage.getItem("cartJson")+"");
        if(cartJson==null || cartJson==undefined){
            setCartLayout(layoutNoProductCart());        
        }else{
            var listCodeProduct = [""];
            cartJson.forEach((item:any, index:number)=>{
                if(index==0){
                    listCodeProduct[0]=item.productCode;
                }else{
                    listCodeProduct.push(item.productCode);
                }
            });
            axios({
                method: "post",
                url: BASE_URL+"/product/findListProduct",
                data:listCodeProduct,
                headers: {
                    "Authorization": token,
                },
            })
            .then(function (response) {
                sessionStorage.setItem("productsForApi",JSON.stringify(response.data));
                setCartLayout(controllersCart());
                response.data.forEach((item:any,index:number)=>{
                    var descript =item.strInformations+"";
                    var amperagem = descript.split("-")[1].split("=")[1];
                    var veiculo = descript.split("-")[2].split("=")[1];
                    var tempoEstimativo = descript.split("-")[3].split("=")[1];
                    $("#blockFinishRequest").before(createBlockProduct(index,item.strImageBase,item.strCodeProduct
                        ,item.numPrice,item.strNameProduct,amperagem,veiculo,tempoEstimativo,cartJson[index].quantity));
                    var totalProduct = parseInt(fullPriceRequest+"");
                    totalProduct = totalProduct+parseInt(item.numPrice*cartJson[index].quantity+"");
                    fullPriceRequest = totalProduct;
                    $("#totalRequest").text("R$ "+totalProduct);
                    $("#quantidadeRequest"+index).val(cartJson[index].quantity);
                    $("#btnRemoveQuantity"+index).click(()=>{
                        var input = $('#quantidadeRequest'+index);
                        if($(input).val()!=1){
                            var quantity = parseInt($(input).val()+'')-1;
                            $(input).val(quantity);
                            var subTotal = $('#valueRequest'+index);
                            var textValueBateria = $('#precoUnidadeRequest'+index);
                            var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                            subTotal.text('R$'+newValue);
                            $("#subTotalProduct"+index).text("R$"+newValue);
                            $("#quantityProduct"+index).text("Qt:"+quantity);
                            recalcTotal();
                        }
                    });
                    $("#btnAddQuantity"+index).click(()=>{
                        var input = $('#quantidadeRequest'+index);
                        var quantity = parseInt($(input).val()+'')+1;
                        $(input).val(quantity);
                        var subTotal = $('#valueRequest'+index);
                        var textValueBateria = $('#precoUnidadeRequest'+index);
                        var newValue = parseFloat($(textValueBateria).text().substring(2,$(textValueBateria).text().length))*quantity;
                        subTotal.text('R$'+newValue);
                        $("#subTotalProduct"+index).text("R$"+newValue);
                        $("#quantityProduct"+index).text("Qt:"+quantity);
                        recalcTotal();
                    });
                    $("#blockProductsInfo").append("<div class=\"col-12 col-sm-12 row border-bottom\">"+
                        "<div class=\"col-12 col-sm-9 sale-title\">"+
                            item.strNameProduct+" "+amperagem +
                        "</div>"+
                        "<div class=\"col-4 col-sm-3 sale-title\" id='quantityProduct"+index+"'>"+
                            "Qt:"+ cartJson[index].quantity +
                        "</div>"+
                    "</div>");
                    $("#blockPricePerProduct").append("<div class=\"col-12 col-sm-12 row border-bottom\">"+
                        "<div class=\"col-12 col-sm-12 d-flex justify-content-center sale-title\" id='subTotalProduct"+index+"'>"+
                            "R$"+ item.numPrice +
                        "</div>"+
                    "</div>");
                });
                
            })
            .catch(function (response) {
            console.log(response);
            });
        }
    }
    function createBlockProduct(index:number,imgBase:String,codeProduct:String,valueProduct:number
        ,bateriaName:String,amperagem:String,veiculos:String,tempoEstimativo:String,quantity:number){
        return "<div class=\"col-12 col-sm-12 border-bottom d-flex justify-content-center\">"+
        "<div class=\"col-12 col-sm-12 p-sm-2 mb-2 row background-ffa\">"+
            "<input type='hidden' id='codeProduct"+index+"' value='"+codeProduct+"'/>"+
            "<div class=\"col-8 col-sm-3 d-flex justify-content-center\">"+
            "<img src='"+imgBase+"' class='col-10 col-sm-12'/>"+
                "</div>"+
            "<div class=\"col-sm-9 col-12 p-sm-3\">"+
            "<div class=\"col-12 col-sm-12 row mt-3\">"+
                "<div class=\"col-12 col-sm-6\">"+
                    "<div class=\"col-12 col-sm-12 row d-flex align-items-center\"> "+
                        "<label class=\"col-sm-3 col-6 subtitle-description\">Marca:</label>"+
                            "<label class=\"col-sm-4 col-6\">"+
                            bateriaName+
                            "</label>"+
                            "</div> "+
                        "<div class=\"col-12 col-sm-12 row d-flex align-items-center\"> "+
                        "<label class=\"col-sm-3 col-6 subtitle-description\">Veiculo:</label>"+
                            "<label class=\"col-sm-4 col-6\">"+
                            veiculos+
                            "</label>"+
                            "</div> "+
                        "<div class=\"col-12 col-sm-12 row d-flex align-items-center\"> "+
                        "<label class=\"col-sm-4 col-8 subtitle-description\">Amperagem:</label>"+
                            " <label class=\"col-sm-4 col-4\">"+
                            amperagem+
                            "</label>"+
                            "</div> "+
                        "</div>"+
                    "<div class=\"col-12 col-sm-6\">"+
                    "<div class=\"col-12 col-sm-12 row d-flex align-items-center\"> "+
                        "<label class=\"col-sm-9 col-8 subtitle-description\">Tempo estimado de vida:</label>"+
                            "<label class=\"col-sm-3 col-4\">"+
                            tempoEstimativo+
                            "</label>"+
                            "</div>"+
                        "<div class=\"col-12 col-sm-12 row d-flex align-items-center\"> "+
                        "<label class=\"col-sm-8 col-6 subtitle-description\">Preço unidade:</label>"+
                            "<label class=\"col-sm-4 col-6\" id='precoUnidadeRequest"+index+"'>R$ "+
                            valueProduct+
                            "</label>"+
                            "</div> "+
                        " </div>"+
                    "</div>"+
                "<div class=\"col-12 col-sm-12 row mt-2\">"+
                "<div class=\"col-12 col-sm-2 \"> "+
                    "<div class=\"col-1 col-sm-1\">"+
                        "<label class=\"col-sm-8 col-6 subtitle-description\">Quantidade:</label>"+
                            "</div>"+
                        "</div>"+
                    "<div class='col-12 col-sm-10 row px-3 mb-1'>"+
                    "<div class='col-2 col-sm-2 bg-quantity-product' id='btnRemoveQuantity"+index+"'>"+
                        "<h4 class='col-12 col-sm-12 d-flex justify-content-center'>"+
                               " -"+
                        "</h4>"+
                        "</div>"+
                        " <div class='col-6 col-sm-3'>"+
                        "<input type=\"text\" id='quantidadeRequest"+index+"'"+
                            "readOnly='true'"+
                            "class='col-12 col-sm-12 px-2'/>"+
                        "</div>"+
                        "<div class='col-2 col-sm-2 bg-quantity-product' id='btnAddQuantity"+index+"'>"+
                        " <h4 class='col-12 col-sm-12 d-flex justify-content-center'>"+
                               " +"+
                            "</h4>"+
                        "</div>"+
                        "</div>"+
                    "</div>"+
                "<div class=\"col-12 col-sm-12 row d-flex align-items-center\">"+
                    "<div class=\"col-12 col-sm-3 font-size-25 text-bold\">Sub-total:</div>"+
                    " <div class=\"col-12 col-sm-5 font-size-25 text-color-1C1C\" id=\"valueRequest"+index+"\">R$"+(valueProduct*quantity)+"</div>"+
                    "</div>"+
            "</div>"+
        "</div>"+
    "</div>"
    }
    const [cartLayout,setCartLayout]=useState(<></>);
    const [sendForm,setSendForm] = useState(<></>);
    const [paymentForm,setPaymentForm] = useState(<></>);
    var fullPriceRequest=0;
    function recalcTotal(){
        var total=0;
        $("#blockPricePerProduct").children().each((index,item)=>{
            var price = "";
            price = $(item).children().text()+"";
            total += parseInt(price.split("$")[1]);
        });
        $("#totalRequest").text("R$ "+total);
    }
    function oauth2PaymentIntegration(){
        axios({
            method: "post",
            url: "https://sandbox.gerencianet.com.br/v1/authorize",
            data:{
                grant_type: "client_credentials"
            },
            auth: {
                username:"Client_Id_2849bbf1bb5cbb69ee2e0aeeaf454c5e9ed41075",
                password:"Client_Id_2849bbf1bb5cbb69ee2e0aeeaf454c5e9ed41075"
            },
            headers: {
                "Authorization":"Basic Q2...",
                "Content-Type": "application/json"
            },
        })
            .then(function (response) {
            //token = response.data.token_type + " " + response.data.access_token;
            console.log(response.data);
            
            })
            .catch(function (response) {
            console.log(response);
            });
    }
    function controllersCart(){
        return (
            <>
            <div className="col-12 col-sm-12 px-3" id='blockFinishRequest'>
                <div className="col-sm-12 col-12">
                    <label className="subtitleArticle">Entrega / Buscar</label>
                </div>
                <div className="col-12 col-sm-12 row d-flex justify-content-center background-ffb">
                    <div className="col-12 col-sm-4 p-2 d-flex px-4 align-items-center">
                      <input type='checkbox' id='checkBoxReceiveHome' onChange={(check)=>{
                          if($('#checkBoxReceiveHome').is(':checked')){
                            $("#addressSelected").text("");
                            $("#checkBoxReceiveHome").parent().parent().after(compRetirarNaLoja());
                            $(".unidadeDeEndereco").each((index:any,item:any)=>{
                                $(item).click(()=>{
                                    $(".bloco-address-clicked").toggleClass("bloco-address-clicked");
                                    $(item).toggleClass("bloco-address-clicked");
                                    $("#addressSelected").text($(item).text());
                                })  
                            })
                            $("#checkBoxStoreRedemption").prop('checked', false);
                          }else{
                            $("#blockListAddress").remove();
                          }
                      }} className="checkBox-25"/>
                      <label className="mx-3 font-size-18">Receber em casa</label>
                    </div>
                    <div className="col-12 col-sm-3 p-2 d-flex px-4 align-items-center">
                      <input type='checkbox' className="checkBox-25" id='checkBoxStoreRedemption' onChange={(check)=>{
                          if($('#checkBoxStoreRedemption').is(':checked')){
                            $("#blockListAddress").remove();
                            $("#checkBoxReceiveHome").prop('checked', false);
                            $("#addressSelected").text("Retirar em loja.");
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
                                $("#listCardRegistered").append(creditPaymentLayout());
                                $(".unidadeCardCredit").each((index:any,item:any)=>{
                                    $(item).click(()=>{
                                        $(".bloco-card-clicked").toggleClass("bloco-card-clicked");
                                        $(item).toggleClass("bloco-card-clicked");
                                    });
                                });
                            }}/>
                        </div>
                        <div 
                            id="paymentPix"
                            className="col-sm-3 col-12 m-1 bloco-payment-form d-flex justify-content-center aligm-items-center">
                            <img src={iconPaymentPix} className="col-10 col-sm-10"
                            onClick={()=>{
                                $(".bloco-payment-form-clicked").toggleClass('bloco-payment-form-clicked');
                                $("#paymentPix").toggleClass('bloco-payment-form-clicked');
                                $("#listCardRegistered").children().remove();
                            }}/>
                        </div>
                        <div 
                            id="paymentBoleto"
                            className="col-sm-3 col-12 m-1 bloco-payment-form d-flex justify-content-center aligm-items-center">
                            <img src={iconPaymentBoleto} className="col-10 col-sm-10"
                            onClick={()=>{
                                $(".bloco-payment-form-clicked").toggleClass('bloco-payment-form-clicked');
                                $("#paymentBoleto").toggleClass('bloco-payment-form-clicked');
                                $("#listCardRegistered").children().remove();
                            }}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12" id='listCardRegistered'>
                      
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
                            <div id='blockProductsInfo'>

                            </div>
                            <div>
                                <div className="col-9 col-sm-9">
                                    <div className="col-12 col-sm-9">
                                        <label className="bold-80 font-size-20">Endereço/Loja para retirada:</label>
                                    </div>
                                    <div className="col-12 col-sm-12 px-2">
                                        <div className="col-12 col-sm-9 sale-title" id='addressSelected'>
                                            
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
                            <div className='col-12 col-sm-12' id='blockPricePerProduct'>
                                
                            </div>
                            <div className="col-12 col-sm-12 row mt-4 bg-cinza">
                                <div className="col-12 col-sm-12">
                                    <label className="font-size-24">Total:</label>
                                    <label className="font-size-24 margin-left-8" id='totalRequest'></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 margin-top-15 d-flex justify-content-center">
                <div className="col-12 col-sm-5 btn-success p-1 rounded d-flex justify-content-center btn-confirm" onClick={()=>{
                    if(validityRequest()){
                        var products = JSON.parse(sessionStorage.getItem("productsForApi")+"");
                        var totalValue = 0;
                        products.forEach((item:any,index:any)=>{
                            totalValue+=item.numPrice;
                        });
                        console.log(totalValue);
                        oauth2PaymentIntegration();
                    }
                }}>
                    Confirmar Pedido
                </div>
            </div>
            </>
        )
    }
    function validityRequest(){
        if(!$('#checkBoxReceiveHome').is(':checked') && !$('#checkBoxStoreRedemption').is(':checked')){
            alert("Selecione uma forma de receber o produto");
            return false;
        }else if($('#checkBoxReceiveHome').is(':checked')){
            if($(".bloco-address-clicked").length==0){
                alert("Selecione um endereço para receber o pedido.");
                return false;
            }
        }
        if($(".bloco-payment-form-clicked").length==0){
            alert("Selecione uma forma de pagamento.");
            return false;
        }else{
            if($(".bloco-payment-form-clicked").attr('id')=="paymentCard"){
                if($(".bloco-card-clicked").length==0){
                    alert("Selecione um cartão para o pagamento.");
                    return false;
                }
            }
        }
        return true;
    }
    return (
        <>
            <div className="col-12 backgroun-3d3d col-sm-12 p-3">
                <label className="titleArticle">Carrinho</label>
            </div>
            <div className='col-12 col-sm-12 col-lg-12' id='blockCart'>
                {cartLayout}
            </div>
            
        </>
    );
   
}


export default ArticleCart;