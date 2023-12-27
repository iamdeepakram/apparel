import logo from './logo.svg';
import './App.css';
import girlImg from './img/girlImg.png'

function App() {
  return (
    <>

    <div className="grid grid-rows-5 grid-cols-6 gap-2"  >
      <div className=" inline-grid col-start-2 col-end-3  " > 
        <span className="flex avenir-medium  ">
          <span className={`w-10 h-10 rounded-full border-[#E7A09E] border-2 place-self-center  `}  ></span>
          <span className='mt-12 ml-2 flex flex-col avenir-medium  text-[#5F5A5A] ' >
              <span class="text-lg tracking-widest ">BASE</span>
              <span class="text-lg tracking-widest	">APPAREL</span>
          </span>
        </span>
     
      </div>
      <div className="col-start-4 col-end-7 row-span-6" >
        <img src={girlImg} ></img>
      </div>
      <div className="col-start-2 row-start-2 row-end-4 gap-4" >
        <div className="text-6xl tracking-[19.2px] text-were  avenir-light ">WE'RE</div>
        <div className="text-6xl tracking-[19.2px] avenir-medium  text-coming-soon"  >COMING</div>
        <div className="text-6xl tracking-[19.2px] avenir-medium text-coming-soon">SOON</div>
      </div>
      <div className="col-start-2 col-end-4 row-start-4 row-end-5 open-sans-semi-bold text-lorem " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className="col-start-2 row-start-5 row-end-5" >
        <form>
        <input className='border rounded-full border-[#9A6B69] w-96 h-14 '  ></input>
        <button type='submit' className='overflow-visible'  >Submit</button>
        </form>
      </div>
      
    </div>
  
    </>
  );
}

export default App;
