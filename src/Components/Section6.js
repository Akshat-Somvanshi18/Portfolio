import React , {useState , useEffect} from "react";
import { useForm} from '@formspree/react';
export default function Section6(props) {
 let [msg1,setMsg1]=useState("If Not Now, When?");
 let [msg2,setMsg2]=useState("Let's Work Together!");
 
 const [state, handleSubmit] = useForm("xlekwarp");

  useEffect(()=>{
    if(state.succeeded){
      setMsg1(`Thank You, ${((document.getElementById("floatingName").value).split(" "))[0]}`);
      setMsg2(`I will get back to you soon.`);
      document.getElementById("floatingName").value="";
    document.getElementById("floatingEmail").value="";
    document.getElementById("floatingNumber").value="";
    document.getElementById("floatingTextarea").value="";
    }
  } , [state.succeeded]);

  return (
    <>

    {/* FORM SECTION */}
      <section
        className="d-flex justify-content-evenly py-5 flex-wrap"
        id="form-section"
      >
        <section className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="py-2">{msg1}</h3>
          <h3 className="py-2">{msg2}</h3>
          <img
            src="./images/sign.png"
            alt="sign"
            id="sign-img"
            className="my-3"
          />
        </section>
        <form className="mx-4 needs-validation was-validated" onSubmit={handleSubmit}>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Name"
              name="Name"
              required
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="E-mail Id"
              name="Email-ID"
              required
            />
            <label htmlFor="floatingEmail">Email-Id</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="number"
              className="form-control"
              id="floatingNumber"
              placeholder="Phone Number"
              name="Phone Number"
              required
            />
            <label htmlFor="floatingNumber">Phone Number</label>
          </div>
          <div className="form-floating my-3">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="floatingTextarea"
              row="100"
              cols="50"
              name="Message"
              required
            ></textarea>
            <label htmlFor="floatingTextarea">Message</label>
          </div>

          <button className="btn btn-danger text-center w-100" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
