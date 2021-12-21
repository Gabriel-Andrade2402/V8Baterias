import 'bootstrap/dist/css/bootstrap.css';
import HomeHeader from '../../components/HomeHeader';
import HomeStand from '../../components/HomeStand';
import HomeLocation from '../../components/HomeLocation';
import HomeAbout from '../../components/HomeAbout';
import HomeFooter from '../../components/HomeFooter';

const Home = () => {
    return (
       <>
         <HomeHeader/>
         <section>
          <HomeStand/>
          <HomeLocation/>
          <HomeAbout/>
         </section>
         <HomeFooter/>
       </>
   );
}
export default Home;