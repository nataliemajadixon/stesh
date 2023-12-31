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
                        <h1 style={{fontSize: '3em'}}>
                        Tillsammans formar vi morgondagen
                                                </h1>
                        {'\n'} 
                        
                        
                    </div>
                        {/* <div className="arrow-container">
                        <div className="arrow-stick"></div>
                        <div className="arrow-down"></div>
                        </div> */}
                </div>
            </section>

            <section className= "middle-container">
               <div className={`middle-text ${isMiddleTextInView ? 'in-viewport' : ''} `}>
                <h1 className='steshhomemiddle'>Vi är <span className="steshnormal">STESH</span></h1>
                <p>
                
Stesh är ett nystartat teknikkonsultföretag i ett utvecklingsskede med kontor i Skövde. Våra huvudområden som vi verkar inom är produktion, IT samt produktutveckling. Inom dessa områden har vi flertalet spännande uppdrag för både dig som junior och senior ingenjör som matchas efter din profil och dina intressen. Med våra samarbetspartners har vi tillgång till ett stort utbud av kunder, tillsammans hittar vi rätt uppdrag för just dig.
                 <br></br>

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
          <h2>KOSTNADSFRI KONSULTATION</h2>
          <p>
          
Söker du vägledning eller råd? Vår kostnadsfria konsulttjänst är avsedd till mindre företag, som vill veta mer om hur vi kan bidra till utvecklingen av dess verksamhet.         </p>
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
      <h2>Vill du veta mer?</h2>
    </div>
    <div className='banner-button'>
      <button>Kontakta oss</button>
    </div>
  </div>
  </div>
</section>


        </>
    )
}
export default Home
