import { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {

    const [isMiddleTextInView, setIsMiddleTextInView] = useState(false);
    const [isCardContainerInView, setIsCardContainerInView] = useState(false);
    
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
    
      // Observer for card-container
      const cardContainerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCardContainerInView(true);
            cardContainerObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
    
      const cardContainerTarget = document.querySelector('.card-container');
      if (cardContainerTarget) {
        cardContainerObserver.observe(cardContainerTarget);
      }
    
      return () => {
        middleTextObserver.disconnect();
        cardContainerObserver.disconnect();
      };
    }, []);
    return(
        <>
            <section className="top-container">
                <div className="home-one">
                    <div className='toptext'>
                        <h1>
                        Välkommen till <span style={{color: "#d83f2e"}}>Stesh</span>
                        </h1>
                        {'\n'} 
                        <div className="smalltop">
                        Vi erbjuder expertkonsulttjänster för att hjälpa dig att uppnå dina mål. Vi kommer att följa med dig för att nå din fulla potential.
                        </div>
                        <div className='smalltop'>
                        Kontakta oss för att komma igång!
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
                <p>
                Söker du expertvägledning för att ta ditt företag till nästa nivå? Här är Stesh, din pålitliga partner inom företagsrådgivning. Vi specialiserar oss på att erbjuda skräddarsydda lösningar för att hjälpa ditt företag att blomstra, och stödja företag i alla storlekar att övervinna utmaningar, optimera operationer och uppnå hållbar tillväxt. Låt oss tillsammans låsa upp ditt företags fulla potential och uppnå enastående resultat. Kontakta Stesh idag och ta de första stegen mot en ljusare framtid.

                <br></br>
                På Stesh värderar vi din åsikt och förstår att varje individ är unik. Vårt team av erfarna konsulter erbjuder strategisk vägledning, innovativa idéer och praktiska lösningar.
                </p>
                </div>
            </section>

    <section className='middle-end-container'>
        <div className='middle-end-header'>Tjänster</div>
        <div className={`card-container ${isCardContainerInView ? 'in-viewport' : ''} `}>
        <div class="card">
        <div class="card-img card-one"></div>
        <h3 class="card-header">Technology & IT</h3>
        <p>
        I den snabbrörliga världen av teknik och IT är det avgörande att ha rätt kompetens. Stesh säkerställer att ditt team är rustat att driva innovation och hålla jämna steg med branschens framsteg. Vi specialiserar oss på att rekrytera teknik-kunniga professionella, främja deras tillväxt och anpassa din teknikarbetskraft med ditt företags mål.
        </p>
      </div>

      <div class="card">
        <div class="card-img card-two"></div>
        <h3 class="card-header">Engineering and Manufacturing</h3>
        <p>
        Stesh fokuserar på rekrytering av kunniga ingenjörer, slipar deras tekniska kompetens och ser till att dina tillverknings- och ingenjörsteam är redo för framgång i den konkurrensutsatta miljön.
        </p>
      </div>

      <div class="card">
        <div class="card-img card-three"></div>
        <h3 class="card-header">Business & Marketing</h3>
        <p>
        Att attrahera och behålla toppkompetens är avgörande för framgång. På Stesh är vi specialiserade på att erbjuda omfattande lösningar för talang som är skräddarsydda för att möta de dynamiska behoven hos företag och marknadsföringsteam. Oavsett om du är en uppstart som vill bygga ett framstående team eller ett etablerat företag som söker nya insikter, är våra tjänster utformade för att ge dig tillgång till den bästa talangen.
        </p>
      </div>
      </div>
    </section>

    {/* <section className='top-container contactus'>
        <h1 className='contactheader'>Kontakt Oss</h1>
        <p className='contacttext'>Hey whats up? Welcome to Stesh. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        
        <div form-container>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" maxLength="25" required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" maxLength="18" required /><br /><br />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" maxLength="12" required /><br /><br />

        <label htmlFor="message">Message (max 30 characters):</label><br />
        <textarea id="message" name="message" maxLength="30" rows="4" required></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
    
    </section> */}
        </>
    )
}
export default Home