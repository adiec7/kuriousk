import Footer from "../footer/footer"
import NavBar from "../navbar/navbar"
import Lagos from "../img/investoconnecimg.jpg"
import ObjImg from "../img/onjective.jpg"
import WhyImg from "../img/why.jpg"
import {BsCheck2Square} from "react-icons/bs"
import "./envestconnect.css"



const EventConnect = () => {
    return (
        <>
       <NavBar />
       <section className="podcast-hero">
       <img src={Lagos} alt="landing img" className="img" />
        <div className="events_text lead">
          <h1>
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
          <a className="btn btn-primary btn-lg text-dark event_btn" href="mailto:Kolapo@kuriouskmedia.com" role="button">
            Partner
          </a>
        </div>
      </section>
      <section className="events_text container">
        <h2 className="text-center mt-5 pageSpan">Event Objectives</h2>
        <p className="obj-text">Kurious K Startup Investor Connect event is a unique
        opportunity for startups and investors to connect,
        collaborate, and explore potential investment
        opportunities. We are Creating a platform for future investment and
        growth and a stronger startup ecosystem in Nigeria
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

      <section className="events_text container">
        <h2 className="text-center mt-5 pageSpan">Why Sponsor us? </h2>
        <p className="obj-text">Kurious K Startup Investor Connect event is a unique
        opportunity for startups and investors to connect,
        collaborate, and explore potential investment
        opportunities. We are Creating a platform for future investment and
        growth and a stronger startup ecosystem in Nigeria
        </p>
        <div className="row obj-p">
          <div className="col-sm-12 col-md-6  ">
           <p><BsCheck2Square className="events-icons"/> Connect with the core audience including startup founders, entrepreneurs, and enterprise businesses.</p>
           <p><BsCheck2Square className="events-icons"/>Demonstrate dedication to the African startup ecosystem by showing commitment to the growth and success of the African startup ecosystem, which is a key part of your mission and values.</p>
           <p><BsCheck2Square className="events-icons"/>Showcase payment solutions: By sponsoring the event, Flutterwave can showcase its payment solutions to a targeted audience and potentially attract new customers and clients.</p>
          </div>
          <div className="col-sm-12 col-md-6 ml-5">
          <img src={WhyImg} alt="Onjective img" className="obj-img mb-5" width="400px"/>
          </div>

        </div>
      </section>

      <Footer/>
        </>
    )
}

export default EventConnect