import React, { useState } from "react";

export default function Section3() {
  let [b1, setB1] = useState("border-0 border-bottom border-dark");
  let [b2, setB2] = useState("border-0");
  let [displaySkills1, setDisplaySkills1] = useState("d-flex flex-wrap");
  let [displaySkills2, setDisplaySkills2] = useState("d-none");
  let toggleSkills = (choice) => {
    if (choice === 1) {
      setB1("border-0 border-bottom border-dark");
      setB2("border-0");
      setDisplaySkills1("d-flex flex-wrap");
      setDisplaySkills2("d-none");
    } else if (choice === 2) {
      setB1("border-0");
      setB2("border-0 border-bottom border-dark");
      setDisplaySkills1("d-none");
      setDisplaySkills2("d-flex flex-wrap");
    }
  };
  return (
    <>

     {/* SKILLS SECTION */}
      <section
        className="d-flex flex-column align-items-center justify-content-center py-4"
        id="skills-section"
      >
        <h3 className="py-3">...My Skills...</h3>
        <div className="my-1 mx-auto">
          <button
            className={`btn btn-outline-danger  py-3 rounded  ${b1}`}
            id="btn-radio1"
            onClick={() => toggleSkills(1)}
          >
            Front-End Development
          </button>
          <button
            className={`btn btn-outline-danger  py-3 rounded  ${b2}`}
            id="btn-radio2"
            onClick={() => toggleSkills(2)}
          >
            Data Structures & Algorithm
          </button>
        </div>
        <div
          className={`${displaySkills1}  align-items-center justify-content-evenly w-100 my-4`}
          id="skills-div1"
        >
          <div>
            <img
              src="./images/html.png"
              alt="html"
              className="mx-3"
              id="html-img"
            />
            <p className="text-center">HTML5</p>
          </div>
          <div>
            <img
              src="./images/css.png"
              alt="css"
              className="mx-3"
              id="css-img"
            />
            <p className="text-center">CSS</p>
          </div>
          <div>
            <img
              src="./images/js.png"
              alt="javascript"
              className="mx-3"
              id="js-img"
            />
            <p className="text-center">JavaScript</p>
          </div>
          <div className="">
            <img
              src="./images/react.png"
              alt="javascript"
              className="mx-3 pt-3 pb-1"
              id="react-img"
            />
            <p className="text-center">ReactJS</p>
          </div>
          <div>
            <img
              className="mt-4 mx-3"
              src="./images/bootstrap.png"
              alt="bootstrap"
              id="bootstrap-img"
            />
            <p className="text-center">Bootstrap</p>
          </div>
        </div>
        <div
          className={`${displaySkills2}  align-items-center justify-content-evenly w-100 my-4`}
          id="skills-div2"
        >
          <div>
            <img
              src="./images/java.png"
              alt="java"
              id="java-img"
              className="mx-3"
            />
            <p className="text-center">Java</p>
          </div>
          <div>
            <img src="./images/c++.png" alt="c++" id="c-img" className="mx-3" />
            <p className="text-center">C++</p>
          </div>
        </div>
      </section>
    </>
  );
}
