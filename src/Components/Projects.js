import React , {useState} from "react";

export default function Projects(props) {

  
let projectDetails = [{img1:"P1-1",img2:"P1-2",img3:"P1-3",img4:"P1-4",title:"TextAnalyzer",description1:"Text-Analyzer is a react based utility web app that allows the user to manipulate and render his text input as per the features provided. I utilized various React libraries and components to build a highly responsive user interface. The app also includes features such as dark mode and alert mode for user-convenience.",description2:"",techUsed:"ReactJS",dateCreated:"Jan 2023 - Feb 2023",githubLink:"https://github.com/Akshat-Somvanshi18/Text-Analyzer",hostedLink:"https://text-a-analyzer.netlify.app/"},
                      {img1:"P2-1",img2:"P2-2",img3:"P2-3",img4:"P2-4",title:"Personal Portfolio Website",description1:"Personal portfolio website is a digital space that showcases my professional work and accomplishments. It serves as an online representation of my skills, experience, and expertise, and is a key tool for self-promotion and networking. The website typically includes several key sections, such as an 'About Me' , 'Certification' , 'Skills' , 'Experience' , 'Contact' , 'Resume' , 'Projects' page that provides a brief overview of my background, skills, and interests.",description2:"The website design is clean, professional, and visually appealing, while also reflecting the individual's personal brand and style. It is easy to navigate, with clear links to each section and an intuitive layout that allows visitors to quickly find the information they need. Overall, It is a powerful tool for showcasing my skills and experience to potential clients, employers, and collaborators, and is a crucial component of my professional online presence." ,techUsed:"ReactJS , Bootstrap",dateCreated:"March 2023",githubLink:"https://github.com/Akshat-Somvanshi18/Akshat_S_Somvanshi",hostedLink:"https://akshat-s-somvanshi-portfolio.netlify.app/"},
                      {img1:"P3-1",img2:"P3-2",img3:"P3-3",img4:"P3-4",title:"NFT MarketPlace Clone (UI Design)",description1:"It is typically a fully-responsive UI design of the landing page of a NFT Marketplace. The design was created using the designing software FIGMA and was implemented using pure HTML, CSS, JavaScript to create similar responsive user-interface just like the FIGMA design.",description2:"The design of the clone closely match the design of the original user-interface , with the same color scheme, typography, and layout, that was created using FIGMA software. ",techUsed:"HTML , CSS , JAVASCRIPT",dateCreated:"JAN 2023",githubLink:"https://github.com/Akshat-Somvanshi18/NFT-Marketplace-Clone",hostedLink:"https://nft-a-clone.netlify.app/"},
                      {img1:"P4-1",img2:"P4-2",img3:"P4-3",img4:"P4-4",title:"Calculator",description1:"Our calculator is a web application that allows users to perform arithmetic operations such as addition, subtraction, multiplication, division, log operation, root operations etc. The calculator was developed using HTML, CSS, and JavaScript, and is designed to be responsive and user-friendly. The calculator's user interface includes a grid of buttons that represent numbers, arithmetic operations, and other functionalities such as clear and equals. The design is simple and intuitive, with large buttons and a clear display that makes it easy for users to input and read calculations.",description2:"The calculator's functionality is powered by JavaScript, which handles the calculations and updates the display in real-time. The code is designed to be modular and scalable, making it easy to add new features or modify existing ones. Overall, our calculator is a powerful and versatile tool for performing basic arithmetic operations, and is designed to be accessible and easy to use for users of all levels of experience.",techUsed:"HTML , CSS , JAVASCRIPT",dateCreated:"Jul 2022",githubLink:"https://github.com/Akshat-Somvanshi18/Calculator",hostedLink:"https://akshat-somvanshi18.github.io/Calculator/Calculator/"},
                      {img1:"P5-1",img2:"P5-2",img3:"P5-3",img4:"P5-4",title:"To Do List",description1:"Our to-do list is a web application that allows users to create and manage tasks and checklists. The application was developed using HTML, CSS, and JavaScript, and is designed to be responsive and user-friendly. The to-do list's user interface includes an input field for adding tasks, a list of existing tasks, and several functionalities such as the ability to mark tasks as complete and delete tasks. The design is clean and minimal, with simple icons and a clear layout that makes it easy for users to manage their tasks.",description2:"Overall, our to-do list is a powerful and practical tool for managing tasks and checklists, and is designed to be accessible and easy to use for users of all levels of experience.",techUsed:"HTML , CSS , JAVASCRIPT",dateCreated:"Sept 2022",githubLink:"https://github.com/Akshat-Somvanshi18/To-Do-List",hostedLink:"https://akshat-somvanshi18.github.io/To-Do-List/TO%20DO%20LIST/"},
                      {img1:"P6-1",img2:"P6-2",img3:"P6-3",img4:"P6-4",title:"Tic Tac Toe",description1:"Our tic tac toe game  is a web application that allows 2 players to enjoy the fun game also known as noughts and crosses. The application was developed using HTML, CSS, and JavaScript, and is designed to be responsive and user-friendly. The to-do list's user interface includes an input field for adding names of the players, and the playfield. The design is clean and minimal, with simple icons and a clear layout that makes it easy for users to manage their tasks.",description2:"Overall, our tic tac toe game is a fun and practical application for designed to be accessible and easy to use for users of all levels of experience.",techUsed:"HTML , CSS , JAVASCRIPT",dateCreated:"Aug 2022",githubLink:"https://github.com/Akshat-Somvanshi18/tic-tac-toe",hostedLink:"https://akshat-somvanshi18.github.io/tic-tac-toe/"}];

let b=props.detail;
  return (
    <>
   
   {/* DETAILED PROJECT SECTION */}
<section className="d-flex flex-column align-items-center">
  
<div id="carouselExample" className="carousel carousel-dark slide w-100" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={`./images/${projectDetails[b-1].img1}.png`} className="project-carousel-img d-block mx-auto" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={`./images/${projectDetails[b-1].img2}.png`} className="project-carousel-img d-block mx-auto" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={`./images/${projectDetails[b-1].img3}.png`} className="project-carousel-img d-block mx-auto" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={`./images/${projectDetails[b-1].img4}.png`} className="project-carousel-img d-block mx-auto" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="my-4">
  <a href={projectDetails[b-1].githubLink} target="_blank" className="btn btn-danger mx-2">Github Link</a>
  <a href={projectDetails[b-1].hostedLink} target="_blank" className="btn btn-danger mx-2">Hosted Link</a>
  </div>
<h5 className="tech-heading mx-4 text-center text-success">Technology Used : {projectDetails[b-1].techUsed}</h5>
<h6 className="description-summary mx-5 my-3 text-center">{projectDetails[b-1].description1}</h6>
<h6 className="description-summary mx-5 text-center">{projectDetails[b-1].description2}</h6>
</section>

    </>
  );
}
