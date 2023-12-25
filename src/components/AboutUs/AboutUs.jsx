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
            <div className="careerentireheader"> Ett unikt arbetsklimat</div>
            <p className='careerentiretext'>På STESH tror vi på att skapa ett arbetsklimat där kreativitet och samarbete blomstrar. Vi sätter en ära i att odla en miljö där varje medarbetare kan blomstra och bidra till vår gemensamma framgång. Med flexibla arbetsmöjligheter och en balans mellan arbete och fritid strävar vi efter att skapa en plats där du kan trivas och utvecklas.
             </p>
             <div className="careerentireheader"> Vår passion för utveckling</div>
             <div className="careerentiretext">
            Vi på STESH tror på att driva innovation och ständig utveckling. Vår passion för att lösa komplexa utmaningar och forma framtiden genomsyrar allt vi gör. Här får du möjligheten att arbeta med en mångfald av projekt och utmana dig själv för att växa både professionellt och personligt.
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
