import React from "react";

export default function Contact(props) {
  return (
    <>

    {/* CONTACT SECTION */}
    <section className="d-flex flex-column align-items-center py-5" id="contact-section">
      <h3 className="contact-h3 py-4 text-center">...Designing With Passion While Exploring The World...</h3>
      <h4 className="contact-h4 text-center">Akshat S Somvanshi</h4>
      <h5 className="contact-h5 py-2 text-center">akshatsingh0920021816@gmail.com | (+91) 9555219227</h5>
      <img src="./images/sign.png" alt="sign" id="sign-contact-img"></img>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center w-100 py-4">
        <img src="./images/github.png" alt="github" className="contact-logo ms-3"></img>
        <img src="./images/linkedin.png" alt="linkedin" className="contact-logo ms-3"></img>
        <img src="./images/insta.png" alt="instagram" className="contact-logo ms-3"></img>
        <img src="./images/facebook.png" alt="facebook" id="facebook-img" className="ms-3"></img>
      </div>
      <h3 className="contact-h3 pt-4 text-center">If Not Now, When ?</h3>
      <h3 className="contact-h3 text-center">Let's Work Together!</h3>
      </section>
    </>
  );
}
