import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/store.css';
import $ from 'jquery';
import StoreHeader from '../../components/StoreComp/StoreHeader';
import StoreNavBar from '../../components/StoreComp/StoreNavbar';
import StoreCommerce from '../../components/StoreComp/StoreCommerce';

const Store = () => {
    return (
        <>
        <StoreHeader/>
        <StoreNavBar/>
        <StoreCommerce/>
        </>
    );
}

export default Store;