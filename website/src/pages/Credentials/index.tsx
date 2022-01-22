import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/Credentials.css';
import iconRaio from '../../assets/img/utils/iconRaio.png';
import iconHome from '../../assets/img/utils/iconHome.png';
import iconStore from '../../assets/img/utils/iconStoreWhite.png';
import iconRegistry from '../../assets/img/utils/iconRegistry.png';
import iconPerson from '../../assets/img/utils/login.png';
import { Link } from "react-router-dom";
import logomarca from '../../../src/assets/img/BV8_Logo.png';
import iconInstagram from '../../../src/assets/img/utils/iconInstagram.png';
import iconFacebook from '../../../src/assets/img/utils/iconFacebook.png';
import iconYoutube from '../../../src/assets/img/utils/iconYoutube.png';
import imgRodape from '../../../src/assets/img/rodape.png';
import $ from 'jquery';

const Credentials = () => {
    return (
      <>
        <header>
            <div className='col-12 col-sm-12 mx-0 bg-dark px-5 py-2'>
                <Link className="col-12 mx-4" to="/">
                    <img src={logomarca} alt="V8 Baterias" className="col-4 col-sm-1 offset-sm-5 offset-3"/>
                </Link>
            </div>
            <div className="col-sm-12 col-12 p-2 row bg-dark m-0">
                <div className="col-12 col-sm-6 px-5 mt-2">
                    <Link className="col-12 col-sm-11 btn-light btn-lg row justify-content-center textDecorationNone" to="/">
                        <div className="col-1 col-sm-1">
                            <img src={iconHome} alt="home" style={{height:30,width:30}} className="col-12 col-sm-12"/>
                        </div>
                        <div className="col-3 col-sm-3 marginLeft10 textSize23">
                            Home
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 px-5 mt-2">
                    <Link className="col-12 col-sm-11 btn-warning btn-lg row justify-content-center textDecorationNone" to="/loja">
                        <div className="col-1 col-sm-1">
                            <img src={iconStore} alt="home" style={{height:35,width:35}} className="col-12 col-sm-12"/>
                        </div>
                        <div className="col-3 col-sm-3 marginLeft10 textSize23 colorTextWhite">
                            Loja
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-sm-12 col-12 p-2 row bg-light m-0 px-5 row align-items-center">
                <img src={iconPerson} alt="conect" style={{height:45,width:70}} className="col-1 col-sm-1"/>
                <h4 className='col-11 col-sm-11'>
                    Conectar-se
                </h4>
            </div>
        </header>
        <section className='col-12 col-sm-12 mx-0 row backgroundGradientOrangeFFA'>
            <article className='col-12 col-sm-6 articleLogin p-4'>
                <div className='col-12 col-sm-12 p-3'>
                    <div className='col-12 col-sm-12'>
                        <h3 className='fontColorOrange offset-sm-4 textSize48' >Entrar</h3>
                    </div>
                    <div className='mx-4'>
                        <div className='col-12 col-sm-12 flexColumn my-3'>
                            <label htmlFor='email' className='textSize18 fontBold'>Email/CPF</label>
                            <input name='email' placeholder="* Email ou cpf" className='inputData px-3' type="text"/>
                        </div>
                        <div className='col-12 col-sm-12 flexColumn'>
                            <label htmlFor='email' className='textSize18 fontBold'>Senha</label>
                            <input name='email' placeholder="* Senha" className='inputData px-3 ' type="password"/>
                        </div>
                    </div>
                    <div className='col-11 col-sm-11 justifyAndAlignCenter btn-dark borderRadius20 p-1 my-3 cursorPointerHover'>
                        <div className='col-12 col-sm-12 justify-content-center align-items-center row'>
                            <img src={iconRaio} alt="conect" style={{width:60,height:35}} className="col-1 col-sm-1"/>
                            <label className='textSize28 cursorPointerHover  col-4 col-sm-4'>Entrar</label>
                        </div>
                    </div>
                </div>
            </article>
            <article className='col-12 col-sm-6 articleRegistry p-4'>
                <div className='col-12 col-sm-12 p-3'>
                    <div className='col-12 col-sm-12'>
                        <h3 className='fontColorOrange offset-sm-3 textSize48' >Registrar-se</h3>
                    </div>
                    <div className='mx-4'>
                        <div className='col-12 col-sm-12 flexColumn my-1'>
                            <label htmlFor='email' className='textSize18 fontBold'>Email/CPF</label>
                            <input name='email' placeholder="* Email ou cpf" className='inputDataSmall px-3' type="text"/>
                        </div>
                        <div className='col-12 col-sm-12 flexColumn'>
                            <label htmlFor='email' className='textSize18 fontBold'>Nome completo</label>
                            <input name='email' placeholder="* Nome" className='inputDataSmall px-3 ' type="text"/>
                        </div>
                        <div className='col-12 col-sm-12 flexColumn'>
                            <label htmlFor='email' className='textSize18 fontBold'>CPF</label>
                            <input name='email' placeholder="* CPF" className='inputDataSmall px-3 ' type="text"/>
                        </div>
                        <div className='col-12 col-sm-12 flexColumn'>
                            <label htmlFor='email' className='textSize18 fontBold'>Senha</label>
                            <input name='email' placeholder="* Senha" className='inputDataSmall px-3 ' type="password"/>
                        </div>
                        <div className='col-12 col-sm-12 flexColumn'>
                            <label htmlFor='email' className='textSize18 fontBold'>Confirmar senha</label>
                            <input name='email' placeholder="* digite a senha novamente" className='inputDataSmall px-3 ' type="password"/>
                        </div>
                    </div>
                    <div className='col-11 col-sm-11 justifyAndAlignCenter btn-warning borderRadius20 p-1 my-3 cursorPointerHover'>
                        <div className='col-12 col-sm-12 justify-content-center align-items-center row'>
                            <img src={iconRegistry} alt="conect" style={{width:60,height:35}} className="col-1 col-sm-1"/>
                            <label className='textSize28 cursorPointerHover col-4 col-sm-4'>Registrar</label>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <footer className='mx-0 col-12' id='footer' style={{overflowX:"hidden"}}>
            <div className='col-12 col-sm-12'>
                <img src={imgRodape}/>
            </div> 
            <div className=' bg-dark'>
                <div className='col-12 row py-2 px-4'>
                    <a target="blank" href="https://www.facebook.com/bateriasv8" className='col-sm-4 ml-3 style-link-none'> 
                        <img className='col-2' src={iconFacebook}/>
                        <h6 className='col-8 text-ffa'>Baterias v8</h6> 
                    </a>
                    <a target="blank" href="https://www.instagram.com/bateriasv8oficial/" className='col-sm-4 style-link-none'>
                        <img className='col-2' src={iconInstagram}/> 
                        <h6 className='text-ffa'>Baterias v8 oficial</h6> 
                    </a>
                    <a target="blank" href="https://www.youtube.com/channel/UCrl3CX9m9N6rKCdlq18AiUg" className='col-sm-4 style-link-none'> 
                        <img className='col-2' src={iconYoutube}/>
                        <h6 className='text-ffa'>Baterias v8</h6> 
                    </a>
                    <div className='col-sm-12 row'> 
                        <caption className='col-sm-12 text-secondary font-size-min'>By Gabriel (gabriel.andrade2402@gmail.com)</caption> 
                    </div>
                </div>
            </div>
      </footer>
      </>
   );
}

export default Credentials;