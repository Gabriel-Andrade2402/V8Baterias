import React from "react";
import '../../../../assets/css/ArticlesConfig.css';

const ArticlePersonInfo = () =>{
    return (
        <>
            <div className="col-12 col-sm-12 p-3">
                <label className="titleArticle">Informações pessoais</label>
            </div>
            <div className="col-12 col-sm-12 py-3 px-5">
                <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12"><label className="labelInput">Nome</label></div>
                    <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-7 col-sm-7"/></div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <div className="col-12 col-sm-12"><label className="labelInput">E-mail</label></div>
                    <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-7 col-sm-7"/></div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <div className="col-12 col-sm-12"><label className="labelInput">Celular</label></div>
                    <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-7 col-sm-7"/></div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <div className="col-12 col-sm-12"><label className="labelInput">Cpf</label></div>
                    <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-7 col-sm-7"/></div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <label className="subtitleArticle">Endereços</label>
                    <div className="col-12 col-sm-12 p-3 border-bottom">
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Rua</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Número</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='number' className="col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Cep</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Ponto de referência</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Observações</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-6 col-sm-6"/></div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 margin-left-8">
                        <div className="col-12 col-sm-12 rounded p-2 background-ffa d-flex justify-content-center btn-add-address">
                            Adicionar novo endereço
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

export default ArticlePersonInfo;