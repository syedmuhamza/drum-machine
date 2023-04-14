import './App.css';
import {keys} from './keys';
import { useEffect,useState} from 'react';

function App() {
  const [activeKey,setActiveKey]=useState('');
  const[pressed,setPressed]=useState(false);

  function triggerSound(selector){
    const audio=document.getElementById(selector);
    if(audio){
      audio.currentTime=0;
      audio.play();
      setActiveKey(selector);
    }
  }
  
  const handleClick=(event)=>{
    // const keyArray=['q','w','e','a','s','d','z','x','c'];
 
      triggerSound(event.key.toUpperCase());
      setPressed(true);
      setTimeout(()=>setPressed(false),200);
    
 
        
  }
  useEffect(()=>{
    document.addEventListener('keydown',handleClick);
    return ()=>{
      document.removeEventListener('keydown',handleClick);
    }
  },[activeKey]);
  return (
    <div id='drum-machine'>
    <div className='heading-block'>
      <h1>
      Drum machine
    </h1>
    </div>
    <div className='key-container'>
      {keys.map((key)=>(<div className={`drum-pad ${pressed && 'btn-pressed'}`} id={key.src} key={key.src} onClick={()=>{triggerSound(key.text)}}>
        {key.text}
        <audio className='clip' 
        id={key.text} 
        src={key.src}></audio>
        </div>))}
    </div>
    <div id='display'>{activeKey}</div>
    
    <h4>- by Syed Muhammad Hamza for <a href="https://freecodecamp.org">freeCodeCamp</a>  
    </h4>
    </div>
  );
}

export default App;
