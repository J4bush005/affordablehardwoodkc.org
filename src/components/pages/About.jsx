import React from "react";
import { motion } from "framer-motion";
import Media from "react-media";
import { Link } from "react-router-dom";
import Insta from "../images/ig logo.png";
import Face from "../images/face.png";
import Linked from "../images/Linked.png";
import Clean from "../images/clean.jpg";
import Damage from "../images/water floors.png";
import Milk from "../images/milk.jpg";
import ScrollToTop from "../ScrollToTop";

import { useRef } from "react";
import { Button } from "bootstrap";

const insta = "https://www.instagram.com/hardwoodboss_/";
const face = "https://www.facebook.com/profile.php?id=100001292195808";
const linked = "https://www.linkedin.com/in/johnathon-forbush-a4ba3373/";
const mine = "https://j4bush005.github.io/";

function About() {
  const reviews = useRef(null);
  const care = useRef(null);
  const jobs = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      {/*Phones*/}
      <Media query="(max-width: 768px)">
        <div>
          <section id="welcome">
            <div className="row d-flex justify-content-center">
              <div id="style" className="col text-center">
                <div id="open-heading-sm" className="1-text heading-text ">
                  About Our Family
                </div>
                <div className="flex d-flex justify-content-center">
                  <div className="x1 goldbar home-ab">
                    <div className="x1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col">
                <div className="text-center rev">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div>
                  <ul>
                    <li
                      id="move-left-sm"
                      onClick={() => scrollToSection(reviews)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Our Reviews
                    </li>
                    <li
                      id="section-scroll-about-sm"
                      onClick={() => scrollToSection(care)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Floor Caring Tips
                    </li>
                    <li
                      id="move-right-sm"
                      onClick={() => scrollToSection(jobs)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Find A Career
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              ref={reviews}
              id="reviews"
              className="page-section call-to-action d-flex mt-10"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Customer Reviews</h1>
                </div>
              </div>
            </section>
            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <p className="text-center rev mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="review-cards">
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "My sister kitchen floor was dry-rotted and needed
                            someone to look at it to get a quote/estimate my
                            neice referred him/******** to us but I failed to
                            take a before and after shot of the damage
                            floor...the repair was priceless the entire family
                            gave him a 50 ?? rating for an outstanding job as
                            well as being very professional, knowledgeable,
                            honest, kind and polite...I highly recommend his
                            service"
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "I contacted Johnathon/Affordable Hardwood for a
                            quote on refinishing my existing floors. I explained
                            what I wanted and he was knowledgeable about the
                            finish and look I was going for. Pricing was
                            competitive and quality is amazing! The team worked
                            diligently! I highly recommend this company for your
                            flooring needs!"
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "I want to thank Johnathon and his team for the
                            amazing job on my floors not only were they
                            professional they also was very efficient and clean
                            , They got the job done in a timely manner. My
                            floors look absolutely amazing ... I would recommend
                            them to ANYONE! If you want the job done right ..
                            contact Affordable hardwood .. you will not be
                            disappointed!!!!"
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Maecenas porttitor congue massa. Fusce
                            posuere, magna sed pulvinar ultricies, purus lectus
                            malesuada libero, sit amet commodo magna eros quis
                            urna. Nunc viverra imperdiet enim. Fusce est.
                            Vivamus a tellus. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Maecenas porttitor
                            congue massa. Fusce posuere, magna sed pulvinar
                            ultricies, purus lectus malesuada libero, sit amet
                            commodo magna eros quis urna. Nunc viverra imperdiet
                            enim. Fusce est. Vivamus a tellus."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              ref={care}
              id="floor-care"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Hardwood Care Instructions</h1>
                </div>
              </div>
            </section>

            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <p className="text-center rev mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="caring-steps-sm">
              <div className="row">
                <div className="col">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    How to Take Care of Your Hardwood Floors
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img className="mop-sm" src={Clean} alt="" />
                </div>
              </div>
            </section>

            <section id="dont">
              <div className="row">
                <div className="col">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    How to Not Damage Your Floors
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-11">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <img src={Damage} alt="" className="damage-sm" />
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              ref={jobs}
              id="find-career"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Find a Career</h1>
                </div>
              </div>
            </section>

            <section id="join-fam">
              <div className="row">
                <div className="col">
                  <div id="care-heading" className="1-text heading-text">
                    Join Our Family
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div id="fam" className="second-word">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </div>
                </div>
              </div>
            </section>

            <section id="job-table">
              <div className="row justify-content-center mt-5">
                <div className="col-10">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th id="plus" scope="row">
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Crafts-desc"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Craftsman
                        </td>
                        <section
                          id="Crafts-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Maecenas porttitor congue
                                massa. Fusce posuere, magna sed pulvinar
                                ultricies, purus lectus malesuada libero, sit
                                amet commodo magna eros quis urna. Nunc viverra
                                imperdiet enim. Fusce est. Vivamus a tellus.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th id="plus" scope="row">
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Installer-desc"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Installer
                        </td>
                        <section
                          id="Installer-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Maecenas porttitor congue
                                massa. Fusce posuere, magna sed pulvinar
                                ultricies, purus lectus malesuada libero, sit
                                amet commodo magna eros quis urna. Nunc viverra
                                imperdiet enim. Fusce est. Vivamus a tellus.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th id="plus" scope="row">
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Sander-desc"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Sander
                        </td>
                        <section
                          id="Sander-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Maecenas porttitor congue
                                massa. Fusce posuere, magna sed pulvinar
                                ultricies, purus lectus malesuada libero, sit
                                amet commodo magna eros quis urna. Nunc viverra
                                imperdiet enim. Fusce est. Vivamus a tellus.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div>
          <section id="welcome">
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div id="open-heading" className="1-text heading-text">
                  About Our Family
                </div>
                <div className="flex">
                  <div className="x1 goldbar home-ab">
                    <div className="x1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div className="r-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8">
                <div>
                  <ul>
                    <li
                      id="move-left"
                      onClick={() => scrollToSection(reviews)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Our Reviews
                    </li>
                    <li
                      id="section-scroll-about"
                      onClick={() => scrollToSection(care)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Floor Caring Tips
                    </li>
                    <li
                      id="move-right"
                      onClick={() => scrollToSection(jobs)}
                      className="btn"
                      type="button"
                      role="button"
                    >
                      Find A Career
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              id="reviews"
              className="page-section call-to-action d-flex mt-10"
              ref={reviews}
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Customer Reviews</h1>
                </div>
              </div>
            </section>

            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-5">
                    <p className="text-center rev mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="review-cards">
              <div className="container-fluid text-center">
                <div className="row first-row">
                  <div className="col-md-8">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "I am incredibly satisfied with the services
                            provided by Affordable Hardwood KC and would highly
                            recommend them to anyone in need of hardwood
                            flooring. Johnathon and his team have exceeded my
                            expectations in every aspect, and I am grateful for
                            their dedication to delivering exceptional results.
                            Look no further than Affordable Hardwood KC for
                            unmatched value and craftsmanship that will
                            transform your home."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "I contacted Johnathon/Affordable Hardwood for a
                            quote on refinishing my existing floors. I explained
                            what I wanted and he was knowledgeable about the
                            finish and look I was going for. Pricing was
                            competitive and quality is amazing! The team worked
                            diligently! I highly recommend this company for your
                            flooring needs!"
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row second-row">
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "I want to thank Johnathon and his team for the
                            amazing job on my floors not only were they
                            professional they also was very efficient and clean
                            , They got the job done in a timely manner. My
                            floors look absolutely amazing ... I would recommend
                            them to ANYONE! If you want the job done right ..
                            contact Affordable hardwood .. you will not be
                            disappointed!!!!"
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "I recently had the pleasure of working with
                            Affordable Hardwood for the installation of
                            hardwood flooring in my home, and I must say that
                            the experience was nothing short of excellent.
                            Johnathon, the owner, and his team are true
                            professionals who prioritize customer satisfaction
                            and deliver outstanding results."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "What sets Affordable Hardwood apart is their
                            commitment to providing unbeatable value. Their
                            pricing is affordable without compromising on the
                            quality of materials or craftsmanship. Johnathon's
                            transparency and honesty in pricing made the entire
                            process stress-free and enjoyable. It's rare to find
                            such a perfect balance of affordability and
                            quality."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row third-row">
                  <div className="col-6">
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "The installation process was seamless and
                            efficient. The team arrived promptly and completed
                            the project within the agreed timeline. Their
                            craftsmanship was exceptional, leaving me with
                            beautiful hardwood floors that added elegance to my
                            home. I appreciate their commitment to ensuring
                            every detail was perfect."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    {" "}
                    <div id="body" className="card">
                      <div id="cards" className="card-body">
                        <blockquote className="blockquote mb-0">
                          <p>
                            "I highly recommend Affordable Hardwood to anyone
                            in need of hardwood flooring services. Johnathon and
                            his team have exceeded my expectations in terms of
                            professionalism, craftsmanship, and affordability. I
                            am delighted with the outcome and grateful for their
                            dedication. Thank you, Affordable Hardwood KC, for
                            transforming my home with beautiful hardwood
                            floors."
                          </p>
                          <footer id="value" className="blockquote-footer">
                            Valued Customer
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <section
              ref={care}
              id="floor-care"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Hardwood Care Instructions</h1>
                </div>
              </div>
            </section>
            <section
              id="open-review"
              className=" mt-2 page-section call-to-action d-flex"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-7">
                    <p className="text-center rev mt-3">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Maecenas porttitor congue massa. Fusce posuere, magna sed
                      pulvinar ultricies, purus lectus malesuada libero, sit
                      amet commodo magna eros quis urna. Nunc viverra imperdiet
                      enim. Fusce est. Vivamus a tellus.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="caring-steps">
              <div className="row justify-content-evenly d-flex">
                <div className="col-5">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    How to Take Care of Your Hardwood Floors
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img className="mop" src={Clean} alt="" />
                </div>
              </div>
            </section>

            <section id="dont" className="page-section call-to-action d-flex">
              <div className="row justify-content-evenly">
                <div className="col-6">
                  <img src={Damage} alt="" className="damage" />
                </div>
                <div className="col-5">
                  {" "}
                  <div id="care-heading" className="1-text heading-text">
                    How to Not Damage Your Floors
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x1"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="first-row">
                        <div className="first-word">Step</div>
                        <div className="second-word">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Maecenas porttitor congue massa. Fusce posuere,
                          magna sed pulvinar ultricies, purus lectus malesuada
                          libero, sit amet commodo magna eros quis urna. Nunc
                          viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              ref={jobs}
              id="find-career"
              className="page-section call-to-action d-flex mt-3"
            >
              <div className="py-lg-5">
                <div className="col-lg-12 col-md-8 mx-auto">
                  <h1 className="mb-5">Find a Career</h1>
                </div>
              </div>
            </section>

            <section id="join-fam">
              <div className="row">
                <div className="col">
                  <div id="care-heading" className="1-text heading-text">
                    Join Our Family
                  </div>
                  <div className="flex">
                    <div className="x1 goldbar home new">
                      <div className="x2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <div id="fam" className="second-word">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </div>
                </div>
              </div>
            </section>

            <section id="job-table">
              <div className="row justify-content-center mt-5">
                <div className="col-10">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <th id="plus" scope="row">
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Crafts-desc"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Craftsman
                        </td>
                        <section
                          id="Crafts-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Maecenas porttitor congue
                                massa. Fusce posuere, magna sed pulvinar
                                ultricies, purus lectus malesuada libero, sit
                                amet commodo magna eros quis urna. Nunc viverra
                                imperdiet enim. Fusce est. Vivamus a tellus.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th id="plus" scope="row">
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Installer-desc"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Installer
                        </td>
                        <section
                          id="Installer-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Maecenas porttitor congue
                                massa. Fusce posuere, magna sed pulvinar
                                ultricies, purus lectus malesuada libero, sit
                                amet commodo magna eros quis urna. Nunc viverra
                                imperdiet enim. Fusce est. Vivamus a tellus.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                      <tr>
                        <th id="plus" scope="row">
                          +
                        </th>
                        <td
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#Sander-desc"
                          aria-expanded="false"
                          aria-controls="Sander-desc"
                          id="title"
                          colspan="2"
                        >
                          Sander
                        </td>
                        <section
                          id="Sander-desc"
                          className="collapse multi-collapse"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="second-word">
                                {" "}
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Maecenas porttitor congue
                                massa. Fusce posuere, magna sed pulvinar
                                ultricies, purus lectus malesuada libero, sit
                                amet commodo magna eros quis urna. Nunc viverra
                                imperdiet enim. Fusce est. Vivamus a tellus.
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div
                                id="sand-res"
                                className="1-text heading-text"
                              >
                                Responsibilites Include:
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <ol
                                id="list"
                                className="list-group list-group-numbered"
                              >
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                                <li id="list" className="list-group-item">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit. Maecenas porttitor congue
                                  massa. Fusce posuere, magna sed pulvinar
                                  ultricies, purus lectus malesuada libero, sit
                                  amet commodo magna eros quis urna. Nunc
                                  viverra imperdiet enim. Fusce est. Vivamus a
                                  tellus.
                                </li>
                              </ol>
                              <Link
                                to={"/Application"}
                                id="apply"
                                className="btn"
                                type="button"
                                role="button"
                              >
                                Apply For Position
                              </Link>
                            </div>
                          </div>
                        </section>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </Media>

      {/* Footer */}
      <div class="container my-5 foot">
        <footer class="text-center text-white">
          <div class="container">
            <section class="mt-5">
              <div class="row text-center d-flex justify-content-center">
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Estimate" class="foot-hover">
                      Request An Estimate
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Services" class="foot-hover">
                      Services
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      Reviews
                    </Link>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/About" class="foot-hover">
                      Find a Career
                    </Link>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <Link to="/Contact" class="foot-hover">
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
              class="foot-hover space"
              onClick={() => window.open(mine, "_blank")}
            >
              Forbush Technologies LLC{" "}
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

export default About;
