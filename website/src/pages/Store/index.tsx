import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/store.css';
import $ from 'jquery';
import StoreHeader from '../../components/StoreComp/StoreHeader';
import StoreNavBar from '../../components/StoreComp/StoreNavbar';
import StoreCommerce from '../../components/StoreComp/StoreCommerce';
import Footer from '../../components/Footer';

const Store = () => {
    const userExist = (sessionStorage.getItem("userJson")!=null || sessionStorage.getItem("userJson")!=undefined)?true:false;
    return (
        <>
        <StoreHeader exists={userExist}/>
        <StoreNavBar/>
        <StoreCommerce/>
        <Footer/>
        </>
    );
}

export default Store;