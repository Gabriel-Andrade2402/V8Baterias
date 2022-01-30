import React from "react";
import { useEffect } from "react";
import '../../../../assets/css/ArticlesConfig.css';
import iconLixeira from '../../../../assets/img/utils/iconLixeira.png';
import axios from "axios";
import $ from 'jquery';
import { BASE_URL } from "../../../../utils/requests";

const ArticlePersonInfo = () =>{
    var userJson = JSON.parse(sessionStorage.getItem("userJson")+"");
    var token = "";
    var bodyFormData = new FormData();
    bodyFormData.append("grant_type","password");
    bodyFormData.append("username","cliente");
    bodyFormData.append("password","123456");
    useEffect(() => {
        initializeInfoPersonal();
      }, []);
    return (
        <>
            <div className="col-12 col-sm-12 backgroun-3d3d m-0 p-3">
                <label className="titleArticle">Informações pessoais</label>
            </div>            
            <img style={{display:"none"}} id='imgLixeira' src={iconLixeira}/>
            <div className="col-12 col-sm-12 py-3 px-5">
                <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12"><label className="labelInput">Nome</label></div>
                    <label className='text-danger' id="textAlertPersonalipPersonalName"></label>
                    <div className="col-12 col-sm-12 mt-1">
                        <input type='text' id='ipPersonalName' onChange={()=>{
                            userJson.strName=$("#ipPersonalName").val();
                        }} className="col-7 px-3 col-sm-7"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <div className="col-12 col-sm-12"><label className="labelInput">E-mail</label></div>
                    <label className='text-danger' id="textAlertPersonalipPersonalMail"></label>
                    <div className="col-12 col-sm-12 mt-1">
                        <input type='text' id='ipPersonalMail' readOnly={true} className="col-7 px-3 col-sm-7"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <div className="col-12 col-sm-12"><label className="labelInput">Celular</label></div>
                    <label className='text-danger' id="textAlertPersonalipPersonalCel"></label>
                    <div className="col-12 col-sm-12 mt-1">
                        <input type='text' id='ipPersonalCel' onChange={()=>{
                            userJson.strTelephone = $("#ipPersonalCel").val()
                        }} maxLength={11} className="col-7 px-3 col-sm-7"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <div className="col-12 col-sm-12"><label className="labelInput">CPF</label></div>
                    <label className='text-danger' id="textAlertPersonalipPersonalCpf"></label>
                    <div className="col-12 col-sm-12 mt-1">
                        <input type='text' id='ipPersonalCpf'
                        maxLength={11} readOnly={true} className="col-7 px-3 col-sm-7"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3" id='listAddress'>
                    <label className="subtitleArticle">Endereços</label>
                    <div className="col-12 col-sm-12 p-3 border-bottom" id='blockAddress1'>
                        <div className="col-10 col-sm-10 col-lg-10 d-flex justify-content-end">
                            <div className="col-1 col-sm-1 col-lg-1 d-flex justify-content-center"
                            onClick={()=>{removeAddress(1)}}>
                                <img className="col-12 col-sm-12 btn btn-danger" id='imgLixeiraindex1' src={iconLixeira}/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Rua</label></div>
                            <label className='text-danger' id="textAlertPersonalroadAddress1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' id='roadAddress1' onChange={()=>{
                                    userJson.listAddress[0].strRoad=$("#roadAddress1").val()
                                }} className="col-6 px-3 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Número</label></div>
                            <label className='text-danger' id="textAlertPersonalnumberAddress1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='number' id='numberAddress1' onChange={()=>{
                                    userJson.listAddress[0].numResidence=$("#numberAddress1").val()
                                }} className="col-6 px-3 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Cep</label></div>
                            <label className='text-danger' id="textAlertPersonalcepAddress1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' maxLength={8} id='cepAddress1' onChange={()=>{
                                var number =$("#cepAddress1").val()+"";
                                if(number.length==8){
                                    $("#cepAddress1").val(
                                        number.substring(0,5)+"-"+
                                        number.substring(5,8)
                                    );
                                }
                                userJson.listAddress[0].strCep=$("#cepAddress1").val()
                                }} className="col-6 px-3 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Ponto de referência</label></div>
                            <label className='text-danger' id="textAlertPersonalreferencePointAddress1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' id='referencePointAddress1' onChange={()=>{
                                    userJson.listAddress[0].strReferencePoint=$("#referencePointAddress1").val()
                                }} className="col-6 px-3 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Observações</label></div>
                            <label className='text-danger' id="textAlertPersonalobsPointAddress1"></label>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' id='obsPointAddress1' onChange={()=>{
                                    userJson.listAddress[0].strObservation=$("#obsPointAddress1").val()
                                }} className="col-6 px-3 col-sm-6"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 margin-left-8">
                        <div 
                        onClick={()=>{addNewAddress()}}
                        id='btnAddAddress'
                        className="col-12 col-sm-12 rounded p-2 background-ffa d-flex justify-content-center btn-add-address">
                            Adicionar novo endereço
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 margin-top-15 d-flex justify-content-end">
                    <div onClick={()=>{
                        if(window.confirm("Deseja atualizar os dados realmente?")){
                            if(validityDatePersonalInfo()){
                                authPersonalInfo();
                            }
                        }
                    }}
                    className="col-12 col-sm-5 btn-success p-1 rounded d-flex justify-content-center btn-confirm">
                        Confirmar alterações
                    </div>
                </div>
            </div>
        </>
    );
    function initializeInfoPersonal(){
        $("#ipPersonalName").val(userJson.strName);
        $("#ipPersonalMail").val(userJson.strEmail);
        var cpf =userJson.strCpf+"";
        if(cpf.length==11){
            $("#ipPersonalCpf").val(
                cpf.substring(0,3)+"."+
                cpf.substring(3,6)+"."+
                cpf.substring(6,9)+"-"+
                cpf.substring(9,11)
            );
        }
        var number =userJson.strTelephone+"";
        if(number.length==11){
            $("#ipPersonalCel").val(
                "("+number.substring(0,2)+") "+
                number.substring(2,3)+" "+
                number.substring(3,7)+"-"+
                number.substring(7,11)
            );
        }
        if(userJson.listAddress.length>1){
            userJson.listAddress.forEach(function(item: any,index:number){
                index +=1;
                if(index==1){
                    $("#roadAddress1").val(item.strRoad);
                    $("#numberAddress1").val(item.numResidence);
                    $("#cepAddress1").val(item.strCep);
                    $("#referencePointAddress1").val(item.strReferencePoint);
                    $("#obsPointAddress1").val(item.strObservation);
                    onchangecep("cepAddress1");
                }else{
                    $("#blockAddress"+(index-1)).after(createDivBlockAddress(index));
                    $("#cepAddress"+index).change(function(){
                        onchangecep("cepAddress"+index);
                    });
                    $("#imgLixeira"+index).click(function(){
                        removeAddress(index);
                    });
                    $("#roadAddress"+index).val(item.strRoad);
                    $("#roadAddress"+index).change(function(){
                       userJson.listAddress[index-1].strRoad=$("#roadAddress"+index).val()
                    });
                    $("#numberAddress"+index).val(item.numResidence);
                    $("#numberAddress"+index).change(function(){
                        userJson.listAddress[index-1].numResidence=$("#numberAddress"+index).val()
                    });
                    $("#cepAddress"+index).val(item.strCep);
                    $("#cepAddress"+index).change(function(){
                        userJson.listAddress[index-1].strCep=$("#cepAddress"+index).val()
                    });
                    $("#referencePointAddress"+index).val(item.strReferencePoint);
                    $("#referencePointAddress"+index).change(function(){
                        userJson.listAddress[index-1].strReferencePoint=$("#referencePointAddress"+index).val()
                    });
                    $("#obsPointAddress"+index).val(item.strObservation);
                    $("#obsPointAddress"+index).change(function(){
                        userJson.listAddress[index-1].strObservation=$("#obsPointAddress"+index).val()
                    });
                    onchangecep("cepAddress"+index);
                }
            });
        }else if(userJson.listAddress.length==1){
            $("#roadAddress1").val(userJson.listAddress[0].strRoad);
            $("#numberAddress1").val(userJson.listAddress[0].numResidence);
            $("#cepAddress1").val(userJson.listAddress[0].strCep);
            $("#referencePointAddress1").val(userJson.listAddress[0].strReferencePoint);
            $("#obsPointAddress1").val(userJson.listAddress[0].strObservation);
        }
    }
    function createDivBlockAddress(index:any){
        var urlIconLixeira = $("#imgLixeira").attr("src");
        return "<div class=\"col-12 col-sm-12 p-3 border-bottom\" id='blockAddress"+index+"'>"+
        "<div class=\"col-10 col-sm-10 col-lg-10 d-flex justify-content-end\">"+
            "<div class=\"col-1 col-sm-1 col-lg-1 d-flex justify-content-center\">"+
                "<img class=\"col-12 col-sm-12 btn btn-danger\" id='imgLixeira"+index+"' src=\""+urlIconLixeira+"\" col-lg-2\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Rua</label></div>"+
            "<label class='text-danger' id=\"textAlertPersonalroadAddress"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='text' id='roadAddress"+index+"' class=\"col-6 px-3 col-sm-6\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Número</label></div>"+
            "<label class='text-danger' id=\"textAlertPersonalnumberAddress"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='number' id='numberAddress"+index+"' class=\"col-6 px-3 col-sm-6\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Cep</label></div>"+
            "<label class='text-danger' id=\"textAlertPersonalcepAddress"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='text' maxLength='8' id='cepAddress"+index+"' class=\"col-6 px-3 col-sm-6\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Ponto de referência</label></div>"+
            "<label class='text-danger' id=\"textAlertPersonalreferencePointAddress"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='text' id='referencePointAddress"+index+"' class=\"col-6 px-3 col-sm-6\"/>"+
            "</div>"+
        "</div>"+
        "<div class=\"col-12 col-sm-12\">"+
            "<div class=\"col-12 col-sm-12\"><label class=\"labelInput\">Observações</label></div>"+
            "<label class='text-danger' id=\"textAlertPersonalobsPointAddress"+index+"\"></label>"+
            "<div class=\"col-12 col-sm-12 mt-1\">"+
                "<input type='text' id='obsPointAddress"+index+"' class=\"col-6 px-3 col-sm-6\"/>"+
            "</div>"+
        "</div>"+
        "</div>";
    }
    function onchangecep(name:string){
        var number =$("#"+name).val()+"";
        if(number.length==8){
            $("#"+name).val(
                number.substring(0,5)+"-"+
                number.substring(5,8)
            );
        }
    }
    function addNewAddress(){
        var index = userJson.listAddress.length+1;
        $("#btnAddAddress").parent().before(createDivBlockAddress(index));
        $("#imgLixeira"+index).click(function(){
            removeAddress(index);
        });
        userJson.listAddress.push(
            {
                strRoad: '',
                numResidence: 0,
                strCep: '',
                strReferencePoint: '',
                strObservation: ''
            }
        );
        
    }
    function removeAddress(index:number){
        $("#blockAddress"+(index)).remove();
        userJson.listAddress.splice(index-1);
    }
    function authPersonalInfo(){
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
            updateData();
            })
            .catch(function (response) {
            console.log(response);
            });
    }
    function updateData(){
        var lastUserJson = JSON.parse(sessionStorage.getItem("userJson")+"");
        axios({
            method: "post",
            url: BASE_URL+"/client/update",
            data: [lastUserJson,userJson],
            headers: {
            "Authorization": token,
            },
        })
        .then(function (response) {
            sessionStorage.setItem("userJson",JSON.stringify(response.data));
        })
        .catch(function (response) {
          console.log(response);
        });
    }
    function validityDatePersonalInfo(){
        var permitConnect = true;
        if(!checkMatcher("ipPersonalName")){
            permitConnect = false;
        }
        if(!checkMatcher("textAlertPersonalEmail")){
            permitConnect = false;
        }
        if(!checkMatcher("textAlertPersonalCel")){
            permitConnect = false;
        }
        if(!checkMatcher("ipPersonalCpf")){
            permitConnect = false;
        }
        userJson.listAddress.forEach(function(item: any,index:number){
            if(!checkMatcher("roadAddress"+(index+1))){
                permitConnect = false;
            }
            if(!checkMatcher("numberAddress"+(index+1))){
                permitConnect = false;
            }
            if(!checkMatcher("cepAddress"+(index+1))){
                permitConnect = false;
            }
            if(!checkMatcher("referencePointAddress"+(index+1))){
                permitConnect = false;
            }
            if(!checkMatcher("obsPointAddress"+(index+1))){
                permitConnect = false;
            }
        });
        return permitConnect;
    }
    function checkMatcher(nameInput:any){
        var bool = true;
        var input = $("#"+nameInput);
        var textInput = $("#"+nameInput).val()+"";
        if(textInput.match("--")!=null || textInput.match("[0-9]*=[0-9]*")!=null
        || textInput.match("\\s(OR|Or|oR|or)\\s")!=null){
            input.addClass("inputDanger");
            $("#textAlertPersonal"+nameInput).text("O formato não é permitido");
            bool = false;   
        }else{
            input.removeClass("inputDanger");
            $("#textAlertPersonal"+nameInput).text("");
        }
        return bool;
    }
}

export default ArticlePersonInfo;