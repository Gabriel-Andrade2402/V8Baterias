import React from "react";

const ArticleAlterPassword = () =>{
    return (
        <>
            <div className="col-12 col-sm-12 p-3">
                <label className="titleArticle">Alterar senha</label>
            </div>
            <div className="col-12 col-sm-12 py-3 px-5">
                <div className="col-12 col-sm-12 mt-3">
                    <label className="subtitleArticle">Senha antiga</label>
                    <div className="col-12 col-sm-12 p-3">
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Senha anterior</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Digite a senha antiga novamente</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='number' className="col-6 col-sm-6"/></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3">
                    <label className="subtitleArticle">Senha nova</label>
                    <div className="col-12 col-sm-12 p-3 border-bottom">
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Senha nova</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='text' className="col-6 col-sm-6"/></div>
                        </div>
                        <div className="col-12 col-sm-12">
                            <div className="col-12 col-sm-12"><label className="labelInput">Digite novamente a senha nova</label></div>
                            <div className="col-12 col-sm-12 mt-1"><input type='number' className="col-6 col-sm-6"/></div>
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

export default ArticleAlterPassword;