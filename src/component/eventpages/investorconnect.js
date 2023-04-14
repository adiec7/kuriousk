import Footer from "../footer/footer"
import NavBar from "../navbar/navbar"
import Lagos from "../img/investoconnecimg.jpg"
import ObjImg from "../img/onjective.jpg"
import WhyImg from "../img/why.jpg"
import {BsCheck2Square,} from "react-icons/bs"
import {AiFillCheckCircle} from "react-icons/ai"
import "./envestconnect.css"



const EventConnect = () => {
    return (
        <>
       <NavBar />
       <section className="podcast-hero">
       <img src={Lagos} alt="landing img" className="img" />
        <div className="events_text lead">
          <h1 className="heading-text">
            <span className="pageSpan">Kurious K Investor Connect</span>   
          </h1>
          <p className="">
            <span className="pageSpan">Kurious K</span> Investor Connect is an exclusive event
                designed to bring together startups and investors in
                Nigeria for a day of networking, knowledge sharing, and
                deal-making. The event will feature a curated selection of
                high-potential startups across various sectors, as well as
                leading investors from Nigeria and beyond.
          </p>
          <button type="button" class="btn btn-link"> <a className="btn btn-primary btn-lg text-dark event_btn" href="https://forms.zohopublic.com/kuriouskmedia/form/KuriousKStartupInvestorConnectExclusive/formperma/9QpSkis6pnIMZFvd-70esEX1dewds-UQswm6pCfMT7o" role="button" target="_blank" rel="noreferrer" >
            Attend
          </a></button>
          <button type="button" class="btn btn-link"> <a className="btn btn-primary btn-lg text-dark event_btn " href="mailto:hello@kuriouskmedia.com" role="button">
            Partner
          </a></button>
         
          
          
  
        </div>
      </section>
      <section className="events_text container">
        <h2 className="text-center mt-5 pageSpan">Event Objectives</h2>
        <p className="obj-text">Kurious K Startup Investor Connect event is a unique
        opportunity for startups and investors to connect,
        collaborate, and explore potential investment
        opportunities. We are Creating a platform for future investment and
        growth and a stronger startup ecosystem in Nigeria.
        </p>
        <div className="row obj-p">
          <div className="col-sm-12 col-md-6 ">
          <img src={ObjImg} alt="Onjective img" className="obj-img" />
          </div>
          <div className="col-sm-12 col-md-6 mt-5 ">
           <p><BsCheck2Square className="events-icons"/> To create a platform for startups to showcase their innovations, products, and services to a group of investors and potential partners.</p>
           <p><BsCheck2Square className="events-icons"/>To facilitate networking and relationship-building between startups and investors, with a focus on identifying potential investment opportunities.</p>
           <p><BsCheck2Square className="events-icons"/>To provide startups with valuable insights and feedback from experienced investors, mentors, and industry experts.</p>
           <p><BsCheck2Square className="events-icons"/>To create a dynamic and engaging atmosphere to drive investment readiness for startups pre event .</p>
          </div>

        </div>
      </section>

      <section className="contact-event my-5">
        <div className="contact-event-text text-center container">
          <h3 className="pt-5">Partner with us</h3>
          <p className="text-light">Kurious K Startup Investor Connect event is a unique
          opportunity for startups and investors to connect,
          collaborate, and explore potential investment
          opportunities.
          We are Creating a platform for future investment and
          growth and a stronger startup ecosystem in Nigeria
          </p>
          <a className="btn btn-primary btn-lg text-dark event_btn" href="mailto:hello@kuriouskmedia.com" role="button">
            Contact Us
          </a>
          </div>
      </section>

      <section className="events_text container">
        <h2 className="text-center mt-5 pageSpan">Why Sponsor us? </h2>
        <p className="obj-text">Kurious K Startup Investor Connect event is a unique
        opportunity for startups and investors to connect,
        collaborate, and explore potential investment
        opportunities. 
        </p>
        <div className="row obj-p">
          <div className="col-sm-12 col-md-6 mt-5 ">

           <p><BsCheck2Square className="events-icons"/>We are Creating a platform for future investment and
        growth and a stronger startup ecosystem in Nigeria</p>
           <p><BsCheck2Square className="events-icons"/> Connect with the core audience including startup founders, entrepreneurs, and enterprise businesses.</p>
           <p><BsCheck2Square className="events-icons"/>Demonstrate dedication to the African startup ecosystem by showing commitment to the growth and success of the African startup ecosystem, which is a key part of your mission and values.</p>
           <p><BsCheck2Square className="events-icons"/>Showcase solutions: By sponsoring the event, organizations can showcase its solutions to a targeted audience and potentially attract new customers and clients.</p>
          </div>
          <div className="col-sm-12 col-md-6 ml-5">
          <img src={WhyImg} alt="Onjective img" className="obj-img mb-5" width="400px"/>
          </div>

        </div>
      </section>

      {/* <section className="container"> 
      <h2 className="text-center mt-5 pageSpan">Sponsorship Opportunities  </h2>

      <div className="card-group mb-5 ">
  <div class="card card-box">

    <div className="card-body">
      <h5 className="card-title text-center">Platnium 5 M Naira</h5>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Logo prominently displayed on all event marketing materials</p>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Speaking slot on the main stage</p>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>3 Sponsored podcast episode</p>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Booth at the event </p>
    </div>
  </div>
  <div className="card card-box">
  
    <div className="card-body">
      <h5 className="card-title text-center">Gold 3 M Naira</h5>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Logo displayed on all event marketing materials</p>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Speaking slot on a panel</p>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Booth at the event</p>
    </div>
  </div>
  <div className="card card-box last-box">

    <div className="card-body ">
      <h5 className="card-title text-center">Silver 1.8 M Naira</h5>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Logo displayed on all event marketing materials</p>
      <p className="card-text"><BsFillPatchCheckFill className="events-icons"/>Booth at the event</p>
    </div>
  </div>
</div>
      </section> */}

      <section className="container">
      <h2 className="text-center mt-5 pageSpan">Expected Outcomes </h2>

      <div className="card-group mb-5 ">
  <div class="card card-box">
    {/* <img src="..." class="card-img-top" alt="..."/> */}
    <div className="card-body">
      <h5 className="card-title text-center">For Startups</h5>
      <p className="card-text"><AiFillCheckCircle className="events-icons"/>Showcase their innovations, products, and services to investors and potential partners</p>
      <p className="card-text"><AiFillCheckCircle  className="events-icons"/>Refine their business models, develop their pitch skills, and identify potential investment opportunities</p>
      {/* <p className="card-text"><AiFillCheckCircle  className="events-icons"/>3 Sponsored podcast episode</p> */}
      {/* <p className="card-text"><AiFillCheckCircle  className="events-icons"/>Booth at the event </p> */}
    </div>
  </div>
  <div className="vr"></div>
  <div className="card card-box">
    {/* <img src="..." class="card-img-top" alt="..."/> */}
    <div className="card-body">
      <h5 className="card-title text-center">For Investors</h5>
      <p className="card-text"><AiFillCheckCircle  className="events-icons"/>Meet and interact with a curated selection of high-potential startups across various sectors</p>
      <p className="card-text"><AiFillCheckCircle  className="events-icons"/>Identify potential investment opportunities</p>
      {/* <p className="card-text"><AiFillCheckCircle  className="events-icons"/>Booth at the event</p> */}
    </div>
  </div>
  <div className="vr"></div>
  <div className="card card-box last-box">
    {/* <img src="..." class="card-img-top" alt="..."/> */}
    <div className="card-body ">
      <h5 className="card-title text-center ">For the Ecosystem </h5>
      <p className="card-text "><AiFillCheckCircle  className="events-icons inv-text"/>Create a dynamic and engaging atmosphere that encourages knowledge-sharing, collaboration, and innovation</p>
      <p className="card-text">< AiFillCheckCircle className="events-icons"/>Attract more investment into the country</p>
    </div>
  </div>
</div>
      </section>

      <Footer/>
        </>
    )
}

export default EventConnect