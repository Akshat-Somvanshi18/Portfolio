import React  from "react";

export default function Resume(props) {


  return (
    <>

    {/* RESUME SECTION */}
    <div className="d-flex flex-column align-items-center">
    <a href="./AKSHAT_S_SOMVANSHI_RESUME.pdf" download="AKSHAT_S_SOMVANSHI_RESUME.pdf"><button className="btn btn-danger my-3">Download Resume</button></a>
    <img src="./images/resume.jpeg" alt="resume" className="w-50 mx-auto"/>
    </div>
    </>
  );
}
