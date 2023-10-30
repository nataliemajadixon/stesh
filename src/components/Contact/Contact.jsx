import '../Home/Home.css'
import React from "react";
const Contact = () => {
    return(
        <>
    <section className='top-container contactus'>
        <h1 className='contactheader'>Kontakt Oss</h1>
        <p className='contacttext'>Vill du ta nästa steg i din karriär?
Har du en yrkesambition i åtanke och skulle vilja ha en konsultation?
Tveka inte att kontakta oss, så kommer vi att vägleda dig åt rätt håll:
bestcolorisred@stesh.se
| +46 (0) 123 45 67 89" </p>
        
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
    
    </section>
        </>
    )
};
export default Contact