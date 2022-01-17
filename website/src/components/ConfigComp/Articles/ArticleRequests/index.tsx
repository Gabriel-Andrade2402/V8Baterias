import React from "react";
import $ from 'jquery';
import imgBateriaMoura from '../../../../assets/img/baterias/bateriaMoura.png';
import imgBateriaCral from '../../../../assets/img/baterias/bateriaCral.png';
import imgBateriaHeliar from '../../../../assets/img/baterias/bateriaHeliar.png';

const ArticleRequests = () =>{
    return (
        <>
            <div className="col-12 col-sm-12 p-3">
                <label className="titleArticle">Pedidos</label>
            </div>
            <div className="col-12 col-sm-12 py-3">
                <div className="col-12 col-sm-12 mt-3 border-bottom">
                    <label className="subtitleArticle">Pedidos em andamento</label>
                    <div className="col-12 col-sm-12">
                        <div className="col-12 col-sm-12 p-2 mb-2 row background-ffa">
                            <div className="col-3 col-sm-3">
                                <img src={imgBateriaMoura} className='col-12 col-sm-12'/>
                            </div>
                            <div className="col-sm-9 col-9 p-3">
                                <div className="col-12 col-sm-12 d-flex justify-content-center">
                                    <label className="titleRequest">NUASDAD87Q9WE45QEQW</label>
                                </div>
                                <div className="col-12 col-sm-12 row mt-3">
                                    <div className="col-6 col-sm-6">
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                            <label className="col-sm-4 col-6">Moura</label>
                                        </div> 
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                            <label className="col-sm-4 col-6">Carro</label>
                                        </div> 
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-4 col-6 subtitle-description">Amperagem:</label>
                                            <label className="col-sm-4 col-6">40 Ah</label>
                                        </div> 
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-9 col-6 subtitle-description">Tempo estimado de vida:</label>
                                            <label className="col-sm-3 col-6">2 anos</label>
                                        </div> 
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-4 col-6 subtitle-description">Quantidade:</label>
                                            <label className="col-sm-4 col-6">3</label>
                                        </div>
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-4 col-6 subtitle-description">Total:</label>
                                            <label className="col-sm-4 col-6">R$ 300,00</label>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 d-flex justify-content-center mt-3">
                                    <label className="text-situation">Em andamento</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 p-2 mb-2 row background-ffa">
                                <div className="col-3 col-sm-3">
                                    <img src={imgBateriaHeliar} className='col-12 col-sm-12'/>
                                </div>
                                <div className="col-sm-9 col-9 p-3">
                                    <div className="col-12 col-sm-12 d-flex justify-content-center">
                                        <label className="titleRequest">ASDJAIW48EASD98</label>
                                    </div>
                                    <div className="col-12 col-sm-12 row mt-3">
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                                <label className="col-sm-4 col-6">Heliar</label>
                                            </div> 
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                                <label className="col-sm-4 col-6">Caminhão</label>
                                            </div> 
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Amperagem:</label>
                                                <label className="col-sm-4 col-6">70 Ah</label>
                                            </div> 
                                        </div>
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-9 col-6 subtitle-description">Tempo estimado de vida:</label>
                                                <label className="col-sm-3 col-6">5 anos</label>
                                            </div> 
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Quantidade:</label>
                                                <label className="col-sm-4 col-6">4</label>
                                            </div>
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Total:</label>
                                                <label className="col-sm-4 col-6">R$ 500,00</label>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 d-flex justify-content-center mt-3">
                                        <label className="text-situation">Em andamento</label>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 mt-3 border-bottom">
                    <label className="subtitleArticle">Pedidos finalizados</label>
                    <div className="col-12 col-sm-12">
                    <div className="col-12 col-sm-12 p-2 mb-2 row background-fefe">
                            <div className="col-3 col-sm-3">
                                <img src={imgBateriaMoura} className='col-12 col-sm-12'/>
                            </div>
                            <div className="col-sm-9 col-9 p-3">
                                <div className="col-12 col-sm-12 d-flex justify-content-center">
                                    <label className="titleRequest">NUASDAD87Q9WE45QEQW</label>
                                </div>
                                <div className="col-12 col-sm-12 row mt-3">
                                    <div className="col-6 col-sm-6">
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                            <label className="col-sm-4 col-6">Moura</label>
                                        </div> 
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                            <label className="col-sm-4 col-6">Carro</label>
                                        </div> 
                                        
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-9 col-6 subtitle-description">Tempo estimado de vida:</label>
                                            <label className="col-sm-3 col-6">2 anos</label>
                                        </div> 
                                        <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                            <label className="col-sm-4 col-6 subtitle-description">Amperagem:</label>
                                            <label className="col-sm-4 col-6">40 Ah</label>
                                        </div> 
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 row mt-3 disabled" id='moreInformationsRequest2'>
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-6 col-6 subtitle-description">Data da compra:</label>
                                                <label className="col-sm-4 col-6">08/01/2022</label>
                                            </div> 
                                            
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Quantidade:</label>
                                                <label className="col-sm-4 col-6">3</label>
                                            </div> 
                                        </div>
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-10 col-6 subtitle-description">Data da finalização do pedido:</label>
                                                <label className="col-sm-2 col-6">08/01/2022</label>
                                            </div>
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Total:</label>
                                                <label className="col-sm-4 col-6">R$ 500,00</label>
                                            </div> 
                                        </div>
                                    </div>
                                    <div onClick={()=>{$("#moreInformationsRequest2").toggleClass('disabled')}} className="font-size-25 mt-2 col-12 font-size-18 col-sm-12 btn-add-address rounded d-flex justify-content-center">
                                        Mais informações
                                    </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 p-2 mb-2 row background-fefe">
                                <div className="col-3 col-sm-3">
                                    <img src={imgBateriaHeliar} className='col-12 col-sm-12'/>
                                </div>
                                <div className="col-sm-9 col-9 p-3">
                                    <div className="col-12 col-sm-12 d-flex justify-content-center">
                                        <label className="titleRequest">ASDJAIW48EASD98</label>
                                    </div>
                                    <div className="col-12 col-sm-12 row mt-3">
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-3 col-6 subtitle-description">Marca:</label>
                                                <label className="col-sm-4 col-6">Heliar</label>
                                            </div> 
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-3 col-6 subtitle-description">Veiculo:</label>
                                                <label className="col-sm-4 col-6">Caminhão</label>
                                            </div> 
                                        </div>
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-9 col-6 subtitle-description">Tempo estimado de vida:</label>
                                                <label className="col-sm-3 col-6">5 anos</label>
                                            </div> 
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Amperagem:</label>
                                                <label className="col-sm-4 col-6">70 Ah</label>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 row mt-3 disabled" id='moreInformationsRequest1'>
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-6 col-6 subtitle-description">Data da compra:</label>
                                                <label className="col-sm-4 col-6">08/01/2022</label>
                                            </div> 
                                            
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Quantidade:</label>
                                                <label className="col-sm-4 col-6">3</label>
                                            </div> 
                                        </div>
                                        <div className="col-6 col-sm-6">
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-10 col-6 subtitle-description">Data da finalização do pedido:</label>
                                                <label className="col-sm-2 col-6">08/01/2022</label>
                                            </div>
                                            <div className="col-12 col-sm-12 row d-flex align-items-center"> 
                                                <label className="col-sm-4 col-6 subtitle-description">Total:</label>
                                                <label className="col-sm-4 col-6">R$ 500,00</label>
                                            </div> 
                                        </div>
                                    </div>
                                    <div onClick={()=>{$("#moreInformationsRequest1").toggleClass('disabled')}} className="col-12 font-size-25 mt-2 col-sm-12 btn-add-address rounded d-flex justify-content-center">
                                        Mais informações
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticleRequests;