import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

    <div className="grid grid-rows-5 grid-cols-6 gap-2"  >
      <div className="col-start-2 col-end-3 " > <div className={`w-16 h-16 inline-grid rounded-full border-[#E7A09E] border-2 border-purple-600 `} ></div>Base Apparel</div>
      <div className="col-start-4 col-end-7 row-span-6" >image</div>
      <div className="col-start-2 row-start-2 row-end-4" >Heading content</div>
      <div className="col-start-2 row-start-4 row-end-5 open-sans-semi-bold  " >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className="col-start-2 row-start-5 row-end-5" >email container</div>
      
    </div>
  
    </>
  );
}

export default App;
