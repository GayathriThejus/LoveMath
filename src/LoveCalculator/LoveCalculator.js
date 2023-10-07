import React, {useState} from "react";
import './LoveCalculator.css'

function LoveCalculator(){


    const [name1,setName1]=useState('');
    const [name2,setName2]=useState('');
    const [lovescore,setLovescore]=useState(null);

    const calculateLove =()=>{
        const random=Math.floor(Math.random()*101);
        setLovescore(random);
    };

   return(
    <div className="main">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon"></link>
       <svg xmlns="http://www.w3.org/2000/svg" width="801" height="752"  viewBox="0 0 541 652" fill="none">
  <g opacity="0.5" filter="url(#filter0_f_14_5)">
    <path d="M291 409.5C291 497.589 216.232 569 124 569C31.7684 569 -43 497.589 -43 409.5C-43 321.411 31.7684 250 124 250C216.232 250 291 321.411 291 409.5Z" fill="#88155A"/>
    <path d="M290.5 409.5C290.5 497.292 215.977 568.5 124 568.5C32.0227 568.5 -42.5 497.292 -42.5 409.5C-42.5 321.708 32.0227 250.5 124 250.5C215.977 250.5 290.5 321.708 290.5 409.5Z" stroke="black"/>
  </g>
  <defs>
    <filter id="filter0_f_14_5" x="-293" y="0" width="834" height="819" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_14_5"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="701" height="711" viewBox="0 0 511 611" fill="none">
  <g opacity="0.5" filter="url(#filter0_f_14_6)">
    <path d="M511 230.5C511 302.573 452.573 361 380.5 361C308.427 361 250 302.573 250 230.5C250 158.427 308.427 100 380.5 100C452.573 100 511 158.427 511 230.5Z" fill="#88155A"/>
    <path d="M510.5 230.5C510.5 302.297 452.297 360.5 380.5 360.5C308.703 360.5 250.5 302.297 250.5 230.5C250.5 158.703 308.703 100.5 380.5 100.5C452.297 100.5 510.5 158.703 510.5 230.5Z" stroke="black"/>
  </g>
  <defs>
    <filter id="filter0_f_14_6" x="0" y="-150" width="761" height="761" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_14_6"/>
    </filter>
  </defs>
</svg>
        <div className="ellipse1"></div>
       
        <div className="ellipse2"></div>

    <div className="box"> 
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="heading"><h6 className="font-effect-neon">The LOVE <br/>Math</h6></div>
        <div className="text">
            <label for="text1">Your Name</label>
              <input type="text" placeholder="Enter your name" value={name1} onChange={(e)=>setName1(e.target.value)} />
            <label for="text2">Your Crush's Name</label>
              <input type="text" placeholder="Enter your crush's name" value={name2} onChange={(e)=>setName2(e.target.value)} />
            
            <button onClick={calculateLove}>Check here</button>
            </div>
        {lovescore !== null &&(
          <div className="result">
              <p>~Love Score between {name1} & {name2} is {lovescore}% </p>
              
          </div>
        )}
        </div>
        
    </div>
    </div>
   );

}

export default LoveCalculator;
