import './App.css';
import { useEffect, useRef } from 'react';
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function App() {

  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];


  useEffect(() => {
    
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };


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
    <div >

      <FirstDiv/>
      <DivMedium/>
      <Button1/>
     <Image2 ref={addToRefs}/>
      <Button1/>
     <Image3 ref={addToRefs}/>
     <Image4 ref={addToRefs}/>
     <Image5 ref={addToRefs}/>
     <Image6 ref={addToRefs}/>
     <Image7 ref={addToRefs}/>
     <Footer ref={addToRefs}/>
    </div>
      </>
  );
}

export default App;

