import 'bootstrap/dist/css/bootstrap.css';
import HomeHeader from '../../components/HomeComp/HomeHeader';
import HomeStand from '../../components/HomeComp/HomeStand';
import HomeLocation from '../../components/HomeComp/HomeLocation';
import HomeAbout from '../../components/HomeComp/HomeAbout';
import HomeFooter from '../../components/HomeComp/HomeFooter';
import HomeComents from '../../components/HomeComp/HomeComents';
import HomeAppMore from '../../components/HomeComp/HomeAppMore';
import HomeSkills from '../../components/HomeComp/HomeSkills';
import '../../assets/css/home.css';
import $ from 'jquery';
import react,{ useState,useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from "../../utils/requests";

const Home = () => {
    useEffect(() => {
      teste();
    }, []);
    function teste(){
      axios({
          method: "post",
          url: "https://api.mercadopago.com/users/test_user",
          data: {
            site_id:"MLB"
          },
          headers: {
              "Content-Type": "application/json",
              "Authorization":"Bearer TEST-5733289434620462-021313-2d8589e80ce978cc5111abf8e9ec51d1-1073610524",
              "Access-Control-Allow-Origin":"*"
          },
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
          console.log(response);
          });
  }
    return (
       <>
         <HomeHeader/>
         <section>
          <HomeStand/>
          <HomeAppMore/>
          <HomeSkills/>
          <HomeLocation/>
          <HomeAbout/>
          <HomeComents/>
         </section>
         <HomeFooter/>
       </>
   );
}
export default Home;