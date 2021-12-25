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