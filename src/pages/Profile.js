import React from 'react';

// TODO: Remover após refatoração
// import Typist from "react-typist";
// import { Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    return (
      <main className='main-profile'>
        <section className="section-profile-rigth">
          <img src="https://media.licdn.com/dms/image/D4D03AQHFFMuXDeRcNA/profile-displayphoto-shrink_200_200/0/1702653764448?e=1714608000&v=beta&t=XExZ8hUhKOk4QC1WYZqhp3KyFr0WgnILrmNBBXsEkEA"/>
        </section>
        <section className="section-profile-left">
          <h1>Natali Lima</h1>
          <p><strong>Desenvolvedora Web Full Stack</strong></p>
        <div className="display-4 my-5">
           <aside>
             <span>
               <a target="_blank" href="https://github.com/heyynat">
                 <span class='text-white devicon-github-original' />
               </a>
             </span>
             <span>
               <a target="_blank" href="https://www.linkedin.com/in/heyynat/">
               <span class='text-white devicon-linkedin-plain' />
               </a>
             </span>
           </aside>
         </div>
        </section>
      </main>
    )
}

export default Profile;
