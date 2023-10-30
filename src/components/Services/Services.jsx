import '../Home/Home.css'

const Services = () => {
    return(
        <>
    <section className='middle-end-container services-container'>
        <div className='middle-end-header service-header'>Tjänster</div>
        <div className="card-container">
        <div class="card">
        <div class="card-img card-one"></div>
        <h3 class="card-header">Technology & IT <div><i class="bi bi-bezier2 straticons"></i></div></h3>
        <p>
        I den snabbrörliga världen av teknik och IT är det avgörande att ha rätt kompetens. Stesh säkerställer att ditt team är rustat att driva innovation och hålla jämna steg med branschens framsteg. Vi specialiserar oss på att rekrytera teknik-kunniga professionella, främja deras tillväxt och anpassa din teknikarbetskraft med ditt företags mål.
        </p>
      </div>

      <div class="card">
        <div class="card-img card-two"></div>
        <h3 class="card-header">Engineering and Manufacturing  <div><i class="bi bi-rocket-takeoff straticons"></i></div></h3>
        <p>
        Stesh fokuserar på rekrytering av kunniga ingenjörer, slipar deras tekniska kompetens och ser till att dina tillverknings- och ingenjörsteam är redo för framgång i den konkurrensutsatta miljön.
        </p>
      </div>

      <div class="card">
        <div class="card-img card-three"></div>
        <h3 class="card-header">Business & Marketing <div><i class="bi bi-trophy straticons"></i></div></h3>
        <p>
        Att attrahera och behålla toppkompetens är avgörande för framgång. På Stesh är vi specialiserade på att erbjuda omfattande lösningar för talang som är skräddarsydda för att möta de dynamiska behoven hos företag och marknadsföringsteam. Oavsett om du är en uppstart som vill bygga ett framstående team eller ett etablerat företag som söker nya insikter, är våra tjänster utformade för att ge dig tillgång till den bästa talangen.
        </p>
      </div>
      </div>
    </section>

        </>
    )
}
export default Services