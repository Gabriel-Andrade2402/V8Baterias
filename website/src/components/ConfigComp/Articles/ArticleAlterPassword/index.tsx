import React from "react";
import axios from "axios";
import $ from 'jquery';
import { BASE_URL } from "../../../../utils/requests";

const ArticleAlterPassword = () =>{
    var userJson = JSON.parse(sessionStorage.getItem("userJson")+"");
    var token = "";
    var bodyFormData = new FormData();
    bodyFormData.append("grant_type","password");
    bodyFormData.append("username","cliente");
    bodyFormData.append("password","123456");
    function validityDateAlterPassword(){
        var checkFill = true;
        if($("#ipLastPassword1").val()=='' || $("#ipLastPassword2").val()==''){
            $("#textAlertPreviousPassword").text("Preencha todos os campos");
            checkFill= false;
        }else{
            $("#textAlertPreviousPassword").text("");
        }
        if($("#ipNextPassword1").val()=='' || $("#ipNextPassword2").val()==''){
            $("#textAlertNextPassword").text("Preencha todos os campos");
            checkFill= false;
        }else{
            $("#textAlertNextPassword").text("");
        }
        if(checkFill){
            var permitConnect = true;
            if($("#ipLastPassword1").val()==$("#ipLastPassword2").val()){
                $("#ipLastPassword1").removeClass("inputDanger");
                $("#ipLastPassword2").removeClass("inputDanger");
                if(!checkMatcherAlterPassword("ipLastPassword1","textAlertPreviousPassword")){
                    permitConnect = false;
                }
                if($("#ipNextPassword1").val()==$("#ipNextPassword2").val()){
                    if(!checkMatcherAlterPassword("ipNextPassword1","textAlertNextPassword")){
                        $("#ipNextPassword2").addClass("inputDanger");
                        permitConnect = false;
                    }else{
                        $("#ipNextPassword2").removeClass("inputDanger");
                    }
                }else{
                    permitConnect=false;
                    $("#textAlertNextPassword").text("As senhas não estão iguais.");
                }
            }else{
                permitConnect=false;
                $("#ipLastPassword1").addClass("inputDanger");
                $("#ipLastPassword2").addClass("inputDanger");
                $("#textAlertPreviousPassword").text("As senhas não estão iguais.");
            }
            if(permitConnect){
                authAlterPassword();
            }
        }
    }
    function checkMatcherAlterPassword(nameInput:any,nameAlertInput:any){
        var bool = true;
        var input = $("#"+nameInput);
        var textInput = $("#"+nameInput).val()+"";
        if(textInput.match("--")!=null || textInput.match("[0-9]*=[0-9]*")!=null
        || textInput.match("\\s(OR|Or|oR|or)\\s")!=null){
            input.addClass("inputDanger");
            $("#"+nameAlertInput).text("A senha possui um formato não permitido.");
            bool = false;   
        }else{
            input.removeClass("inputDanger");
            $("#"+nameAlertInput).text("");
        }
        return bool;
    }
    async function authAlterPassword(){
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
            userJson.strPassword = $("#ipNextPassword1").val();
            loginRequest(userJson.strEmail,$("#ipLastPassword1").val()+"")
            
            })
            .catch(function (response) {
            console.log(response);
            });
    }
    async function updateDataAlterPassword(){
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
            if(response.data!=''){
                sessionStorage.setItem("userJson",JSON.stringify(response.data));
                alert("Senha alterada");
                window.location.href=window.location.href;
            }else{
                alert('Ocorreu algum erro!');
            }
        })
        .catch(function (response) {
          console.log(response);
        });
    }
    async function loginRequest(email:String,password:String){
        axios({
            method: "post",
            url: BASE_URL+"/client/login",
            data: {
                strEmail: email,
                strPassword: password
            },
            headers: {
            "Authorization": token,
            },
        })
        .then(function (response) {
            if(response.data!=''){
                updateDataAlterPassword();
            }else{
                alert('Senha antiga incorreta!')
            }
        })
        .catch(function (response) {
            alert("Ocorreu um erro inesperado.")
            return false;
        });
   }
    return (
        <>
            <div className="col-12 backgroun-3d3d col-sm-12 p-3">
                <label className="titleArticle">Alterar senha</label>
            </div>
            <div className="col-12 col-sm-12 py-3 px-5">
                <div className="col-12 col-sm-12 mt-3">
                    <label className="subtitleArticle">Senha antiga</label>
                    <div className="col-12 col-sm-12 p-3">
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Senha anterior</label></div>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='password' id='ipLastPassword1' className="col-6 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Digite a senha antiga novamente</label></div>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='password' id='ipLastPassword2' className="col-6 col-sm-6"/>
                            </div>
                        </div>
                        <label className='text-danger' id="textAlertPreviousPassword"></label>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <label className="subtitleArticle">Senha nova</label>
                    <div className="col-12 col-sm-12 p-3 border-bottom">
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Senha nova</label></div>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='password' id='ipNextPassword1' className="col-6 col-sm-6"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Digite novamente a senha nova</label></div>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='password' id='ipNextPassword2' className="col-6 col-sm-6"/>
                            </div>
                        </div>
                        <label className='text-danger' id="textAlertNextPassword"></label>
                    </div>
                </div>
                <div className="col-12 col-sm-12 margin-top-15 d-flex justify-content-end">
                    <div onClick={()=>{
                        validityDateAlterPassword()
                    }}
                    className="col-12 col-sm-5 btn-success p-1 rounded d-flex justify-content-center btn-confirm">
                        Confirmar alterações
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticleAlterPassword;