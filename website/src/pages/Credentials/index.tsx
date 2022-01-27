import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/Credentials.css';
import $ from 'jquery';
import RegistryCredentials from '../../components/Credentials/RegistryCredentials';
import LoginCredentials from '../../components/Credentials/LoginCredentials';
import FooterCredentials from '../../components/Credentials/FooterCredentials';
import HeaderCredentials from '../../components/Credentials/HeaderCredentials';

const Credentials = () => {
    return (
      <>
        <HeaderCredentials/>
        <section className='col-12 col-sm-12 mx-0 row backgroundGradientOrangeFFA'>
            <article className='col-12 col-sm-6 articleLogin p-4'>
                <LoginCredentials/>
            </article>
            <article className='col-12 col-sm-6 articleRegistry p-4'>
                <RegistryCredentials/>
            </article>
        </section>
        <FooterCredentials/>
      </>
   );
}

export default Credentials;