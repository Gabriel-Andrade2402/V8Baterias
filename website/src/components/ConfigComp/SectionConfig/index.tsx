import React,{ useState } from "react";
import '../../../assets/css/sectionConfig.css'
import imgLogin from '../../../assets/img/utils/login.png';
import ArticlePersonInfo from "../Articles/ArticlePersonalInfo";
import ArticleAlterPassword from "../Articles/ArticleAlterPassword";
import ArticleRequests from "../Articles/ArticleRequests";
import ArticleCart from "../Articles/ArticleCart";
import ArticleHelp from "../Articles/ArticleHelp";
import ArticlePaymentForm from "../Articles/ArticlePaymentForm";
import $ from 'jquery';

const SectionConfig = () => {
    const [article,setArticle] = useState(<ArticlePersonInfo/>);
    return (
        <>
        <div className="row">
            <div className="col-12 col-sm-12 divTitle">
                <div className="col-3 col-sm-3">
                    <img className="col-3 col-sm-3" src={imgLogin}/>
                    <label className="titlePage">Conta</label>
                </div>
            </div>
            <aside className="col-12 col-sm-3 border-right">
                <div id='blocoAsidePersonInfo' className="col-12 col-sm-12 blocoAside d-flex justify-content-center blocoAsideChecked" onClick={()=>{
                    setArticle(<ArticlePersonInfo/>);
                    $(".blocoAsideChecked").toggleClass('blocoAsideChecked');
                    $("#blocoAsidePersonInfo").toggleClass('blocoAsideChecked');
                }}>
                    <label className="titleAside">Informações pessoais</label>
                </div>
                <div id='blocoAsidePaymentForm' className="col-12 col-sm-12 blocoAside d-flex justify-content-center" onClick={()=>{
                    setArticle(<ArticlePaymentForm/>);
                    $(".blocoAsideChecked").toggleClass('blocoAsideChecked');
                    $("#blocoAsidePaymentForm").toggleClass('blocoAsideChecked');
                }}>
                    <label className="titleAside">Formas de pagamento</label>
                </div>
                <div id='blocoAsideAlterPassword' className="col-12 col-sm-12 blocoAside d-flex justify-content-center" onClick={()=>{
                    setArticle(<ArticleAlterPassword/>);
                    $(".blocoAsideChecked").toggleClass('blocoAsideChecked');
                    $("#blocoAsideAlterPassword").toggleClass('blocoAsideChecked');
                }}>
                    <label className="titleAside">Trocar senha</label>
                </div>
                <div id='blocoAsideRequests' className="col-12 col-sm-12 blocoAside d-flex justify-content-center" onClick={()=>{
                    setArticle(<ArticleRequests/>);
                    $(".blocoAsideChecked").toggleClass('blocoAsideChecked');
                    $("#blocoAsideRequests").toggleClass('blocoAsideChecked');
                }}>
                    <label className="titleAside">Pedidos</label>
                </div>
                <div id='blocoAsideCart' className="col-12 col-sm-12 blocoAside d-flex justify-content-center" onClick={()=>{
                    setArticle(<ArticleCart/>);
                    $(".blocoAsideChecked").toggleClass('blocoAsideChecked');
                    $("#blocoAsideCart").toggleClass('blocoAsideChecked');
                }}>
                    <label className="titleAside">Carrinho</label>
                </div>
                <div id='blocoAsideHelp' className="col-12 col-sm-12 blocoAside d-flex justify-content-center" onClick={()=>{
                    setArticle(<ArticleHelp/>);
                    $(".blocoAsideChecked").toggleClass('blocoAsideChecked');
                    $("#blocoAsideHelp").toggleClass('blocoAsideChecked');
                }}>
                    <label className="titleAside">Ajuda</label>
                </div>
            </aside>
            <section className="col-12 col-sm-9 p-0">
                {article}
            </section>
        </div>
        </>
    )
}
export default SectionConfig;