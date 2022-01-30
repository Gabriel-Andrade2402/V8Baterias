import React, {useState,useEffect} from "react";
import axios from "axios";
import $ from 'jquery';
import { BASE_URL } from "../../../utils/requests";
import iconRegistry from '../../../assets/img/utils/iconRegistry.png';


//Etapas de cadastro
const PersonalInfo = () =>{
    return(
        <>
            <div className="col-12 col-sm-12 col-lg-12" id='BlockRegistryPersonalInformations'>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='nome' className='textSize15 font-bold-300'>Nome completo</label>
                    <label className='text-danger' id="textAlertNameRegistry"></label>
                    <input name='nome' id='inputNomeRegistry' placeholder="* Nome" className='inputData px-3 ' type="text"/>
                </div>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='Cpf' className='textSize15 font-bold-300'>CPF</label>
                    <label className='text-danger' id="textAlertCpfRegistry"></label>
                    <input name='Cpf' id='inputCpfRegistry'
                    onChange={()=>{
                        var cpf =$("#inputCpfRegistry").val()+"";
                        if(cpf.length==11){
                            $("#inputCpfRegistry").val(
                                cpf.substring(0,3)+"."+
                                cpf.substring(3,6)+"."+
                                cpf.substring(6,9)+"-"+
                                cpf.substring(9,11)
                            );
                        }
                    }}
                    maxLength={11}
                    placeholder="* CPF" className='inputData px-3 ' type="text"/>
                </div>
            </div>
        </>
    );
}
const ContactRegistry = () =>{
    return(
        <>
            <div className="col-12 col-sm-12 col-lg-12" id='BlockRegistryContactInformations'>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='email' className='textSize15 font-bold-300'>Email</label>
                    <label className='text-danger' id="textAlertEmailRegistry"></label>
                    <input name='email' id='inputEmailRegistry' placeholder="* Email" className='inputData px-3' type="text"/>
                </div>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='Celular' className='textSize15 font-bold-300'>Celular</label>
                    <label className='text-danger' id="textAlertCelularRegistry"></label>
                    <input name='Celular' 
                    onChange={()=>{
                        var number =$("#inputCelularRegistry").val()+"";
                        if(number.length==11){
                            $("#inputCelularRegistry").val(
                                "("+number.substring(0,2)+") "+
                                number.substring(2,3)+" "+
                                number.substring(3,7)+"-"+
                                number.substring(7,11)
                            );
                        }
                    }}
                    maxLength={11}
                    id='inputCelularRegistry' placeholder="* Celular" className='inputData px-3 ' type="text"/>
                </div>
            </div>
        </>
    )
}
const AddressRegistry = () =>{
    return(
        <>
            <div className="col-12 col-sm-12 col-lg-12" id='BlockRegistryAddress'>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='road' className='textSize15 font-bold-300'>Rua</label>
                    <label className='text-danger' id="textAlertRoadegistry"></label>
                    <input name='road' id='inputRoadRegistry' placeholder="nome da rua" className='inputData px-3 ' type="text"/>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 row d-flex align-items-end">
                    <div className='col-4 col-sm-4 flexColumn my-3'>
                        <label htmlFor='numberHome' className='textSize15 font-bold-300'>Número</label>
                        <label className='text-danger' id="textAlertNumberHomeRegistry"></label>
                        <input name='numberHome' id='inputNumberHomeRegistry' placeholder="" className='inputData px-3 ' type="text"/>
                    </div>
                    <div className='col-6 col-sm-6 flexColumn my-3'>
                        <label htmlFor='cep' className='textSize15 font-bold-300'>Cep</label>
                        <label className='text-danger' id="textAlertCepRegistry"></label>
                        <input 
                        onChange={()=>{
                            var number =$("#inputCepRegistry").val()+"";
                            if(number.length==8){
                                $("#inputCepRegistry").val(
                                    number.substring(0,5)+"-"+
                                    number.substring(5,8)
                                );
                            }
                        }}
                        maxLength={8}
                        name='cep' id='inputCepRegistry' placeholder="" className='inputData px-3 ' type="text"/>
                    </div>
                </div>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='referencePoint' className='textSize15 font-bold-300'>Ponto de referência</label>
                    <label className='text-danger' id="textAlertReferencePointRegistry"></label>
                    <input name='referencePoint' id='inputReferencePointRegistry' placeholder="" className='inputData px-3 ' type="text"/>
                </div>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='obs' className='textSize15 font-bold-300'>Observações</label>
                    <label className='text-danger' id="textAlertObsRegistry"></label>
                    <input name='obs' id='inputObsRegistry' placeholder="" className='inputData px-3 ' type="text"/>
                </div>
            </div>
        </>
    )
}
const CardRegistry = () =>{
    return(
        <>
            <div className="col-12 col-sm-12 col-lg-12" id='BlockRegistryCard'>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='numberCard' className='textSize15 font-bold-300'>Número do cartão</label>
                    <label className='text-danger' id="textAlertNumberCardegistry"></label>
                    <input 
                    onChange={()=>{
                        var number =$("#inputNumberCardRegistry").val()+"";
                        if(number.length==16){
                            $("#inputNumberCardRegistry").val(
                                number.substring(0,4)+" "+
                                number.substring(4,8)+" "+
                                number.substring(8,12)+" "+
                                number.substring(12,16)
                            );
                        }
                    }}
                    maxLength={16}
                    name='numberCard' id='inputNumberCardRegistry' placeholder="0000 0000 0000 0000" className='inputData px-3 ' type="text"/>
                </div>
                <div className="col-12 col-sm-12 col-lg-12">
                    <label htmlFor='dtExpiration' className='textSize15 col-12 col-sm-12 col-lg-12 font-bold-300'>Data de expiração</label>
                    <label className='text-danger' id="textAlertDtExpirationRegistry"></label>
                    <div className="col-12 col-sm-12 mt-1">
                        <input maxLength={2} type='text' id='inputMonthValidityRegitry' placeholder="MM" className="px-2 col-2 col-sm-2 input-Height"/>
                        <label className="font-size-18 mx-2">/</label>
                        <input type='text' maxLength={4} id='inputYearValidityRegitry' placeholder="YYYY" className=" px-2 col-4 col-sm-3 input-Height"/>
                    </div>
                </div>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='nameHolder' className='textSize15 font-bold-300'>Nome do titular</label>
                    <label className='text-danger' id="textAlertNameHolderRegistry"></label>
                    <input name='nameHolder' id='inputHolderNameRegistry' placeholder="" className='inputData px-3 ' type="text"/>
                </div>
                <div className='col-8 col-sm-5 flexColumn my-3'>
                    <label htmlFor='securityCode' className='textSize15 font-bold-300'>Código de segurança</label>
                    <label className='text-danger' id="textAlertCodeSecurityRegistry"></label>
                    <input name='securityCode' maxLength={4} id='inputSecurityCodeRegistry' placeholder="0000" className='inputData px-3 ' type="text"/>
                </div>
            </div>
        </>
    )
}
const PasswordRegistry = () =>{
    return(
        <>
            <div className="col-12 col-sm-12 col-lg-12" id='BlockRegistryPassword'>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='Senha' className='textSize15 font-bold-300'>Senha</label>
                    <input name='Senha' id='inputSenhaRegistry' placeholder="* Senha" className='inputData px-3 ' type="password"/>
                </div>
                <div className='col-12 col-sm-12 flexColumn my-3'>
                    <label htmlFor='Senha2' className='textSize15 font-bold-300'>Confirmar senha</label>
                    <input name='Senha2' id='inputConfirmSenhaRegistry' placeholder="* digite a senha novamente" className='inputData px-3 ' type="password"/>
                </div>
                <label className='text-danger' id="textAlertPasswordRegistry"></label>
            </div>
        </>
    )
}
const RegistryCredentials = () => {
        const [userJson,setUserJson]= useState(
            {
                strName: '',
                strCpf: '',
                listAddress: [
                    {
                        strRoad: '',
                        numResidence: 0,
                        strCep: '',
                        strReferencePoint: '',
                        strObservation: ''
                    }
                ],
                strTelephone: '',
                strEmail: '',
                config_id: {
                    bolReceivePromotions: false,
                    bolReceiveUpdatingPrice: false,
                },
                strPassword: ''
        }
        );
        const [card,setCard]= useState(
            {
                numberCard: '',
                monthCardValidity: '',
                yearCardValidity: '',
                strNameHolder: '',
                codeSecurity: ''
        }
        );
        const [stepActive,setStepActive] = useState(<PersonalInfo/>);
        var token = "";
        var bodyFormData = new FormData();
        bodyFormData.append("grant_type","password");
        bodyFormData.append("username","cliente");
        bodyFormData.append("password","123456");
    function authRegistry(){
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
            registryRequest();
            })
            .catch(function (response) {
            console.log(response);
            });
    }

    //Método que valida as informações vindas da etapa de nome e cpf
    //o método a baixo recupera as informações
    function validityInfoPersonal(){
        var bool = true;
        var nameComplet = $("#inputNomeRegistry");
        var cpf = $("#inputCpfRegistry");
        var textNameComplet = $(nameComplet).val()+"";
        var textCpf = $(cpf).val()+"";
        if(!checkMatcher("inputNomeRegistry") || textNameComplet.match("[a-zA-Z]+\\s[a-zA-Z]+")==null){
            nameComplet.addClass("inputDanger");
            $("#textAlertNameRegistry").text("O nome precisa conter nome e sobrenome. Apenas com letras");
            bool = false;   
        }else{
            nameComplet.removeClass("inputDanger");
            $("#textAlertNameRegistry").text("");
        }
        if(textCpf.match("--")!=null || textCpf.match("[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}")==null || textCpf.length!=14){
            cpf.addClass("inputDanger");
            $("#textAlertCpfRegistry").text("O CPF possui um formato não permitido.");
            bool = false;
        }else{
            cpf.removeClass("inputDanger");
            $("#textAlertCpfRegistry").text("");
        }
        var user = userJson;
        user.strName=$("#inputNomeRegistry").val()+"";
        user.strCpf=$("#inputCpfRegistry").val()+"";
        setUserJson(user);
        return bool;
    }
    function backupInfoPersonal(){
        setTimeout(function(){
            var user = userJson;
            $("#inputNomeRegistry").val(user.strName);
            $("#inputCpfRegistry").val(user.strCpf);
        },50);
    }

    //Método que valida as informações vindas da etapa de contato
    //o método a baixo recupera as informações
    function validityInfoContact(){
        var bool = true;
        var email = $("#inputEmailRegistry");
        var celular = $("#inputCelularRegistry");
        var textEmail = $(email).val()+"";
        var textCelular = $(celular).val()+"";
        if(!checkMatcher("inputEmailRegistry") || textEmail.match(".+@.+")==null){
            email.addClass("inputDanger");
            $("#textAlertEmailRegistry").text("O E-mail não possui um formato permitido");
            bool = false;   
        }else{
            email.removeClass("inputDanger");
            $("#textAlertEmailRegistry").text("");
        }
        if(textCelular.match("--")!=null || textCelular.match("\\([0-9]{2}\\)\\s9\\s[0-9]{4}-[0-9]{4}")==null){
            celular.addClass("inputDanger");
            $("#textAlertCelularRegistry").text("O celular está em um formato desconhecido.");
            bool = false;
        }else{
            celular.removeClass("inputDanger");
            $("#textAlertCelularRegistry").text("");
        }
        var user = userJson;
        user.strEmail=$("#inputEmailRegistry").val()+"";
        user.strTelephone=$("#inputCelularRegistry").val()+"";
        setUserJson(user);
        return bool;
    }
    function backupInfoContact(){
        setTimeout(function(){
            var user = userJson;
            $("#inputEmailRegistry").val(user.strEmail);
            $("#inputCelularRegistry").val(user.strTelephone);
        },50);
    }
    //Método que valida as informações vindas da etapa de contato
    //o método a baixo recupera as informações
    function validityInfoAddress(){
        var bool = true;
        var road = $("#inputRoadRegistry");
        var numResidence = $("#inputNumberHomeRegistry");
        var numCep = $("#inputCepRegistry");
        var referencePoint = $("#inputReferencePointRegistry");
        var obs = $("#inputObsRegistry");

        var textRoad = $(road).val()+"";
        var numberResidence = $(numResidence).val()+"";
        var textCep = $(numCep).val()+"";
        var textReferencePoint = $(referencePoint).val()+"";
        var textObs = $(obs).val()+"";
        if(textRoad!='' || numberResidence !='' || textCep !='' || textReferencePoint !='' || textObs !=''){

            if(!checkMatcher("inputRoadRegistry") || textRoad.match("[a-zA-Z]+")==null){
                road.addClass("inputDanger");
                $("#textAlertRoadegistry").text("O nome da rua não possui um formato permitido utilize apenas letras");
                bool = false;   
            }else{
                road.removeClass("inputDanger");
                $("#textAlertRoadegistry").text("");
            }
            if(!checkMatcher("inputNumberHomeRegistry") || numberResidence.match("[0-9]+")==null){
                numResidence.addClass("inputDanger");
                $("#textAlertNumberHomeRegistry").text("Apenas números");
                bool = false;   
            }else{
                numResidence.removeClass("inputDanger");
                $("#textAlertNumberHomeRegistry").text("");
            }
            if(textCep.match("--")!=null || textCep.match("[0-9]{5}-[0-9]{3}")==null){
                numCep.addClass("inputDanger");
                $("#textAlertCepRegistry").text("Formato não permitido");
                bool = false;   
            }else{
                numCep.removeClass("inputDanger");
                $("#textAlertCepRegistry").text("");
            }
            if(textReferencePoint.match("--")!=null || textReferencePoint.match("[a-zA-Z]*")==null){
                referencePoint.addClass("inputDanger");
                $("#textAlertReferencePointRegistry").text("Utilize apenas letras nesse campo");
                bool = false;   
            }else{
                referencePoint.removeClass("inputDanger");
                $("#textAlertReferencePointRegistry").text("");
            }
            if(textObs.match("--")!=null || textObs.match("[a-zA-Z]*")==null){
                obs.addClass("inputDanger");
                $("#textAlertObsRegistry").text("Utilize apenas letras nesse campo");
                bool = false;   
            }else{
                obs.removeClass("inputDanger");
                $("#textAlertObsRegistry").text("");
            }
        }
        var user = userJson;
        user.listAddress[0].strRoad=$("#inputRoadRegistry").val()+"";
        user.listAddress[0].numResidence=parseInt($("#inputNumberHomeRegistry").val()+"");
        user.listAddress[0].strCep=$("#inputCepRegistry").val()+"";
        user.listAddress[0].strReferencePoint=$("#inputReferencePointRegistry").val()+"";
        user.listAddress[0].strObservation=$("#inputObsRegistry").val()+"";
        setUserJson(user);
        return bool;
    }
    function backupInfoAddress(){
        setTimeout(function(){
            var user = userJson;
            $("#inputRoadRegistry").val(user.listAddress[0].strRoad);
            $("#inputNumberHomeRegistry").val(user.listAddress[0].numResidence);
            $("#inputCepRegistry").val(user.listAddress[0].strCep);
            $("#inputReferencePointRegistry").val(user.listAddress[0].strReferencePoint);
            $("#inputObsRegistry").val(user.listAddress[0].strObservation);
        },50);
    }
    //Método que valida as informações vindas da etapa de cartão
    //o método a baixo recupera as informações
    function validityInfoCard(){
        var bool = true;
        var numberCard = $("#inputNumberCardRegistry");
        var dtMonthExpiration = $("#inputMonthValidityRegitry");
        var dtYearExpiration = $("#inputYearValidityRegitry");
        var nameHolderCard = $("#inputHolderNameRegistry");
        var securityCode = $("#inputSecurityCodeRegistry");

        var numberFullCard = $(numberCard).val()+"";
        var textDtMonthExpiration = $(dtMonthExpiration).val()+"";
        var textDtYearExpiration = $(dtYearExpiration).val()+"";
        var textNameHolderCard = $(nameHolderCard).val()+"";
        var numberSecurityCode = $(securityCode).val()+"";
        if(numberFullCard!='' || textDtMonthExpiration !='' || textDtYearExpiration !='' || textNameHolderCard !='' || numberSecurityCode !=''){
            if(numberFullCard.match("--")!=null || numberFullCard.match("[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}")==null){
                numberCard.addClass("inputDanger");
                $("#textAlertNumberCardegistry").text("O número do cartão não está em um formato permitido");
                bool = false;   
            }else{
                numberCard.removeClass("inputDanger");
                $("#textAlertNumberCardegistry").text("");
            }
            if(textDtMonthExpiration.match("--")!=null || textDtMonthExpiration.match("[0-9]{2}")==null){
                dtMonthExpiration.addClass("inputDanger");
                $("#textAlertDtExpirationRegistry").text("Apenas números");
                bool = false;   
            }else{
                dtMonthExpiration.removeClass("inputDanger");
                $("#textAlertDtExpirationRegistry").text("");
            }
            if(textDtYearExpiration.match("--")!=null || textDtYearExpiration.match("[0-9]{4}")==null){
                dtYearExpiration.addClass("inputDanger");
                $("#textAlertDtExpirationRegistry").text("Apenas números");
                bool = false;   
            }else{
                dtYearExpiration.removeClass("inputDanger");
                $("#textAlertDtExpirationRegistry").text("");
            }
            if(!checkMatcher("inputHolderNameRegistry") || textNameHolderCard.match("[a-zA-Z]+\\s[a-zA-Z]+")==null){
                nameHolderCard.addClass("inputDanger");
                $("#textAlertNameHolderRegistry").text("Utilize apenas letras nesse campo com nome e sobrenome");
                bool = false;   
            }else{
                nameHolderCard.removeClass("inputDanger");
                $("#textAlertNameHolderRegistry").text("");
            }
            if(numberSecurityCode.match("--")!=null || numberSecurityCode.match("[0-9]+")==null){
                securityCode.addClass("inputDanger");
                $("#textAlertCodeSecurityRegistry").text("Apenas números");
                bool = false;   
            }else{
                securityCode.removeClass("inputDanger");
                $("#textAlertCodeSecurityRegistry").text("");
            }
        }
        var newCard = card;
        card.numberCard=$("#inputNumberCardRegistry").val()+"";
        card.monthCardValidity=$("#inputMonthValidityRegitry").val()+"";
        card.yearCardValidity=$("#inputYearValidityRegitry").val()+"";
        card.strNameHolder=$("#inputHolderNameRegistry").val()+"";
        card.codeSecurity=$("#inputSecurityCodeRegistry").val()+"";
        setCard(newCard);
        return bool;
    }
    function backupInfoCard(){
        setTimeout(function(){
            var newCard = card;
            $("#inputNumberCardRegistry").val(newCard.numberCard);
            $("#inputMonthValidityRegitry").val(newCard.monthCardValidity);
            $("#inputYearValidityRegitry").val(newCard.yearCardValidity);
            $("#inputHolderNameRegistry").val(newCard.strNameHolder);
            $("#inputSecurityCodeRegistry").val(newCard.codeSecurity);
        },50);
    }
    //Método que valida as informações vindas da etapa de nome e Senha
    //o método a baixo recupera as informações
    function validityInfoPassword(){
        var bool = true;
        var password1 = $("#inputSenhaRegistry");
        var password2 = $("#inputConfirmSenhaRegistry");
        var textPassword1 = $(password1).val()+"";
        var textPassword2 = $(password2).val()+"";

        if(textPassword1!=textPassword2){
            $("#textAlertPasswordRegistry").text("As senhas não correspondem");
            bool = false;
        }else{
            password1.removeClass("inputDanger");
            password2.removeClass("inputDanger");
            $("#textAlertPasswordRegistry").text("");
            if(textPassword1.length<8 || textPassword2.length<8){
                password1.addClass("inputDanger");
                password2.addClass("inputDanger");
                $("#textAlertPasswordRegistry").text("A senha deve possuir pelo menos 8 caracteres");
                bool= false;
            }else{
                password1.removeClass("inputDanger");
                password2.removeClass("inputDanger");
                $("#textAlertPasswordRegistry").text("");
                if(!checkMatcher("inputSenhaRegistry")){
                    password1.addClass("inputDanger");
                    $("#textAlertPasswordRegistry").text("A senha possui um formato não permitido");
                    bool = false;   
                }else{
                    password1.removeClass("inputDanger");
                    $("#textAlertPasswordRegistry").text("");
                }
                if(!checkMatcher("inputConfirmSenhaRegistry")){
                    password2.addClass("inputDanger");
                    $("#textAlertPasswordRegistry").text("A senha possui um formato não permitido");
                    bool = false;
                }else{
                    password2.removeClass("inputDanger");
                    $("#textAlertPasswordRegistry").text("");
                }
            }
        }
        var user = userJson;
        user.strPassword=$("#inputNomeRegistry").val()+"";
        user.config_id.bolReceivePromotions = ($("#inputReceivePromotionRegistry").prop("checked"))?true:false;
        user.config_id.bolReceiveUpdatingPrice = ($("#inputReceiveUpdatingPriceRegistry").prop("checked"))?true:false;
        setUserJson(user);
        return bool;
    }
    function backupInfoPassword(){
        setTimeout(function(){
            var user = userJson;
            $("#inputSenhaRegistry").val(user.strPassword);
        },50);
    }
    function checkMatcher(nameInput:any){
        var bool = true;
        var textInput = $("#"+nameInput).val()+"";
        if(textInput.match("--")!=null || textInput.match("[0-9]*=[0-9]*")!=null
        || textInput.match("\\s(OR|Or|oR|or)\\s")!=null){
            bool = false;   
        }
        return bool;
    }
    function registryRequest(){
        axios({
            method: "post",
            url: BASE_URL+"/client/registry",
            data: userJson,
            headers: {
            "Authorization": token,
            },
        })
        .then(function (response) {
            token = response.data.token_type + " " + response.data.access_token;
            sessionStorage.setItem("userJson",JSON.stringify(response.data));
            //var userJson = JSON.parse(sessionStorage.getItem("userJson")+"");
            //console.log(userJson.strEmail);
            window.location.href="http://localhost:3000/";
        })
        .catch(function (response) {
          console.log(response);
        });
    }
    useEffect(() => {
        hideInitial();
      }, []);
    return (
        <>
        <div className='col-12 col-sm-12 p-3'>
                    <div className='col-12 col-sm-12'>
                        <h3 className='fontColorOrange offset-sm-3 textSize48' >Registrar-se</h3>
                    </div>
                    <div className='mx-4' id='steps'>
                        <div className="col-12 col-sm-12 col-lg-12 row">
                            <label id='titleStep' className="col-6 col-sm-6 col-lg-6 textSize18 fontBold">Informações pessoais</label>
                            <div className="col-12 col-sm-5 col-lg-5 d-flex justify-content-end px-5">
                                <label>Etapa <label id='labelEtapa'>1</label> de 5</label>
                            </div>
                        </div>
                        {stepActive}
                        <div
                        className="col-sm-11 col-11 col-lg-11 row d-flex justify-content-center">
                            <div 
                            id="btnBackStep"
                            onClick={()=>{
                                if($("#labelEtapa").text()=='2'){
                                    setStepActive(<PersonalInfo/>);
                                    $("#titleStep").text("Informações pessoais");
                                    $("#btnBackStep").hide();
                                    $("#labelEtapa").text("1");
                                    backupInfoPersonal();
                                }else
                                if($("#labelEtapa").text()=='3'){
                                    $("#titleStep").text("Informações de contato");
                                    setStepActive(<ContactRegistry/>);
                                    $("#labelEtapa").text("2");
                                    backupInfoContact();
                                }else
                                if($("#labelEtapa").text()=='4'){
                                    $("#titleStep").text("Endereço (Opcional)");
                                    setStepActive(<AddressRegistry/>);
                                    $("#labelEtapa").text("3");
                                    $("#btnSkipStep").hide();
                                    backupInfoAddress();
                                }else
                                if($("#labelEtapa").text()=='5'){
                                    $("#titleStep").text("Cartão (Opcional)");
                                    setStepActive(<CardRegistry/>);
                                    $("#btnRegistry").hide();
                                    $("#btnSkipStep").show();
                                    $("#btnNextStep").show();
                                    $("#labelEtapa").text("4");
                                    backupInfoCard();
                                }
                            }}
                            className="btn-dark btnRegistry p-1 mx-2 mt-1 col-5 col-sm-3 col-lg-3">
                                <label className="cursorPointerHover col-12 col-sm-12 col-lg-12 d-flex justify-content-center">Voltar</label>
                            </div>
                            <div
                            id="btnSkipStep"
                            onClick={()=>{
                                if($("#labelEtapa").text()=='1'){
                                    if(validityInfoPersonal()){
                                        $("#titleStep").text("Informações de contato");
                                        setStepActive(<ContactRegistry/>);
                                        $("#btnBackStep").show();
                                        $("#labelEtapa").text("2");
                                    }
                                }else
                                if($("#labelEtapa").text()=='2'){
                                    if(validityInfoContact()){
                                        $("#titleStep").text("Endereço (Opcional)");
                                        setStepActive(<AddressRegistry/>);
                                        $("#btnSkipStep").show();
                                        $("#labelEtapa").text("3");
                                    }
                                }else
                                if($("#labelEtapa").text()=='3'){
                                    if(validityInfoAddress()){
                                        $("#titleStep").text("Cartão (Opcional)");
                                        setStepActive(<CardRegistry/>);
                                        $("#labelEtapa").text("4");
                                    }
                                }else
                                if($("#labelEtapa").text()=='4'){
                                    if(validityInfoCard()){
                                        $("#titleStep").text("Cadastrar Senha");
                                        setStepActive(<PasswordRegistry/>);
                                        $("#btnRegistry").show();
                                        $("#btnSkipStep").hide();
                                        $("#btnNextStep").hide();
                                        $("#labelEtapa").text("5");
                                        $("#blockConfigPromotions").show();
                                    }
                                }
                            }}
                            className="btn-dark btnRegistry p-1 mx-2 mt-1 col-5 col-sm-3 col-lg-3">
                                <label className="cursorPointerHover col-12 col-sm-12 col-lg-12 d-flex justify-content-center">Pular</label>
                            </div>
                            <div 
                            id="btnNextStep"
                            onClick={()=>{
                                if($("#labelEtapa").text()=='1'){
                                    if(validityInfoPersonal()){
                                        $("#titleStep").text("Informações de contato");
                                        setStepActive(<ContactRegistry/>);
                                        $("#btnBackStep").show();
                                        $("#labelEtapa").text("2");
                                    }
                                }else
                                if($("#labelEtapa").text()=='2'){
                                    if(validityInfoContact()){
                                        $("#titleStep").text("Endereço (Opcional)");
                                        setStepActive(<AddressRegistry/>);
                                        $("#btnSkipStep").show();
                                        $("#labelEtapa").text("3");
                                    }
                                }else
                                if($("#labelEtapa").text()=='3'){
                                    if(validityInfoAddress()){
                                        $("#titleStep").text("Cartão (Opcional)");
                                        setStepActive(<CardRegistry/>);
                                        $("#labelEtapa").text("4");
                                    }
                                }else
                                if($("#labelEtapa").text()=='4'){
                                    if(validityInfoCard()){
                                        $("#titleStep").text("Cadastrar Senha");
                                        setStepActive(<PasswordRegistry/>);
                                        $("#labelEtapa").text("5");
                                        $("#btnSkipStep").hide();
                                        $("#btnNextStep").hide();
                                        $("#btnRegistry").show();
                                        $("#blockConfigPromotions").show();
                                    }
                                }
                            }}
                            className="btn-warning btnRegistry p-1 mx-2 mt-1 col-12 col-sm-3 col-lg-3">
                                <label className="cursorPointerHover col-12 col-sm-12 col-lg-12 d-flex justify-content-center">Avançar</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-12" id='blockConfigPromotions'>
                        <div className='col-12 col-sm-12 d-flex row justify-content-center'>
                            <div className="col-12 col-sm-12 d-flex justify-content-center">    
                                <input name='receivePromotions' id='inputReceivePromotionRegistry' className='checkBox-25 col-2 col-sm-2 col-lg-2 m-2' type="checkbox"/>
                                <label htmlFor='receivePromotions' className='textSize18 font-bold-300 col-8 col-sm-8 col-lg-8 m-2'>Receber promoções</label>
                            </div>
                            <div className="col-12 col-sm-12 d-flex justify-content-center">    
                                <input name='receivePromotions' id='inputReceiveUpdatingPriceRegistry' className='checkBox-25 col-2 col-sm-2 col-lg-2 m-2' type="checkbox"/>
                                <label htmlFor='receivePromotions' className='textSize18 font-bold-300 col-8 col-sm-8 col-lg-8 m-2'>Receber atualizações de preços</label>
                            </div>
                        </div>
                    </div>
                    <div 
                    id="btnRegistry"
                    className='col-11 col-sm-11 justifyAndAlignCenter btn-warning borderRadius20 p-1 my-3 cursorPointerHover'>
                        <div 
                        onClick={()=>{
                            if(validityInfoPassword()){
                                 if($("#labelEtapa").text()=='5'){
                                     authRegistry();
                                 }
                            }
                        }}
                        className='col-12 col-sm-12 justify-content-center align-items-center row'>
                            <img src={iconRegistry} alt="conect" style={{width:60,height:35}} className="col-1 col-sm-1"/>
                            <label className='textSize28 cursorPointerHover col-4 col-sm-4'>Registrar</label>
                        </div>
                    </div>
                    <label className='text-danger mx-5' id='textAlertFinalRegistry'></label>
                </div>
        </>
    );

    function hideInitial(){
        $("#blockConfigPromotions").hide();
        $("#btnRegistry").hide();
        $("#btnSkipStep").hide();
        $("#btnBackStep").hide();
    }
}
export default RegistryCredentials;