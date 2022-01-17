import React from "react";
import '../../../../assets/css/ArticlesConfig.css';
import iconCard from '../../../../assets/img/utils/iconPaymentTypes.png';

const ArticlePaymentForm = () =>{
    return (
        <>
            <div className="col-12 col-sm-12 p-3">
                <label className="titleArticle">Formas de pagamento</label>
            </div>
            <div className="col-12 col-sm-12 py-3 px-5">
                <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12">
                        <img className="col-3 col-sm-3" src={iconCard}/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <label className="subtitleArticle">Cartões cadastrados</label>
                    <div className="col-12 col-sm-12 p-3 border-bottom">
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Número do cartão</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="px-2 col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Data de expiração</label></div>
                            <div className="col-12 col-sm-12 mt-1">
                                <input type='text' placeholder="MM" className="px-2 col-1 col-sm-1"/>
                                <label className="font-size-18 mx-2">/</label>
                                <input type='text' placeholder="YYYY" className=" px-2 col-2 col-sm-2"/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Nome do titular</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="px-2 col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Código de segurança</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='number' className="px-2 col-3 col-sm-3"/></div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 margin-left-8">
                        <div className="col-12 col-sm-12 rounded p-2 background-ffa d-flex justify-content-center btn-add-address">
                            Cadastrar novo cartão
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 margin-top-15 d-flex justify-content-end">
                    <div className="col-5 col-sm-5 btn-success p-1 rounded d-flex justify-content-center btn-confirm">
                        Confirmar alterações
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticlePaymentForm;