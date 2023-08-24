import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.webp";
import Face from "../images/face.webp";
import Linked from "../images/Linked.webp";

export const Estimate = () => {
  const form = useRef();

  const insta = "https://www.instagram.com/hardwoodboss_/";
  const face = "https://www.facebook.com/profile.php?id=100001292195808";
  const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
  const mine = "https://www.forbushtech.com/";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggoftfp",
        "template_yg7g411",
        form.current,
        "Xo5Ogclq3NzvJmthw"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.open("/ThankYou");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container-fluid">
      <form ref={form} onSubmit={sendEmail}>
        <div class="row g-3 d-flex justify-content-center">
          <div className="col-6">
            <label class="form-label topper">Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="John Smith"
              name="user_name"
            />
          </div>

          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Email:</label>
              <input
                type="email"
                class="form-control"
                placeholder="JSmith@gmail.com"
                name="user_email"
              />
            </div>
            
          </div>

           <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Phone Number:</label>
              <input
                type="number"
                class="form-control"
                placeholder="(xxx)-xxx-xxxx"
                name="user_number"
              />
            </div>
            
          </div>

           <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
              <label class="form-label">Address:</label>
              <input
                type="text"
                class="form-control"
                placeholder="425 Sugar Lane"
                name="user_address"
              />
            </div>
            
          </div>

          

          
          <div className="row g-3 d-flex justify-content-center">
            <div className="col-6">
      
              <input class="send" type="submit" value="Send" />
            </div>
          </div>
        </div>
      </form>
      <div class="container my-5 foot">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center pt-5">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="text-white">
                      About us
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Services" class="text-white">
                      Services
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="text-white">
                      Reviews
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="text-white">
                      Find a Career
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Contact" class="text-white">
                      Contact
                    </Link>
                  </h6>
                </div>
              </div>
            </section>

            <hr class="my-5" />
            <section class="mb-4 move">
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-instagram">
                  <img
                    src={Insta}
                    class="img-fluid hover"
                    onClick={() => window.open(insta, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-facebook-f">
                  <img
                    src={Face}
                    class="img-fluid hover"
                    onClick={() => window.open(face, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
              <Link
                to="/"
                class="btn btn-floating m1"
                role="button"
                aria-expanded="false"
              >
                <i class="fab fa-linkedin">
                  <img
                    src={Linked}
                    class="img-fluid hover"
                    onClick={() => window.open(linked, "_blank")}
                    alt=""
                  />
                </i>
              </Link>
            </section>
          </div>
          <div class="text-center p-3">
            Designed by:
            <Link
              to="/"
              class="text-white space"
              onClick={() => window.open(mine, "_blank")}
            >
              Forbush Technologies LLC{" "}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Estimate;

