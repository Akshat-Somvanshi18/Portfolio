import React from "react";

export default function Section4(props) {
  return (
    <>

    {/* CERTIFICATION SECTION */}
    <section className="d-flex flex-column align-items-center justify-content-center pb-4" id="certification-section">
    <h3 className="text-center py-5">...My Certifications...</h3>
    <section className="d-flex align-items-center justify-content-evenly flex-wrap w-100"> 
      <div className="certification-div d-flex flex-column align-items-center mx-2 my-2 border border-dark p-4 rounded-5">
        <h5>CSS (Cascading Style Sheet)</h5>
        <p className="text-center fw-bolder">HackerRank</p>
        <p className="text-center text-break">Issued Aug 2022 : No Expiration Date</p>
        <p className="text-center text-break">Credential ID : 826913E2BDEC</p>
        <a href="https://www.hackerrank.com/certificates/826913e2bdec" target="_blank" rel="noreferrer"><button className="btn btn-outline-danger mt-3">Show Credential</button></a>
      </div>
      <div className="certification-div d-flex flex-column align-items-center mx-2 my-2 p-4 border border-dark rounded-5">
        <h5>HTML</h5>
        <p className="text-center fw-bolder">Lumos Learning India Pvt Ltd.</p>
        <p className="text-center text-break">Issued Aug 2022 : No Expiration Date</p>
        <p className="text-center text-break">Credential ID : 02294fc813128bc8368109f7bf930261</p>
        <a href="https://www.lumoslearning.com/llwp/student-certificate-view.html?certificateid=02294fc813128bc8638109f7bf930261#" target="_blank" rel="noreferrer"><button className="btn btn-outline-danger mt-3">Show Credential</button></a>
      </div>
      <div className="certification-div d-flex flex-column align-items-center mx-2 my-2 p-4 border border-dark rounded-5">
        <h5>100 days of code</h5>
        <p className="text-center fw-bolder"> CodeIn Community</p>
        <p className="text-center text-break">Issued Oct 2022 : No Expiration Date</p>
        <p className="text-center text-break">Verfication : <span className="link link-primary text-decoration-underline">https://tinyurl.com/yd8dyxu4</span></p>
        <a href="https://drive.google.com/file/d/19KxudiV3aujzm-KmG3X0f2ilYSUzZUYb/view?usp=sharing" target="_blank" rel="noreferrer"><button className="btn btn-outline-danger mt-3">Show Credential</button></a>
      </div>
      </section>
      </section>

     
    </>
  );
}
