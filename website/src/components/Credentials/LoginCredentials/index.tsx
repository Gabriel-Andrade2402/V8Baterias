import iconRaio from '../../../assets/img/utils/iconRaio.png';
import React from "react";
import axios from "axios";
import $ from 'jquery';
import { BASE_URL } from "../../../utils/requests";

const LoginCredentials = () => {
   var token = "";
   var bodyFormData = new FormData();
   bodyFormData.append("grant_type","password");
   bodyFormData.append("username","cliente");
   bodyFormData.append("password","123456");
   function authLogin(){
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
   function validityCredentials(){
       if($("#emailInputLogin").val()=="" || $("#passwordInputLogin").val()==""){
            $("#textAlertFinal").text("* Preencha todos os campos");
            return false;
       }else{
            $("#textAlertFinal").text("");
           var textEmail =$("#emailInputLogin").val()+"";
           var textPasswd =$("#passwordInputLogin").val()+"";
           if(textEmail.match(".+@.+")==null || textEmail.match("--")!=null){
            $("#emailInputLogin").addClass("inputDanger");
            $("#textAlertEmail").text("O e-mail possui um formato não permitido.");
            return false;
           }else if(textPasswd.match("--")!=null){
            $("#emailInputLogin").removeClass("inputDanger");
            $("#textAlertEmail").text("");
            $("#passwordInputLogin").addClass("inputDanger");
            $("#textAlertSenha").text("A senha possui um formato não permitido.");
            return false;
           }else if(textPasswd.length<8){
            $("#passwordInputLogin").addClass("inputDanger");
            $("#textAlertSenha").text("O tamanho da senha não é compativel com o cadastrado");
            return false;
           }
            $("#emailInputLogin").removeClass("inputDanger");
            $("#textAlertEmail").text("");
            $("#passwordInputLogin").removeClass("inputDanger");
            $("#textAlertSenha").text("");
           return true;
       }
       
   }

   function registryRequest(){
        axios({
            method: "post",
            url: BASE_URL+"/client/login",
            data: {
                strEmail: $("#emailInputLogin").val(),
                strPassword: $("#passwordInputLogin").val()
            },
            headers: {
            "Authorization": token,
            },
        })
        .then(function (response) {
            console.log(response);
            alert(response.data)
        })
        .catch(function (response) {
            console.log(response);
        });
   }

    return (
        <>
            <div className='col-12 col-sm-12 p-3'>
                    <div className='col-12 col-sm-12'>
                        <h3 className='fontColorOrange offset-sm-4 textSize48' >Entrar</h3>
                    </div>
                    <div className='mx-4'>
                        <div className="col-12 col-sm-12 col-lg-12">
                            <label className="textSize18 fontBold">Faça login</label>
                        </div>
                        <div className='col-12 col-sm-12 flexColumn my-3'>
                            <label htmlFor='email' className='textSize15 font-bold-300'>Email/CPF</label>
                            <label className='text-danger' id="textAlertEmail"></label>
                            <input name='email' id='emailInputLogin' placeholder="* Email ou cpf" className='inputData px-3' type="text"/>
                        </div>
                        <div className='col-12 col-sm-12 flexColumn'>
                            <label htmlFor='email' className='textSize15 font-bold-300'>Senha</label>
                            <label className='text-danger' id="textAlertSenha"></label>
                            <input name='email' id='passwordInputLogin' placeholder="* Senha" className='inputData px-3 ' type="password"/>
                        </div>
                    </div>
                    <label className='text-danger mx-5' id='textAlertFinal'></label>
                    <div className='col-12 col-sm-12 col-lg-12 d-flex align-items-end mt-3'>
                        <div className='col-11 col-sm-11 justifyAndAlignCenter btn-dark borderRadius20 p-1 my-3 cursorPointerHover'>
                            <div 
                            onClick={()=>{
                                if(validityCredentials()){
                                    authLogin();
                                }
                            }}
                            className='col-12 col-sm-12 justify-content-center align-items-center row'>
                                <img src={iconRaio} alt="conect" style={{width:60,height:35}} className="col-1 col-sm-1"/>
                                <label className='textSize28 cursorPointerHover  col-4 col-sm-4'>Entrar</label>
                            </div>
                        </div>  
                    </div>
                </div>
        </>
    )
}

export default LoginCredentials;