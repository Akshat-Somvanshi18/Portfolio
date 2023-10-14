import React from "react";
import { Link } from "react-router-dom";
export default function Section5(props) {
  return (
    <>

      {/* CARAOUSEL FOR PROJECTS */}
      <section className="py-4" id="project-section">
        <h3 className="text-center py-4">...My Projects...</h3>

        {/* PROJECTS CAROUSEL FOR LARGE SCREENS */}
        <div
          id="carouselExample"
          className="carousel carousel-dark slide  d-sm-none d-md-block d-none d-sm-block"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P1-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">TextAnalyzer</h5>
                    <p className="card-text text-center h-50">
                      React based utility web application.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(1)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P2-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">
                      Personal Portfolio Website
                    </h5>
                    <p className="card-text text-center h-50">
                      React based Personal Portfolio Website.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(2)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P3-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">
                      NFT Marketplace UI Clone
                    </h5>
                    <p className="card-text text-center h-50">
                      Clone of a NFT Marketplace Website (UI Design).
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(3)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P4-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">Calculator</h5>
                    <p className="card-text text-center h-50">
                      Mathematical Calulating Machine with a visal diaplay.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(4)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P5-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">To-Do-List</h5>
                    <p className="card-text text-center h-50">
                      Tool to organise daily tasks.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(5)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P6-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">Tic-Tac-Toe Game</h5>
                    <p className="card-text text-center h-50">
                      A 2-player 3*3 grid game also known as Noughts and
                      Crosses.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(6)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* PROJECTS CAROUSEL FOR SMALL SCREENS */}
        <div
          id="carouselExampleSmallScreen"
          className="carousel carousel-dark slide  d-none d-sm-block d-md-none"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P1-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">TextAnalyzer</h5>
                    <p className="card-text text-center h-50">
                      React based utility web application.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(1)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P2-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">
                      Personal Portfolio Website
                    </h5>
                    <p className="card-text text-center h-50">
                      React based Personal Portfolio Website.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(2)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P3-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">
                      NFT Marketplace UI Clone
                    </h5>
                    <p className="card-text text-center h-50">
                      Clone of a NFT Marketplace Website (UI Design).
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(3)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P4-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">Calculator</h5>
                    <p className="card-text text-center h-50">
                      Mathematical Calulating Machine with a visal diaplay.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(4)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P5-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">To-Do-List</h5>
                    <p className="card-text text-center h-50">
                      Tool to organise daily tasks.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(5)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
                <div className="card mx-4" style={{ width: "18rem" }}>
                  <img
                    src="./images/P6-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title h-50">Tic-Tac-Toe Game</h5>
                    <p className="card-text text-center h-50">
                      A 2-player 3*3 grid game also known as Noughts and
                      Crosses.
                    </p>
                    <Link
                      to="/Projects"
                      className="btn btn-outline-danger mt-3"
                      onClick={() => props.myfunc1(6)}
                    >
                      Show Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleSmallScreen"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleSmallScreen"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

       {/* PROJECTS CAROUSEL FOR EXTRA SMALL SCREENS */}
        <div
          id="carouselExampleXSmallScreen"
          className="carousel carousel-dark slide d-block d-sm-none"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src="./images/P1-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">TextAnalyzer</h5>
                  <p className="card-text text-center">
                    React based utility web application.
                  </p>
                  <Link
                    to="/Projects"
                    className="btn btn-outline-danger mt-3"
                    onClick={() => props.myfunc1(1)}
                  >
                    Show Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src="./images/P2-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">Personal Portfolio Website</h5>
                  <p className="card-text text-center">
                    React based Personal Portfolio Website.
                  </p>
                  <Link
                    to="/Projects"
                    className="btn btn-outline-danger mt-3"
                    onClick={() => props.myfunc1(2)}
                  >
                    Show Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src="./images/P3-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">NFT Marketplace UI Clone</h5>
                  <p className="card-text text-center">
                    Clone of a NFT Marketplace Website (UI Design).
                  </p>
                  <Link
                    to="/Projects"
                    className="btn btn-outline-danger mt-3"
                    onClick={() => props.myfunc1(3)}
                  >
                    Show Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src="./images/P4-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">Calculator</h5>
                  <p className="card-text text-center">
                    Mathematical Calulating Machine with a visal diaplay.
                  </p>
                  <Link
                    to="/Projects"
                    className="btn btn-outline-danger mt-3"
                    onClick={() => props.myfunc1(4)}
                  >
                    Show Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src="./images/P5-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">To-Do-List</h5>
                  <p className="card-text text-center">
                    Tool to organise daily tasks.
                  </p>
                  <Link
                    to="/Projects"
                    className="btn btn-outline-danger mt-3"
                    onClick={() => props.myfunc1(5)}
                  >
                    Show Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="card mx-auto" style={{ width: "18rem" }}>
                <img
                  src="./images/P6-1.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">Tic Tac Toe</h5>
                  <p className="card-text text-center">
                    A 2-player 3*3 grid game.
                  </p>
                  <Link
                    to="/Projects"
                    className="btn btn-outline-danger mt-3"
                    onClick={() => props.myfunc1(6)}
                  >
                    Show Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleXSmallScreen"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleXSmallScreen"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
