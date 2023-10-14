import React from "react";
import {Link} from "react-router-dom";
export default function Section2() {
  return (
    <>

    {/* ABOUT ME SECTION */}
      <section className="d-flex flex-column align-items-center py-5" id="about-section">
        <h3>...About Me...</h3>
        <section id="education-section" className="d-flex align-items-center justify-content-evenly w-100 my-4 flex-wrap">
        <div className="d-flex flex-column align-items-center justify-content-center py-3">
          <img src="./images/school-student.png" alt="logo" id="school-student-img" className="mx-2"/>
          <div className="text-center fw-bolder">
          <p>Lucknow Public Schools and Colleges</p>
          <p>XII (ISC)</p>
          <p>Percentage : 93.25%</p>
          <p>Jul, 2020</p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center py-3">
          <img src="./images/college-student.png" alt="logo" id="college-student-img" className="ms-4 me-1"/>
          <div className="text-center fw-bolder">
          <p>Vellore Institute Of Technology, Vellore</p>
          <p>B.Tech - Information Technology</p>
          <p>CGPA : 9.19*</p>
          <p>2021 - 2025</p>
          </div>
        </div>
        </section>
        <p className="text-center text-wrap w-75 py-3" id="about-summary">
          Hello! I am Akshat S Somvanshi , B.Tech second year student ,at
          Vellore Institute Of Technology , Vellore. I am skilled in
          Java(programming language) , C++(programming language) and currently
          working in ReactJS to create and innovate fully responsive web
          applications.
        </p>
        
        <div className="d-flex align-items-center justify-content-center w-100">
          <Link className="btn btn-outline-danger mx-2 px-4" to="/Resume">Resume</Link>
          <Link className="btn btn-outline-danger mx-2 " to="/Contact">Contact Me</Link>
        </div>
      </section>
    </>
  );
}
