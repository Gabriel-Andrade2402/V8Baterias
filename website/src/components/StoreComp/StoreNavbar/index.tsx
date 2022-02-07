import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import '../../../assets/css/storeNavbar.css';

const StoreNavBar = () => {
    return (
      <nav className='container-flex position-flex bg-light py-2 border-bottom'> 
        <div className='col-12 col-sm-12 px-4'>
          <input type="text" 
          onChange={()=>{
            var text = $("#ipSearchCommerce").val()+"";
            if(text.length==0){
              $("#sectionCommerce article").each((index,item)=>{
                  $(item).show();
                  $(item).next().show();
              });
            }
          }}
          id='ipSearchCommerce' 
          className='inputPesquisa col-8 col-sm-8 rounded input-sem-borda' placeholder='Faça uma busca aqui...'/>
          <div onClick={()=>{
            $("#sectionCommerce article").each((index,item)=>{
              var name = $(item).attr("name")+"";
              if(name.match($("#ipSearchCommerce").val()+"")==null){
                $(item).hide();
                $(item).next().hide();
              }else{
                $(item).show();
                $(item).next().show();
              }
            });
            
          }} className='col-4 col-sm-2 btn bg-shadow offset-sm-1'>
              Buscar
          </div>
        </div>
      </nav>
   );
}
export default StoreNavBar;