import 'bootstrap/dist/css/bootstrap.css';
import HomeHeader from '../../components/HomeHeader';
import HomeStand from '../../components/HomeStand';
import HomeLocation from '../../components/HomeLocation';
import HomeAbout from '../../components/HomeAbout';
import HomeFooter from '../../components/HomeFooter';
import HomeComents from '../../components/HomeComents';
import HomeAppMore from '../../components/HomeAppMore';
import HomeSkills from '../../components/HomeSkills';
import '../../assets/css/home.css';
import $ from 'jquery';

const Home = () => {
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