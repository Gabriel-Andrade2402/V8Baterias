import React,{useEffect} from "react";
import '../../../../assets/css/ArticlesConfig.css';
import iconCard from '../../../../assets/img/utils/iconPaymentTypes.png';
import iconLixeira from '../../../../assets/img/utils/iconLixeira.png';
import axios from "axios";
import $ from 'jquery';
import { BASE_URL } from "../../../../utils/requests";

const ArticlePaymentForm = () =>{
    var cardJson = JSON.parse(localStorage.getItem("cardJson")+"");
    useEffect(() => {
        initializeCard();
      }, []);
    function initializeCard(){
        if(cardJson!=undefined && cardJson!=''){
            cardJson.forEach(function(item:any,index:number){
                if(index==0){
                    $("#numberCard1").val(item.numberCard);
                    $("#monthCard1").val(item.monthCardValidity);
                    $("#yearCard1").val(item.yearCardValidity);
                    $("#nameHolderCard1").val(item.strNameHolder);
                    $("#securityCodeCard1").val(item.codeSecurity);
                }else{
                    var nextCard = (index+1);
                    $("#btnAddNewCard").parent().before(createElementNewCard(nextCard));
                    $("#imgLixeira"+nextCard).click(function(){
                        removeCard(nextCard);
                    });
                    $("#numberCard"+nextCard).val(item.numberCard);
                    $("#monthCard"+nextCard).val(item.monthCardValidity);
                    $("#yearCard"+nextCard).val(item.yearCardValidity);
                    $("#nameHolderCard"+nextCard).val(item.strNameHolder);
                    $("#securityCodeCard"+nextCard).val(item.codeSecurity);
                }
            });
        }
    }
    function createElementNewCard(index:any){
        var urlIconLixeira = $("#imgLixeira").attr("src");
        return "<div class=\"col-12 col-sm-12 p-3 border-bottom\" id='blockCard"+index+"'>"+
        "<div class=\"col-10 col-sm-10 col-lg-10 d-flex justify-content-end\">"+
            "<div class=\"col-1 col-sm-1 col-lg-1 d-flex justify-content-center\">"+
                "<img class=\"col-12 col-sm-12 btn btn-danger\" id='imgLixeira"+index+"' src=\""+urlIconLixeira+"\" col-lg-2\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Número do cartão</label></div>"+
            "<label class='text-danger' style=\"display:none\" id=\"textAlertCardNumber"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='text' id='numberCard"+index+"' maxLength='16' class=\"px-2 col-6 col-sm-6\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Data de expiração</label></div>"+
            "<label class='text-danger' style=\"display:none\" id=\"textAlertCardExpiration"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='text' placeholder=\"MM\" id='monthCard"+index+"' maxLength='2' class=\"px-2 col-2 col-sm-1\"/>"+
                "<label class=\"font-size-18 mx-2\">/</label>"+
                "<input type='text' placeholder=\"YYYY\" id='yearCard"+index+"' maxLength='4' class=\" px-2 col-4 col-sm-2\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Nome do titular</label></div>"+
            "<label class='text-danger' style=\"display:none\" id=\"textAlertCardNameHolder"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='text' id='nameHolderCard"+index+"' class=\"px-2 col-6 col-sm-6\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Código de segurança</label></div>"+
            "<label class='text-danger' style=\"display:none\" id=\"textAlertCardSecurityCode"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='number' id='securityCodeCard"+index+"' maxLength='4' class=\"px-2 col-3 col-sm-3\"/>"+
            "</div>"+
        "</div>"+
    "</div>";
    }
    function removeCard(index:number){
        $("#blockCard"+(index)).remove();
        cardJson.splice(index-1);
    }
    function validityListCard(){
        var permitConnect = true;
        cardJson.forEach(function(item: any,index:number){
            var numberCard=$("#numberCard"+(index+1)).val()+""; 
            var montCard = $("#monthCard"+(index+1)).val()+"";
            var yearCard = $("#yearCard"+(index+1)).val()+"";
            var nameHolder = $("#nameHolderCard"+(index+1)).val()+"";
            var securityCodeCard = $("#securityCodeCard"+(index+1)).val()+"";
            //Validação numero do cartão
            if(numberCard.length!=0){
                $("#textAlertCardNumber"+(index+1)).text("");
                $("#textAlertCardNumber"+(index+1)).css({display:"none"});
                if(!checkMatcher("numberCard"+(index+1),"textAlertCardNumber"+(index+1))){
                    permitConnect = false;
                }else{
                    item.numberCard = $("#numberCard"+(index+1)).val();
                }
            }else{
                permitConnect = false;
                $("#numberCard"+(index+1)).addClass("inputDanger");
                $("#textAlertCardNumber"+(index+1)).text("Preencha o campo obrigatório.");
                $("#textAlertCardNumber"+(index+1)).css({display:"block"});
            }

            //Validação mes e ano
            if(montCard.length!=0){
                $("#textAlertCardExpiration"+(index+1)).text("");
                $("#textAlertCardExpiration"+(index+1)).css({display:"none"});
                if(!checkMatcher("monthCard"+(index+1),"textAlertCardExpiration"+(index+1))){
                    permitConnect = false;
                }else{
                    item.monthCardValidity = $("#monthCard"+(index+1)).val();
                }
            }else{
                permitConnect = false;
                $("#monthCard"+(index+1)).addClass("inputDanger");
                $("#textAlertCardExpiration"+(index+1)).text("Preencha o campo obrigatório.");
                $("#textAlertCardExpiration"+(index+1)).css({display:"block"});
            }

            //Validação nome do titular
            if(yearCard.length!=0){
                $("#textAlertCardExpiration"+(index+1)).text("");
                $("#textAlertCardExpiration"+(index+1)).css({display:"none"});
                if(!checkMatcher("yearCard"+(index+1),"textAlertCardExpiration"+(index+1))){
                    permitConnect = false;
                }else{
                    item.yearCardValidity = $("#yearCard"+(index+1)).val();
                }
            }else{
                permitConnect = false;
                $("#yearCard"+(index+1)).addClass("inputDanger");
                $("#textAlertCardExpiration"+(index+1)).text("Preencha o campo obrigatório.");
                $("#textAlertCardExpiration"+(index+1)).css({display:"block"});
            }

            //Validação nome do titular
            if(nameHolder.length!=0){
                $("#textAlertCardNameHolder"+(index+1)).text("");
                $("#textAlertCardNameHolder"+(index+1)).css({display:"none"});
                if(!checkMatcher("nameHolderCard"+(index+1),"textAlertCardNameHolder"+(index+1))){
                    permitConnect = false;
                }else{
                    item.strNameHolder = $("#nameHolderCard"+(index+1)).val();
                }
            }else{
                permitConnect = false;
                $("#nameHolderCard"+(index+1)).addClass("inputDanger");
                $("#textAlertCardNameHolder"+(index+1)).text("Preencha o campo obrigatório.");
                $("#textAlertCardNameHolder"+(index+1)).css({display:"block"});
            }

            // Validação do código de segurança
            if(securityCodeCard.length!=0){
                $("#textAlertCardSecurityCode"+(index+1)).text("");
                $("#textAlertCardSecurityCode"+(index+1)).css({display:"none"});
                if(!checkMatcher("securityCodeCard"+(index+1),"textAlertCardSecurityCode"+(index+1))){
                    permitConnect = false;
                }else{
                    item.codeSecurity = $("#securityCodeCard"+(index+1)).val();
                }
            }else{
                permitConnect = false;
                $("#securityCodeCard"+(index+1)).addClass("inputDanger");
                $("#textAlertCardSecurityCode"+(index+1)).text("Preencha o campo obrigatório.");
                $("#textAlertCardSecurityCode"+(index+1)).css({display:"block"});
            }
        });
        return permitConnect;
    }
    function checkMatcher(nameInput:any,nameAlert:String){
        var bool = true;
        var input = $("#"+nameInput);
        var textInput = $("#"+nameInput).val()+"";
        if(textInput.match("--")!=null || textInput.match("[0-9]*=[0-9]*")!=null
        || textInput.match("\\s(OR|Or|oR|or)\\s")!=null){
            input.addClass("inputDanger");
            $("#"+nameAlert).text("O formato não é permitido");
            $("#"+nameAlert).removeAttr("style");
            $("#"+nameAlert).css({display:"block"});
            bool = false;   
        }else{
            input.removeClass("inputDanger");
            $("#"+nameAlert).text("");
            $("#"+nameAlert).css({display:"none"});
        }
        return bool;
    }
    return (
        <>
            <div className="col-12 backgroun-3d3d col-sm-12 p-3">
                <label className="titleArticle">Formas de pagamento</label>
            </div>
            <img style={{display:"none"}} id='imgLixeira' src={iconLixeira}/>
            <div className="col-12 col-sm-12 py-3 px-5">
                <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12">
                        <img className="col-3 col-sm-3" src={iconCard}/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <label className="subtitleArticle">Cartões cadastrados</label>
                    <div className="col-12 col-sm-12 p-3 border-bottom" id='blockCard1'>
                        <div className="col-10 col-sm-10 col-lg-10 d-flex justify-content-end">
                            <div className="col-1 col-sm-1 col-lg-1 d-flex justify-content-center"
                            onClick={()=>{removeCard(1)}}>
                                <img className="col-12 col-sm-12 btn btn-danger" id='imgLixeiraindex1' src={iconLixeira}/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Número do cartão</label></div>
                            <label className='text-danger' style={{display:"none"}} id="textAlertCardNumber1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' onChange={()=>{
                                    var number =$("#numberCard1").val()+"";
                                    if(number.length==16){
                                        $("#numberCard1").val(
                                            number.substring(0,4)+" "+
                                            number.substring(4,8)+" "+
                                            number.substring(8,12)+" "+
                                            number.substring(12,16)
                                        );
                                    }
                                }}
                                maxLength={16} id='numberCard1' className="px-2 col-6 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Data de expiração</label></div>
                            <label className='text-danger' style={{display:"none"}} id="textAlertCardExpiration1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' placeholder="MM" id='monthCard1' maxLength={2} className="px-2 col-2 col-sm-1"/>
                                <label className="font-size-18 mx-2">/</label>
                                <input type='text' placeholder="YYYY" id='yearCard1' maxLength={4} className=" px-2 col-4 col-sm-2"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Nome do titular</label></div>
                            <label className='text-danger' style={{display:"none"}} id="textAlertCardNameHolder1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' id='nameHolderCard1' className="px-2 col-6 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Código de segurança</label></div>
                            <label className='text-danger' style={{display:"none"}} id="textAlertCardSecurityCode1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='number' id='securityCodeCard1' maxLength={4} className="px-2 col-3 col-sm-3"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 margin-left-8">
                        <div id="btnAddNewCard"
                        onClick={()=>{
                            var nextCard = (cardJson.length+1);
                            $("#btnAddNewCard").parent().before(createElementNewCard(nextCard));
                            $("#imgLixeira"+nextCard).click(function(){
                                removeCard(nextCard);
                            });
                            $("#numberCard"+nextCard).change(()=>{
                                var number =$("#numberCard"+nextCard).val()+"";
                                if(number.length==16){
                                    $("#numberCard"+nextCard).val(
                                        number.substring(0,4)+" "+
                                        number.substring(4,8)+" "+
                                        number.substring(8,12)+" "+
                                        number.substring(12,16)
                                    );
                                }
                            })
                            cardJson.push(
                                {
                                    numberCard: '',
                                    monthCardValidity: '',
                                    yearCardValidity: '',
                                    strNameHolder: '',
                                    codeSecurity: ''
                                }
                            );
                        }}
                        className="col-12 col-sm-12 rounded p-2 background-ffa d-flex justify-content-center btn-add-address">
                            Cadastrar novo cartão
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 margin-top-15 d-flex justify-content-end">
                    <div onClick={()=>{
                        if(validityListCard()){
                            localStorage.setItem("cardJson",JSON.stringify(cardJson));
                            alert('Cartão Salvo!')
                        }
                    }}
                    className="col-12 col-sm-5 btn-success p-1 rounded d-flex justify-content-center btn-confirm">
                        Confirmar alterações
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticlePaymentForm;