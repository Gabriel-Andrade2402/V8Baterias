import 'bootstrap/dist/css/bootstrap.css';
import '../../../assets/css/homeAbout.css';
import iconRaio from '../../../assets/img/utils/iconRaio.png';
import $ from 'jquery';

const HomeAbout = () => {
    return (
      <article className='container-flex position-flex' id='articleAbout'> 
        <div className='col-12'>
            <div className='row col-sm-12 col-12 justify-content-center align-items-center'>
                <div className='col-sm-12 col-12 row mt-4 justify-content-center align-items-center'>
                  <img src={iconRaio} className='col-2 col-sm-1'/>
                  <h2 className='col-sm-4 col-8'>
                    Quem somos nós ?
                  </h2>
                  <img src={iconRaio} className='col-2 col-sm-1'/>
                </div>
                <h6 className='col-sm-12 col-12 row offset-1 p-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                 type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                 typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                 Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
                 Lorem Ipsum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                 voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                 orro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                 ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                 uscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
                 quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</h6>
            </div>
        </div>
      </article>
   );
}
export default HomeAbout;