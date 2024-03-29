import React from 'react';
import backgroundImagefull from '/public/background.png'; // Adjust the path to your background image
import Computer from '/public/computer.png'; 
import { Button } from '@/components/ui/button';
import  HowItWork from "/public/howitwork.png";
import  Arrow from "/public/arrow.png";
import logo from '../../../public/logo.png';
import Img1 from "/public/2.7.png";
import Img2 from "/public/29.png";
import Img3 from "/public/71.png";
import Img4 from "/public/89-754.png";
import Trace from "/public/trace.png";
import Anti from "/public/anti.png";
import Integrity from "/public/integrity.png";
import Smart from "/public/smart.png";
import CreateContract from "/public/createcontract.png";
import Question from "/public/question.png";
import Insta from "/public/insta.png";
import Youtube from "/public/youtube.png";
import Dribble from "/public/dribble.png";
import Twitter from "/public/twitte.png";
import Phone from "/public/phone.png";
import Mail from  "/public/mail.png";
import Address from "/public/address.png";





import Image  from 'next/image';



import {
  Card,
  
  
} from "@/components/ui/card";

//app.blockpen.xyz
//  app.blockpen.xyz/register-company

function Body() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: 0 }} className="m-0 mt-0">
        {/* Background image */}
        <Image src={backgroundImagefull.src} alt='Background' style={{ width: '100%', height: 'auto' }} />

        {/* Content */}
        <div className="absolute z-20" style={{ position: 'absolute', top: '5%', transform: 'translateY(-50%)', marginLeft: '5%', textAlign: 'left' }}>
          <div style={{ color: '#83498C', fontSize: 'calc(32px + 0.5vw)' }}>
            <h1 className='text-cyan-50' style={{ fontSize: 'calc(30px + 1vw)', marginBottom: '0.5rem' }}>Document Signing<br/> Platform with Security of</h1>
            <h1 className='text-cyan-50' style={{ fontSize: 'calc(40px + 1.5vw)', marginBottom: '1rem' }}>Blockchain Technology</h1>
          </div>
    
        </div>
        <div className='flex flex-row absolute z-20' style={{ position: 'absolute', top: '14%', transform: 'translateY(-50%)', marginLeft: '5%', textAlign: 'left' }}  >
        <a href="https://app.blockpen.xyz/register-company" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-gray-800 text-white" style={{ width: '200px', height: '40px', display: 'inline-block', textDecoration: 'none', textAlign: 'center', lineHeight: '40px' }}>
      <Button>
        Enterprise Registration
      </Button>
    </a>
          <h1 style={{marginLeft:40}}><img src={HowItWork.src} /></h1>
          <Button className="bg-gradient-to-r from-pink-500 to-gray-800 text-white" style={{ width: '200px', height: '40px' }}>
                Enterprise Registration
          </Button>
          <h1 style={{marginLeft:40}}><Image alt="ll" src={HowItWork.src} /></h1>
          </div>
          <div className='flex flex-col absolute z-20' style={{ top: '18%',marginLeft:"30%" ,textAlign: "center" }}  >
            <h1 className='text-cyan-50'  style={{ fontSize: 'calc(30px + 1vw)', marginBottom: '0.5rem',textAlign:"center" }}>Did You Know  ?</h1>
            <h1   style={{ fontSize: 'calc(10px + 1vw)', marginBottom: '0.5rem',textAlign:"center",color:"#B4C7ED" }}>Some amazing facts about the Blockchain on Industry</h1>
          </div>

          <div className='flex flex-row absolute z-20' style={{ top: '24%', marginLeft: '5%', marginRight: '5%', textAlign: "center" }}>
  <Card style={{ width: 'calc(25% - 20px)', height: 158, backgroundColor: "#0C1B44", marginRight: '5%', marginLeft: '5%' }}>
    <Image alt="ll" src={Img1.src} style={{ position: 'absolute', top: '-30px', width: 190, height: 50, alignContent: "center", left: '14.5%', transform: 'translateX(-50%)' }} />
    <Image alt="ll" style={{ width: 60, height: 30, marginTop: 10, marginLeft: 20 }} src={Arrow.src} />
    <p className='' style={{ color: 'white', marginTop: 10 }}> {/* Adjust color and margin */}
      Worldwide spending on Blockchain solutions till 2019 was
    </p>
  </Card>
  <Card style={{ width: 'calc(25% - 20px)', height: 158, backgroundColor: "#0C1B44", marginRight: '5%' }}>
    <Image alt="ll" src={Img2.src} style={{ position: 'absolute', top: '-30px', width: 190, height: 50, alignContent: "center", left: '38%', transform: 'translateX(-50%)' }} />
    <Image alt="ll" style={{ width: 60, height: 30, marginTop: 10, marginLeft: 20 }} src={Arrow.src} />
    <p className='' style={{ color: 'white', marginTop: 10 }}> {/* Adjust color and margin */}
      Share of companies in the consumer products and manufacturing industries currently using Blockchain
    </p>
  </Card>
  <Card style={{ width: 'calc(25% - 20px)', height: 158, backgroundColor: "#0C1B44", marginRight: '5%' }}>
    <Image alt="ll" src={Img3.src} style={{ position: 'absolute', top: '-30px', width: 190, height: 50, alignContent: "center", left: '62%', transform: 'translateX(-50%)' }} />
    <Image alt="ll" style={{ width: 60, height: 30, marginTop: 10, marginLeft: 20 }} src={Arrow.src} />
    <p className='' style={{ color: 'white', marginTop: 10 }}> {/* Adjust color and margin */}
      of business leaders who are actively using Blockchain believe it plays a key role in advancing the technology.
    </p>
  </Card>
  <Card style={{ width: 'calc(25% - 20px)', height: 158, backgroundColor: "#0C1B44", marginRight: '5%' }}>
    <Image alt="ll" src={Img4.src} style={{ position: 'absolute', top: '-30px', width: 190, height: 50, alignContent: "center", left: '85.5%', transform: 'translateX(-50%)' }} />
    <Image alt="ll" style={{ width: 60, height: 30, marginTop: 10, marginLeft: 20 }} src={Arrow.src} />
    <p className='' style={{ color: 'white', marginTop: 10 }}> {/* Adjust color and margin */}
      e-Signature transactions have ballooned in just 5 years.
    </p>
  </Card>
</div>

<div className='flex flex-col absolute z-20' style={{ top: '29%',marginLeft:"34%" ,textAlign: "center" }}  >
             <h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(30px + 1vw)', marginBottom: '0.5rem', textAlign: "center", fontWeight: 'bold' }}>
  About <br/> BlockChain Technology
</h1>
          </div>
          <div className='text-cyan-50 flex flex-col absolute z-20' style={{ top: '33%', marginLeft: 600, textAlign: "left",width:600,height: 400}}>
            <p>
            Blockchain technology has transformed the landscape of <br/> digital signatures by ensuring
            </p>
            <div>
  <ul style={{ listStyleType: "circle" }}>
    <li>the legality</li>
    <li>unforgeability</li>
    <li>immutability of documents.</li>
  </ul>
</div>

            
            <p>
            Utilizing decentralized and distributed ledger technology,
            </p>
            <p>
            blockchain offers unparalleled security, making it virtually<br/>
impossible to tamper with or alter signed documents without<br/> detection.
            </p>
            <p>
            The adoption of blockchain technology across various<br/> industries is a testament to its reliability and effectiveness in <br/>safeguarding sensitive data and transactions. <br/>
Its transparent and decentralized nature instills trust and <br/>confidence in digital signatures, paving the way for a more <br/>secure and efficient document signing process.
            </p>

          </div>

          <div className='flex flex-row absolute z-20' style={{ top: '48%',marginLeft:"15%" ,textAlign: "left" ,width:'100%'}}  >
<div className='flex'>
          <h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(30px + 1vw)', marginBottom: '0.5rem', textAlign: "left", fontWeight: 'bold',width:500,marginLeft:-125 }}>
                 Benifits of BlockPen
           </h1>
           </div>


           <div className='flex flex-col' style={{ width: '100%', marginLeft: "125px",marginTop:"-110px" }}>
  <div className='flex flex-row' style={{  }}>
    <Card style={{ width: '173px', height: `193px`, backgroundColor: "#0C1B44", marginRight: '20px' }}>
        <div className='flex flex-col'>

             <Image alt="ll" src={Trace.src} style={{width:40,height:40,marginTop:20,marginLeft:20,marginBottom:1}} />
             <h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(5px + 1vw)', textAlign: "left",marginLeft:10 }}>
             Traceable
             </h1>
             <p className='text-cyan-50 ' style={{ fontFamily: "sans-serif",  fontSize: 'calc(0.1px + 1vw)', textAlign: "left",marginLeft:10}}>
             Blockchain makes it easy to trace and track the documents sent for signatures. You can easily track 

             </p>



        </div>
 

    </Card>
    <Card style={{ width:  '173px', height: `193px`, backgroundColor: "#0C1B44" ,marginLeft:'20%'}}>
    <div className='flex flex-col'>

<Image alt="ll" src={Anti.src} style={{width:40,height:40,marginTop:20,marginLeft:20,marginBottom:1}} />
<h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(5px + 1vw)', textAlign: "left",marginLeft:10 }}>
Anti Fraud
</h1>
<p className='text-cyan-50 ' style={{ fontFamily: "sans-serif",  fontSize: 'calc(0.1px + 1vw)', textAlign: "left",marginLeft:10}}>
Blockchain is known for the high-level security it provides to all its users and the solutions that 

</p>



</div>
    </Card>
  </div>
  <div className='flex flex-row' style={{  marginTop: '20px'}}>
    <Card style={{width:  '173px', height: `193px`, backgroundColor: "#0C1B44",marginLeft: '-80px'  }}>
    <div className='flex flex-col'>

<Image alt="ll" src={Integrity.src} style={{width:40,height:40,marginTop:20,marginLeft:20,marginBottom:1}} />
<h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(5px + 1vw)', textAlign: "left",marginLeft:10 }}>
Integrity
</h1>
<p className='text-cyan-50 ' style={{ fontFamily: "sans-serif",  fontSize: 'calc(0.1px + 1vw)', textAlign: "left",marginLeft:10}}>
Documents stored on Blockchain which is built on dependability, transparency, honesty and trust.

</p>



</div>
    </Card>
    <Card style={{ width:  '173px', height: `193px`,  backgroundColor: "#0C1B44",marginLeft:'20%' }}>
    <div className='flex flex-col'>

<Image alt="ll" src={Smart.src} style={{width:40,height:40,marginTop:15,marginLeft:20,marginBottom:1}} />
<h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(5px + 1vw)', textAlign: "left",marginLeft:10 }}>
Rigid Smart Contract
</h1>
<p className='text-cyan-50 ' style={{ fontFamily: "sans-serif",  fontSize: 'calc(0.1px + 1vw)', textAlign: "left",marginLeft:10}}>
With Blockchain businesses can make smart contracts that can be signed from anywhere across the glob

</p>



</div>
    </Card>
  </div>
</div>
 </div>      

 <div className='flex flex-col absolute z-20' style={{ top: '58%' ,marginLeft:"25%",textAlign: "center" }}  >
             <h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(25px + 1vw)', marginBottom: '0.5rem', textAlign: "center", fontWeight: 'bold' }}>
             A simple way to sign the documents with <br/>  blockchain security
</h1>
<p className='text-cyan-50 ' style={{ fontFamily: "sans-serif",  fontSize: 'calc(2px + 1vw)', textAlign: "center"}}>
With Blockchain businesses can make smart contracts that can be signed from <br/>anywhere across the glob

</p>

<Button className="bg-gradient-to-r from-pink-500 to-gray-800 text-white  align-bottom" style={{ width: '200px', height: '40px', alignContent:"center",marginLeft:260,marginTop:50 }}>
         Create Contract
        </Button>





          </div>



          <div className='flex flex-col absolute z-20' style={{ top: '65%' ,marginLeft:"25%",textAlign: "center" }}  >

         
    
 <Image alt="ll" src={CreateContract.src}  />
    




     <div className='flex flex-row ' style={{marginLeft:300,marginTop:-400}}>
      <div className='flex flex-col'  style={{marginTop:100}}>
        <div className='flex flex-col' style={{marginLeft:-200}}>
       <h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(15px + 1vw)', marginBottom: '0.5rem', textAlign: "center", fontWeight: 'bold',marginLeft:-550 }}>What is CryptoCurrency?</h1>
       <p className='text-cyan-50' style={{marginLeft:-300,textAlign:"left"}}>Cryptocurrency is a type of <br/>virtual currency that uses cryptography to secure<br/>
transactions that are digitally recorded on a distributed ledger, such as a<br/>
blockchain.</p>
         </div>
         <div className='flex flex-col' style={{marginLeft:-200}}>
       <h1 className='text-cyan-50' style={{marginTop:50, fontFamily: "sans-serif",  fontSize: 'calc(15px + 1vw)', marginBottom: '0.5rem', textAlign: "center", fontWeight: 'bold',marginLeft:-360 }}>How long should you hold
cryptocurrency?</h1>
       <p className='text-cyan-50' style={{marginLeft:-300,textAlign:"left"}}>{`The duration to hold cryptocurrency depends on investment`}<br/> {`goals, risk tolerance, and market conditions. Generally,`} <br/>{`long-term holding, or "HODLing," is recommended for potential`} <br/>{`value appreciation and weathering market fluctuations.
blockchain.`}</p>
         </div>
      </div>
      <div>
      <h1 className='text-cyan-50' style={{ fontFamily: "sans-serif",  fontSize: 'calc(25px + 1vw)', marginBottom: '0.5rem', textAlign: "center", fontWeight: 'bold',marginLeft:-550 }}>Frequesntly Asked Question</h1>
        <Image alt="ll" src={Question.src}  />
      </div>

     </div>

          </div>




          <div className='flex  absolute z-20' style={{ top: '85%' ,marginLeft:"20%",textAlign: "left" }}  >
                 <div className='flex flex-col' style={ {marginTop:300,marginLeft:-100}}>
                 <Image alt="ll" src={logo.src} width={100} height={100}/>
                 
                 <p style={{color:"#8A9BCA",marginTop:10,fontSize: 'calc(0.5px + 1vw)',}}>Cryptocurrency is a type of virtual currency that uses cryptography to secure<br/>
transactions that are digitally recorded on a distributed ledger, such as a<br/>
blockchain.</p>
  <div className='flex flex-row' style={{marginTop:20}}>
    <Image alt="ll" src={Insta.src} style={{margin:5}}  />
    <Image alt="ll" src={Dribble.src} style={{margin:5}} />
    <Image alt="ll" src={Youtube.src} style={{margin:5}} />  
    <Image alt="ll" src={Twitter.src} style={{margin:5}} />
  </div>

       
                  
                 </div>
                 <div className='flex flex-col' style={ {marginTop:300,marginLeft:100}}>
<h1 className='text-cyan-50' style={{fontSize: 'calc(5px + 1vw)',}}>Usefull Links</h1>


<ul>
  <li className='text-cyan-50' style={{fontSize: 'calc(1px + 1vw)',margin:2}}>Home</li>
  <li className='text-cyan-50' style={{fontSize: 'calc(1px + 1vw)',margin:2}}>Exchange</li>
  <li className='text-cyan-50' style={{fontSize: 'calc(1px + 1vw)',margin:2}}>Features</li>
  <li className='text-cyan-50' style={{fontSize: 'calc(1px + 1vw)',margin:2}}>FAQ</li>
</ul>


                 </div>






                 <div className='flex flex-col' style={ {marginTop:300,marginLeft:200}}>
                 <h1 className='text-cyan-50' style={{fontSize: 'calc(5px + 1vw)'}}>Contact Us</h1>


                 <ul style={{marginTop:5}}>
                  <div className='flex flex-row'>
                    <Image alt="ll" src={Phone.src} style={{marginRight:5}}/>
  <li className='text-cyan-50' style={{fontSize: 'calc(1px + 1vw)',margin:2,marginTop:2}}>12345678</li>
  </div>
  <div className='flex flex-row'>
                    <Image alt="ll" src={Mail.src} style={{marginRight:5}}/>
  <li className='text-cyan-50' style={{fontSize: 'calc(1px + 1vw)',margin:2,marginTop:2}}>blockpen@gmail.com</li>
  </div>
  <div className='flex flex-row'>
                    <Image alt="ll" src={Address.src} style={{marginRight:5}}/>
  <li className='text-cyan-50' style={{fontSize: 'calc(1px + 1vw)',margin:2,marginTop:2}}>Ghaziabad</li>
  </div>
  
</ul>
                 </div>
          

               
          </div>











          </div>
  </div>
  );
}

export default Body;