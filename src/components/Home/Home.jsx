import { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {

    const [isMiddleTextInView, setIsMiddleTextInView] = useState(false);
    // const [isCardContainerInView, setIsCardContainerInView] = useState(false);
    const [isQuoteInView, setIsQuoteInView] = useState(false);
    
    useEffect(() => {
      // Observer for middle-text
      const middleTextObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMiddleTextInView(true);
            middleTextObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
    
      const middleTextTarget = document.querySelector('.middle-text');
      if (middleTextTarget) {
        middleTextObserver.observe(middleTextTarget);
      }
    
      // // Observer for card-container
      // const cardContainerObserver = new IntersectionObserver((entries) => {
      //   entries.forEach((entry) => {
      //     if (entry.isIntersecting) {
      //       setIsCardContainerInView(true);
      //       cardContainerObserver.unobserve(entry.target);
      //     }
      //   });
      // }, { threshold: 0.5 });
    
      // const cardContainerTarget = document.querySelector('.card-container');
      // if (cardContainerTarget) {
      //   cardContainerObserver.observe(cardContainerTarget);
      // }
    
      //Oberver for quote
      const quoteObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsQuoteInView(true);
            quoteObserver.unobserve(entry.target);
          }
        });

      }, {threshold: 0.5 });

      const quoteTarget = document.querySelector('.homegetcontact');
      if (quoteTarget) {
        quoteObserver.observe(quoteTarget);
      }

      return () => {
        middleTextObserver.disconnect();
        // cardContainerObserver.disconnect();
        quoteObserver.disconnect();
      };
    }, []);
    return(
        <>
            <section className="top-container">
         
                <div className="home-one">
                     <div className="background-imagemain">
                    <img src={require('../../assets/tech.jpg')} alt='vrheadset' />
                </div>
                    <div className='toptext'>
                        <h1>
                        Välkommen till &nbsp;&nbsp; <span className="steshmain">STESH</span>
                        </h1>
                        {'\n'} 
                        <div className="smalltop">
                        Tillsammans formar vi morgondagen
                        </div>
                        <div className='smalltop'>
                        
                        </div>
                        
                    </div>
                        <div className="arrow-container">
                        <div className="arrow-stick"></div>
                        <div className="arrow-down"></div>
                        </div>
                </div>
            </section>

            <section className= "middle-container">
               <div className={`middle-text ${isMiddleTextInView ? 'in-viewport' : ''} `}>
                <h1 className='steshhomemiddle'>Vi är <span className="steshnormal">STESH</span></h1>
                <p>
                Söker du expertvägledning för att höja ditt företag? Möt Stesh, din pålitliga partner inom konsulttjänster. Med specialiserade lösningar stödjer vi företag i alla storlekar att övervinna utmaningar
                 och uppnå hållbar tillväxt. Kontakta Stesh idag för enastående resultat och en ljusare framtid. 
                 <br></br>
                Vårt erfarna team värdesätter din unika synvinkel och erbjuder strategisk vägledning samt praktiska lösningar.

                </p>
                </div>
            </section>


<section className="custom-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 d-flex align-items-center custompadding">
        <div className="text-column">
          <h2>DIGITAL HÅLLBARHET</h2>
          <p>
          
Vi formar morgondagens digitala landskap och bygger en framtidsklar infrastruktur med ett engagemang för hållbara framsteg i samhället och ekonomin. Vårt engagemang fokuserar på att leverera lösningar för varaktig utveckling.          </p>
        </div>
      </div>
      <div className="col-md-6 custompadding">
        <img src={require('../../assets/sustaiblity.jpg')} alt="Digital Transformation" className="img-fluid" />
      </div>
    </div>

    <div className="row">
    <div className="col-md-6 d-flex align-items-center order-md-2 custompadding">
        <div className="text-column customtest">
          <h2>MÅNGFALD</h2>
          <p>
         Med fokus på jämställdhet är vårt initiativ dedikerat till att främja inkludering i alla branscher. Vi förser en plattform för individer att mötas och skapa en gemenskap som samarbetar för en mer rättvis framtid.
</p>
        </div>
      </div>
      <div className="col-md-6 order-md-1 custompadding">
        <img src={require('../../assets/diversity.jpg')} alt="Equality" className="img-fluid"/>
      </div>
     
    </div>

    <div className="row">
      <div className="col-md-6 d-flex align-items-center custompadding">
        <div className="text-column">
          <h2>FREE CONSULTATION</h2>
          <p>
          Are you seeking guidance or advice? Our free consultation service is designed for individuals looking to explore opportunities, whether you're a recent graduate or have industry experience. Schedule your free consultation today to unlock a pathway to success.         </p>
        </div>
      </div>
      <div className="col-md-6 custompadding">
        <img src={require('../../assets/jobinterview.jpg')} alt="Trainee Programme" className="img-fluid"/>
      </div>
    </div>
  </div>
</section>

<section className='homegetcontact'>
<div className={`${isQuoteInView? 'in-viewport' : ''} `}>
  <div className='contact-banner'>
    <div className='banner-text'>
      <h2>Have questions?</h2>
    </div>
    <div className='banner-button'>
      <button>Contact us</button>
    </div>
  </div>
  </div>
</section>

<section>
<div className="quote-container">
          <p className="quote">
            "At STESH, we empower businesses with strategic insights, foster innovation, and drive transformative change. Redefining success through our commitment to collaborative consulting excellence."
          </p>
          <p className="quote-author">- Steven Shamoun</p>
        </div>
</section>

        </>
    )
}
export default Home
