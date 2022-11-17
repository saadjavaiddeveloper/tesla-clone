import './App.css';
import Button1 from './components/Button1';
import DivMedium from './components/DivMedium';
import FirstDiv from './components/FirstDiv';
import Footer from './components/Footer';
import Image2 from './components/Image2';
import Image3 from './components/Image3';
import Image4 from './components/Image4';
import Image5 from './components/Image5';
import Image6 from './components/Image6';
import Image7 from './components/Image7';
// import SecondDiv from './components/SecondDiv';
import { gsap } from "gsap";

function App() {
  return (
    <>
    <div className="App">
      <ul>
        <li className='li3'>logo</li>
      </ul>
      <ul>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Solar Roof</li>
        <li>Solar Panels</li>
      </ul>
      <ul>
        <li className='li2'>Shop</li>
        <li className='li2'>Account</li>
        <li className='li2' >Menu</li>
      </ul>
    </div>
      <FirstDiv/>
      <DivMedium/>
      <Button1/>
     <Image2/>
     <Image3/>
     <Image4/>
     <Image5/>
     <Image6/>
     <Image7/>
     <Footer/>
     <gsap/>
      </>
  );
}

export default App;

