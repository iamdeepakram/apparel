import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

    <div className="grid grid-rows-5 grid-cols-6 gap-2"  >
      <div className=" inline-grid col-start-2 col-end-3  " > 
        <span class="inline-grid grid-cols-2 grid-row-2 ">
          <span className={`w-16 h-16 rounded-full border-[#E7A09E] border-2 `}  ></span>
          <span>BASE</span>
          <span>APPAREL</span>
        </span>
     
      </div>
      <div className="col-start-4 col-end-7 row-span-6" >
        <img src={logo} ></img>
      </div>
      <div className="col-start-2 row-start-2 row-end-4" >
        <div className="text-7xl tracking-[19.2px] text-were  avenir-light ">WE'RE</div>
        <p className="text-7xl avenir-medium  text-coming-soon"  >COMING</p>
        <p className="text-7xl avenir-medium text-coming-soon">SOON</p>
      </div>
      <div className="col-start-2 col-end-4 row-start-4 row-end-5 open-sans-semi-bold text-lorem " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className="col-start-2 row-start-5 row-end-5" >
        <input></input>
      </div>
      
    </div>
  
    </>
  );
}

export default App;
