import careers from "../../assets/images/careers.png"
import clipboard from "../../assets/images/clipboard.png"
import chat from "../../assets/images/chat.png"
import find from "../../assets/images/find-option.png"
// import Button from "../ui elements/Button"
import  "./homepage.css"


export default function Homepage (){

    return(
      <div className="homepage">
        <div className="banner">
         <p className="banner-text">
            Your new job is here, vacancies all over the world
         </p>
         <p className="banner-mini-text">
            The best place to discover and apply to the coolest companies. More than 682000 current vacancies
            from 17750 sites available to you.
         </p>
         <form className="search">
            <input type="text" className="input-search" placeholder="Job title, salaries, companies..."/>
            <button className= "btn-search">Explore now</button>
         </form>
         <img src={careers} alt="Careers" ></img>
         <p className="partners-bar">
            <ul>
                <li>AWS</li>
                <li>Google</li>
                <li>Krtbit</li>
                <li>Bidco</li>
                <li>KenGen</li>
                <li>ABSA</li>
            </ul>
         </p>
         </div>
         <section className="options">
            <div className="title">
               <h1>The fast track to your next job</h1>
            </div>
            <div className="pitch-text">
               <p>We ensure your next step is a step forward. That's why we built a job's marketplace that serves all kinds of professional </p>
            </div>
            <div className="options-thumbnails">
               <div className="thumbnail" style={{backgroundColor: "var(--accent3300"}}>
                  <img src={clipboard} alt="Clipboard profile icon" />
                  <h3>Create your profile</h3>
                  <p>Build your brand with a universal profile that works across hundreds of different kinds of employers</p>      
                  <a>Get Started></a>
               </div>
               <div className="thumbnail" style={{backgroundColor: "var(--accent2300)"}}>
                  <img src={find} alt="Find Options Icon" />
                  <h3>Explore your options</h3>
                  <p>Select your preferences (shift details, salary, location, etc) and discover jobs most relevant to you</p>      
                  <a>Get Started></a>
               </div>
               <div className="thumbnail" style={{backgroundColor: "var(--accent1500)"}}>
                  <img src={chat} alt="Chat Icon" />
                  <h3>Talk on your terms</h3>
                  <p>Message multiple employers while keeping all communications in one, convenient place. It's so much easy</p>      
                  <a>Get Started></a>
               </div>
            </div>
         </section>
        </div>
    )
}