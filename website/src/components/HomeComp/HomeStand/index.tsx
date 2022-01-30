import $ from 'jquery';
import axios from "axios";
import React,{ useEffect,useState } from 'react';
//Imagens do story
import arteStory1 from '../../../assets/img/storys/arteStory1.jpg'
import arteStory2 from '../../../assets/img/storys/arteStory2.jpg'
import arteStory3 from '../../../assets/img/storys/arteStory3.jpg'
import arteStory4 from '../../../assets/img/storys/arteStory4.jpg'
import ferramentas from '../../../assets/img/storys/ferramentas.png'
import bateriMoura from '../../../assets/img/storys/bateriaMoura.png'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/css/homeStand.css';
import { BASE_URL } from "../../../utils/requests";



const HomeStand = () => {
   var imgStory1;
   var imgStory2;
   var imgStory3;
   var imgStory4;
   var token = "";
   var bodyFormData = new FormData();
   bodyFormData.append("grant_type","password");
   bodyFormData.append("username","cliente");
   bodyFormData.append("password","123456");
   //auth();
   function auth(){
      axios({
         method: "post",
         url: {BASE_URL}+"/oauth/token",
         data: bodyFormData,
         auth: {
            username:"client",
            password:"123"
         },
         headers: {
            "Content-Type": "multipart/form-data",
         },
       })
         .then(function (response) {
           token = response.data.token_type + " " + response.data.access_token;
           fillStorys();
         })
         .catch(function (response) {
           console.log(response);
         });
   }

   function fillStorys(){
      axios({
         method: "post",
         url: "http://localhost:8080/storys/all",
         headers: {
            "Authorization": token,
         },
       })
         .then(function (response) {
           console.log(response);
         })
   }

    return (
      <article className='container'> 
         <div className=' row'>
         <div id="slide" className="carousel slide col-sm-7" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#slide" data-slide-to="0" className="active"></li>
               <li data-target="#slide" data-slide-to="1"></li>
               <li data-target="#slide" data-slide-to="2"></li>
               <li data-target="#slide" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active" id="bloco1">
                  <img className="d-block w-100" src={arteStory1} alt="First slide"/>
               </div>
               <div className="carousel-item" id="bloco2">
                  <img className="d-block w-100" src={arteStory2} alt="Second slide"/>
               </div>
               <div className="carousel-item" id="bloco3">
                  <img className="d-block w-100" src={arteStory3} alt="Third slide"/>
               </div>
               <div className="carousel-item" id="bloco4">
                  <img className="d-block w-100" src={arteStory4} alt="Fourth slide"/>
               </div>
            </div>
            <a onClick={previousCarousel} className="carousel-control-prev" href="#slide" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
            </a>
            <a onClick={nextCarousel} className="carousel-control-next" href="#slide" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
            </a>
            </div>
            <div className='col-sm-5'>
               <Link to="/loja">
                  <div className='col-12 mouseOverStand'>
                     <img className="col-8 rounded mx-auto d-block" src={bateriMoura} />
                  </div>
               </Link>
               <a href='#skills'>
                  <div className='col-12 mouseOverStand'>
                     <img className="col-9 rounded mx-auto d-block" src={ferramentas}/>
                  </div>
               </a>
            </div>
         </div>
      </article>
   );
}

//Interval que altera o carrossel
var carouselInterval=setInterval(function(){
   var itemActive=$(".carousel-item.active");
   if(itemActive.next().length>0){
      itemActive.removeClass("active");
      itemActive.next().addClass("active");
   }else{
      itemActive.removeClass("active");
      $("#bloco1").addClass("active");
   }
},3500);
var carouselTimeout = setTimeout(function(){},100);

//Função de inicialização do carrossel
function previousCarousel(){
   clearInterval(carouselInterval);
   var itemActive=$(".carousel-item.active");
   if(itemActive.prev().length>0){
      itemActive.removeClass("active");
      itemActive.prev().addClass("active");
   }else{
      itemActive.removeClass("active");
      $("#bloco4").addClass("active");
   }
   logicSlide();
}
function nextCarousel(){
   clearInterval(carouselInterval);
   var itemActive=$(".carousel-item.active");
   if(itemActive.next().length>0){
      itemActive.removeClass("active");
      itemActive.next().addClass("active");
   }else{
      itemActive.removeClass("active");
      $("#bloco1").addClass("active");
   }
   logicSlide();
}
//Slide Automatico
function logicSlide(){
   clearTimeout(carouselTimeout);
   carouselTimeout=setTimeout(function(){
      carouselInterval=setInterval(function(){
         var itemActive=$(".carousel-item.active");
         if(itemActive.next().length>0){
            itemActive.removeClass("active");
            itemActive.next().addClass("active");
         }else{
            itemActive.removeClass("active");
            $("#bloco1").addClass("active");
         }
      },3500);
   },4000);
}

export default HomeStand;