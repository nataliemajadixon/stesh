import '../Home/Home.css'

const About = () => {
    return(
    <>
       {/* <img src={require('../../assets/abouttop.jpg')} alt='vrheadset' style={{ filter: 'brightness(50%)', width: '100vw', objectFit: 'contain' }}/>
        <div className="careerheader">Work at Nats</div> */}

        <div className="abouttop">
                <div className="background-image">
                    <img src={require('../../assets/abouttop.jpg')} alt='vrheadset' />
                </div>
                <div className="abouttext">
                    <div className="aboutbig">Om Oss</div>
                </div>
            </div>

            <div className="careerentireflex">
            <div className="careerentirecon">
            <div className="careerentireheader"> STESH in its entirety</div>
            <p className='careerentiretext'>We at Stesh have a range of different experiences and knowledge.
             At Stesh, we are passionate about talent. We understand that the success of every organization has deep roots in the people it employs. 
             As a leading company in talent consulting, we take pride in our commitment to help businesses identify, attract, and retain the best talent in the industry.
             </p>
             <div className="careerentireheader"> Our Mission</div>
             <div className="careerentiretext">
            Our mission is clear: to empower your organization with the human capacity it needs to thrive. We believe that each individual is unique and has something valuable to offer. Our mission is to connect these exceptional individuals with forward-thinking companies to create the perfect synergy.
            </div>
             </div>
                </div>
        <div><img src={require('../../assets/careerbubbles.jpg')} alt='vrheadset' style={{ filter: 'brightness(70%)', width: '100vw', height: '40vh', objectFit: 'cover' }}/>  
        </div>
      {/* <div className="top-container career-container">
            <div className="careeruscon">
                <div className="aboutusheader">OM OSS</div>
                    <div className='aboutustext'>
                    På Stesh brinner vi för talang. Vi förstår att framgången för varje organisation har djupa rötter i de människor den anställer. Som ett ledande företag inom talangkonsultation är vi stolta över vårt åtagande att hjälpa företag att identifiera, locka till sig och behålla den bästa talangen inom branschen.
                    </div>
                    <div className="aboutustext">
                    Vår mission är tydlig: att stärka din organisation med den mänskliga kapacitet den behöver för att blomstra. Vi tror att varje individ är unik och har något värdefullt att erbjuda. Vår mission är att koppla samman dessa exceptionella individer med företag som tänker framåt för att skapa den perfekta synergin.
 
                    </div>
                    <div className="aboutustext">
                    Stesh är ett team av erfarna konsulter som bidrar med en djup kunskap och expertis. Vi är skickliga inom talanganskaffning, förvaltning och utveckling, med målet att hjälpa organisationer inom olika branscher att låsa upp sin fulla potential.
                    </div>
            </div>
        </div> */}
        </>

    )
} 
export default About