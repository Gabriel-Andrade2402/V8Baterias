import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/storeCommerce.css';
import imgBateriaMoura from '../../../assets/img/baterias/bateriaMoura.png';
import imgBateriaCral from '../../../assets/img/baterias/bateriaCral.png';
import imgBateriaHeliar from '../../../assets/img/baterias/bateriaHeliar.png';
import react,{ useState,useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from "../../../utils/requests";


const StoreCommerce = () => {
    var token = "";
    var bodyFormData = new FormData();
    bodyFormData.append("grant_type","password");
    bodyFormData.append("username","cliente");
    bodyFormData.append("password","123456");
    useEffect(() => {
        authCart();
      }, []);
    function initializeCommerce(data:any){
        data.forEach(function(item: any,index:number){
            var descript = item.strInformations+"";
            var bateriaName = descript.split("-")[0].split("=")[1];
            var amperagem = descript.split("-")[1].split("=")[1];
            var veiculos = descript.split("-")[2].split("=")[1];
            var tempoEstimativo = descript.split("-")[3].split("=")[1];
            var descricao = descript.split("-")[4].split("=")[1];
            $("#sectionCommerce").append(createBlockProduct(index,item.strImageBase,
                item.strCodeProduct,item.numPrice,bateriaName,amperagem,veiculos,tempoEstimativo,descricao));
            $("#btnSubtrProduct"+index).click(()=>{
                var input = $('#inputQuantityProduct'+index);
                if($(input).val()!=1){
                    var quantity = parseInt($(input).val()+'')-1;
                    $(input).val(quantity);
                    var btAdicionar = $('#btAddCard'+index);
                    var textValueBateria = $('#valueProduct'+index);
                    var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                    btAdicionar.text('Adicionar R$ '+newValue);
                }
            });
            $("#btnAddProduct"+index).click(()=>{
                var input = $('#inputQuantityProduct'+index);
                var quantity = parseInt($(input).val()+'')+1;
                $(input).val(quantity);
                var btAdicionar = $('#btAddCard'+index);
                var textValueBateria = $('#valueProduct'+index);
                var newValue = parseFloat($(textValueBateria).text().substring(3,$(textValueBateria).text().length))*quantity;
                btAdicionar.text('Adicionar R$ '+newValue);
            });
            $("#btAddCard"+index).click(()=>{
                var cartJson = JSON.parse(sessionStorage.getItem("cartJson")+"");
                if(cartJson==null && cartJson==undefined){
                    cartJson = [];
                }
                cartJson.push({
                    productCode:$("#codeProduct"+index).val(),
                    quantity:$("#inputQuantityProduct"+index).val()
                });
                sessionStorage.setItem("cartJson",JSON.stringify(cartJson));
            });
        });
    }
    function createBlockProduct(index:number,imgBase:String,codeProduct:String,valueProduct:number
        ,bateriaName:String,amperagem:String,veiculos:String,tempoEstimativo:String,descricao:String){
        return "<article class='col-12 col-sm-12 row rounded' name='valor "+valueProduct+" veiculo "+veiculos+" "+
        "tempo de vida "+tempoEstimativo+" descricao "+descricao+" marca "+bateriaName+"'>"+
                    "<input type='hidden' id='codeProduct"+index+"' value='"+codeProduct+"'/>"+
                    "<div class='col-12 col-sm-4 d-flex justify-content-center'>"+
                        "<img src='"+imgBase+"' class='col-8 col-sm-9'/>"+
                    "</div>"+
                    "<div class='col-12 col-sm-4 mt-4'>"+
                        "<div class='col-12 col-sm-12 row'>"+
                            "<h6 class='col-6 col-sm-6'>"+
                                "Marca:"+
                            "</h6>"+
                            "<div class='col-6 col-sm-6'>"+
                                bateriaName+
                                "</div>"+
                        "</div>"+
                        "<div class='col-12 col-sm-12 row'>"+
                            "<h6 class='col-6 col-sm-6'>"+
                            "Amperagem:"+
                                "</h6>"+
                            "<div class='col-6 col-sm-6'>"+
                            amperagem+
                                "</div>"+
                            "</div>"+
                        "<div class='col-12 col-sm-12 row'>"+
                            "<h6 class='col-6 col-sm-6'>"+
                            "Veiculos:"+
                                "</h6>"+
                            "<div class='col-6 col-sm-6'>"+
                            veiculos+
                                "</div>"+
                            "</div>"+
                        "<div class='col-12 col-sm-12 row'>"+
                            "<h6 class='col-6 col-sm-6'>"+
                            "Tempo estimativo de vida:"+
                                "</h6>"+
                            "<div class='col-6 col-sm-6'>"+
                            tempoEstimativo+
                                "</div>"+
                            "</div>"+
                        "<div class='col-12 col-sm-12'>"+
                            "<h6>"+
                            "Descrição:"+
                                "</h6>"+
                            "<div>"+
                            descricao+
                            "</div>"+
                            "</div>"+
                    "</div>"+
                    "<div class='col-12 col-sm-4 mt-sm-5 mb-4 mt-3'>"+
                        "<div class='col-12 col-sm-12'>"+
                        "<h4 id='valueProduct"+index+"'>R$ "+valueProduct+"</h4>"+
                            "</div>"+
                        "<div class='col-12 col-sm-12'>"+
                        "<h6 class='col-6 col-sm-6'>"+
                            "Quantidade:"+
                                "</h6>"+
                            "<div class='col-12 col-sm-12 row px-3 mb-1'>"+
                            "<div class='col-2 col-sm-2 bg-quantity-product' id='btnSubtrProduct"+index+"'>"+
                                "<h4 class='col-12 col-sm-12 d-flex justify-content-center'>"+
                                    "-"+
                                        "</h4>"+
                                    "</div>"+
                                "<div class='col-4 col-sm-3'>"+
                                "<input type=\"text\" id='inputQuantityProduct"+index+"'"+
                                "readOnly='true'"+
                                "value='1' class='col-12 col-sm-12 px-2'/>"+
                                "</div>"+
                                "<div class='col-2 col-sm-2 bg-quantity-product' id='btnAddProduct"+index+"'>"+
                                "<h4 class='col-12 col-sm-12 d-flex justify-content-center'>"+
                                "+"+
                                "</h4>"+
                                "</div>"+
                                "</div>"+
                                "</div>"+
                                "<div class='col-12 col-sm-12'>"+
                                "<div class='col-12 col-sm-12 btn btn-success' id='btAddCard"+index+"'>"+
                                "Adicionar R$ "+valueProduct +
                                "</div>"+
                                "</div>"+
                                "</div>"+
                "</article>"+
                "<div class='col-12 col-sm-12'>"+
                   "<div class='linhaDark rounded-30'></div>"+
                "</div>"
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
            findCommerce();
            })
            .catch(function (response) {
            console.log(response);
            });
    }
    function findCommerce(){
        axios({
            method: "post",
            url: BASE_URL+"/product/commerce",
            headers: {
                "Authorization": token,
            },
        })
        .then(function (response) {
            initializeCommerce(response.data);
        })
        .catch(function (response) {
        console.log(response);
        });
    }
    const [amperagemFilter,setAmperagemFilter] = useState('0');
    const [valueFilter,setValueFilter] = useState('0');

    function filterAside(){
        var filterSelecteds = {
            checkBoxMarcas:[
                {marca:"Moura",
                selected:false},
                {marca:"Heliar",
                selected:false},
                {marca:"Cral",
                selected:false}
            ],
            checkBoxVeiculos:[
                {veiculo:"Carro",
                selected:false},
                {veiculo:"Moto",
                selected:false},
                {veiculo:"Caminhao",
                selected:false}
            ],
            ranges:[
                {amperagem:'0'},
                {preco:'0'}
            ]
        };
        if($("#checkMarcaMoura").prop("checked")){
            filterSelecteds.checkBoxMarcas[0].selected=true;
        }
        if($("#checkMarcaHeliar").prop("checked")){
            filterSelecteds.checkBoxMarcas[1].selected=true;
        }
        if($("#checkMarcaCral").prop("checked")){
            filterSelecteds.checkBoxMarcas[2].selected=true;
        }
        if($("#checkVeiculoCarro").prop("checked")){
            filterSelecteds.checkBoxVeiculos[0].selected=true;
        }
        if($("#checkVeiculoMoto").prop("checked")){
            filterSelecteds.checkBoxVeiculos[1].selected=true;
        }
        if($("#checkVeiculoCaminhao").prop("checked")){
            filterSelecteds.checkBoxVeiculos[2].selected=true;
        }
        if($("#rangeAmperagem").val()!='50'){
            filterSelecteds.ranges[0].amperagem=$("#rangeAmperagem").val()+"";
        }
        if($("#rangeValueFilter").val()!='50'){
            filterSelecteds.ranges[1].amperagem=$("#rangeValueFilter").val()+"";
        }
        var regex = "";
        var regexVeiculos = "";
        filterSelecteds.checkBoxMarcas.forEach((item,index)=>{
            if(item.selected==true){
                if((index+1)!=filterSelecteds.checkBoxMarcas.length){
                    regex +=(regex=="")?"("+item.marca:"|"+item.marca;
                }else{
                    regex +=(regex=="")?item.marca+")":"|"+item.marca;
                }
            }
        })
        if(regex!=""){
            if(regex.match("\\)")==null){
                regex+=")";
            }
        }
        filterSelecteds.checkBoxVeiculos.forEach((item,index)=>{
            if(item.selected==true){
                if((index+1)!=filterSelecteds.checkBoxMarcas.length){
                    regexVeiculos +=(regexVeiculos=="")?"("+item.veiculo:"|"+item.veiculo;
                }else{
                    regexVeiculos +=(regexVeiculos=="")?item.veiculo+")":"|"+item.veiculo;
                }
            }
        })
        if(regexVeiculos!=""){
            if(regexVeiculos.match("\\)")==null){
                regexVeiculos+=")";
            }
        }
        // var fullRegex = (regex=="" && regexVeiculos!="")?regexVeiculos:(regex!="" && regexVeiculos=="")?regex:"";
        // fullRegex = (fullRegex=="")?(regex!="" && regexVeiculos!="")?"["+regex+regexVeiculos+"]":"":fullRegex;
        
        $("#sectionCommerce article").each((index,item)=>{
            var name = $(item).attr("name")+"";
            if(regex!="" && regexVeiculos !=""){
                if(name.match(regex)==null || name.match(regexVeiculos)==null){
                  $(item).hide();
                  $(item).next().hide();
                }else{
                  $(item).show();
                  $(item).next().show();
                }
            }else if(regex!="" && regexVeiculos ==""){
                if(name.match(regex)==null){
                    $(item).hide();
                    $(item).next().hide();
                }else{
                    $(item).show();
                    $(item).next().show();
                }
            }else if(regex=="" && regexVeiculos !=""){
                if(name.match(regexVeiculos)==null){
                    $(item).hide();
                    $(item).next().hide();
                }else{
                    $(item).show();
                    $(item).next().show();
                }
            }
          });
    }
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
                        <input className='col-12 col-sm-4' onChange={()=>{
                            filterAside();
                        }} id='checkMarcaMoura' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 px-2'>
                        <label className='col-8 col-sm-8'>Heliar</label>
                        <input className='col-12 col-sm-4' onChange={()=>{
                            filterAside();
                        }} id='checkMarcaHeliar' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 px-2'>
                        <label className='col-8 col-sm-8'>Cral</label>
                        <input className='col-12 col-sm-4' onChange={()=>{
                            filterAside();
                        }} id='checkMarcaCral' type="checkbox"/>
                    </div>
                </div>
                <div className='col-12 col-sm-12 mt-3'>
                    <h6 className='col-12 col-sm-12'>
                        Amperagem
                    </h6>
                    <div className='col-12 col-sm-12 row px-2'>
                        <input type="range" id='rangeAmperagem' min={25} max={120} 
                        onChange={(value)=>{var total = $('#rangeAmperagem').val();setAmperagemFilter(''+total);filterAside();}} 
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
                        <input className='col-12 col-sm-4' onChange={()=>{
                            filterAside();
                        }} id='checkVeiculoCarro' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 row px-2'>
                        <label className='col-8 col-sm-8'>Moto</label>
                        <input className='col-12 col-sm-4' onChange={()=>{
                            filterAside();
                        }} id='checkVeiculoMoto' type="checkbox"/>
                    </div>
                    <div className='col-12 col-sm-12 row px-2'>
                        <label className='col-8 col-sm-8'>Caminhão</label>
                        <input className='col-12 col-sm-4' onChange={()=>{
                            filterAside();
                        }} id='checkVeiculoCaminhao' type="checkbox"/>
                    </div>
                </div>
                <div className='col-12 col-sm-12 mt-3'>
                    <h6 className='col-12 col-sm-12'>
                        Preço
                    </h6>
                    <div className='col-12 col-sm-12 row px-2'>
                        <input type="range" id='rangeValueFilter' min={150} max={500} 
                        onChange={(value)=>{var total = $('#rangeValueFilter').val();setValueFilter(''+total); filterAside();}} 
                        className='col-12 col-sm-7 offset-2 offset-sm-0'/>
                        <label className='col-2 col-sm-2'>&ge;R$</label>
                        <label className='col-8 col-sm-3'>{valueFilter}</label>
                    </div>
                </div>
            </aside>
            <section className='col-9 col-sm-9' id='sectionCommerce'>
                
            </section>
        </div>
      </div>
   );
}
export default StoreCommerce;