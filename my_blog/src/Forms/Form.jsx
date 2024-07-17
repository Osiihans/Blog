import React from 'react';
import './form.css';
import Hero from '../components/Hero/Hero';
import Bottombar from '../layout/Bottombar';
const Form = () => {
  return (
    
    <><Hero/> 
     <h2 align="center">Contact <span>Me</span></h2>
    <main >
        <section class="contact" id="contact">
            <form action="https://formsubmit.co/gitongadelphin@gmail.com" method="post">
             <div class="input-group">
               <div class="input-box">
                 <input type="text" placeholder="Full Name"/>
                 <input type="email" placeholder="Email"/>
               </div>
               <div class="input-box">
                 <input type="number" placeholder="Phone Number"/>
                 <input type="text" placeholder="Subject"/>
               </div>
            </div>
            <div class="input-group-2">
              <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
              <input type="submit" value="Send Message" class="btn"/>
             </div>
            </form>
        </section>
           
    </main>
    <Bottombar/>
    </>
  )
}

export default Form