import React  from "react";

export default function Section7(props) {


  return (
    <>

   {/* EXPERIENCE SECTION */}
    <section className="d-flex flex-column align-items-center pb-5" id="experience-section">
   <h3 className="my-5">...My Experience...</h3>
   <section className="d-flex justify-content-center align-items-center flex-wrap w-100">
   <div className="experience-div d-flex justify-content-center align-items-center my-1 mx-1 border p-4 rounded">
    <img src="./images/ecell.png" alt="e-cell" id="e-cell-img" className="mx-4"/>
    <div className="d-flex flex-column">
        <p className="fw-bolder">Core Commitee Member</p>
        <p>Entrepreneurship Cell, VIT</p>
        <p>Feb,2023 - Present</p>
        <p>Vellore, Tamil Nadu</p>
    </div>
   </div>
   <div className="experience-div d-flex justify-content-center align-items-center my-1 mx-1 border p-4">
    <img src="./images/ias.png" alt="ias" id="ias-img" className="mx-4"/>
    <div className="d-flex flex-column">
        <p className="fw-bolder">Core Commitee Member</p>
        <p>IEEE IAS, VIT</p>
        <p>Feb,2023 - Present</p>
        <p>Vellore, Tamil Nadu</p>
    </div>
   </div>
   </section>
   <section className="d-flex justify-content-center w-100 flex-wrap">
   <div className="experience-div d-flex justify-content-center align-items-center my-1 mx-1 py-4 px-5 border">
    <img src="./images/jc.png" alt="jc" id="jc-img" className="mx-4"/>
    <div className="d-flex flex-column">
        <p className="fw-bolder">Senior Core Member</p>
        <p>Juvenile Care, VIT</p>
        <p>Mar,2022 - Present</p>
        <p>Vellore, Tamil Nadu</p>
    </div>
   </div>
   <div className="experience-div d-flex justify-content-center align-items-center my-1 mx-1 p-4 border">
    <img src="./images/oasis1.png" alt="oasis" id="oasis-img" className="mx-4"/>
    <div className="d-flex flex-column">
        <p className="fw-bolder">Web Development Intern</p>
        <p>Oasis Infobyte . Internship</p>
        <p>Sept,2022 - Oct,2022</p>
        <p>Remote Internship</p>
    </div>
   </div>
   </section>
 
   </section>

    </>
  );
}
