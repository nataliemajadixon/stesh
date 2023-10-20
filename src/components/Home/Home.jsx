import './Home.css'

const Home = () => {
    return(
        <>
    
    <section className="parallax-container">
        <div className='toptext'>
            <div className="bigtop">
            This is Stesh
            </div>
            {'\n'} 
            <div className="smalltop">
        We will join you in reaching your full potential
        </div>
        </div>
    </section>

    <section className='buffer'>
        <h1>Here is more information</h1>
        <p>Introducing Stesh, a prermier consulting firm based in Sweden. We specialize in providing expert knowledge and strategic solutions. With our deep industry knowledge and innovative approach, we empower our clients to navigate to the highest heights.<br></br>
        At Stesh, we value your opinion and understand that everyone is unique. You are about a 1 inna million. Elevate your business to new heights with Stesh Consulting ABCDEFG.
        </p>
    </section>


    <section className='parallax-container parallax-container2'>
        <div class="card">
        <div class="card-img"></div>
        <h3>service 1</h3>
        <p>
          Short writing on your service.
        </p>
        <h1>Learn more</h1>
      </div>

      <div class="card">
        <div class="card-img"></div>
        <h3>service 2</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h1>Learn more</h1>
      </div>

      <div class="card">
        <div class="card-img"></div>
        <h3>service 3</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h1>Learn more</h1>
      </div>
    </section>

    <section className='buffer'>
        <h1>About Us</h1>
        <p>Hey whats up? Welcome to Stesh. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </section>
        </>
    )
}
export default Home