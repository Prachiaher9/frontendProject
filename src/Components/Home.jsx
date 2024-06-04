import React from 'react'
import vg from "../asset/2.png";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
const Home = () => {
  return (
   <>
      <div className='home' id='home'>
          <main>
                  <h1>TECHYSTAR</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio a sequi neque quidem dignissimos, reprehenderit harum 
                    dolore magni iusto repudiandae repellat optio dolor provident soluta et dicta adipisci? Culpa!</p>
          </main>
      </div>
      <div className="home2">
          <img src={vg} alt="Graphics"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod expedita ex voluptatum porro in mollitia pariatur, corrupti qui tempore libero provident quo distinctio iure dicta temporibus veniam amet quas!
            </p>
          </div>
      </div>
      <div className='home3'id='about'>
         <div>
         <h1>Who are you</h1>
         <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod expedita ex voluptatum porro in mollitia pariatur, corrupti qui tempore libero provident quo distinctio iure dicta temporibus veniam amet quas!
         </p>
         </div>
      </div>
      <div className="home4" id='brands'>
            <div>
                    <h1>Brands</h1>
                    <article>
                                <div style={{animationDelay:"0.3s"}}>
                                  <AiFillGoogleCircle/>
                                  <p>Googgle</p>
                                </div>
                                <div style={{animationDelay:"0.5s"}}>
                                  <AiFillAmazonCircle/>
                                  <p>Amazon</p>
                                </div>
                                <div style={{animationDelay:"0.7s"}}>
                                  <AiFillYoutube/>
                                  <p>Youtube</p>
                                </div>
                                <div style={{animationDelay:"1s"}}>
                                  <AiFillInstagram/>
                                  <p>Instagram</p>
                                </div> 
                    </article>
            </div>
      </div>
   </>
  )
}

export default Home
