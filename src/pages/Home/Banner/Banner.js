import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="mt-5 container p-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active bg-dark"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className="active bg-dark"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              className="active bg-dark"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="product-img">
                <img
                  src="http://ledthanhdat.vn/html/kobolg/assets/images/slide13.jpg"
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
              <div className="product-text">
                <div className="container mx-auto">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product-detail">
                        <p>This week only</p>
                        <h2>
                          {" "}
                          New Arrivals <br />
                          <span>Modern</span> collection
                        </h2>
                        <button className="button-purchase">
                          Other Detail{" "}
                          <span>
                            <ArrowRightIcon
                              style={{
                                width: "16px",
                                height: "16px",
                                color: "white",
                              }}
                            ></ArrowRightIcon>{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="product-img">
                <img
                  src="http://ledthanhdat.vn/html/kobolg/assets/images/slide11.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="product-text">
                <div className="container mx-auto">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product-detail">
                        <p>Black Friday</p>
                        <h2>
                          {" "}
                          <span>Electronics</span> <br /> New Arrivals
                        </h2>
                        <button className="button-purchase">
                          Other Detail{" "}
                          <span>
                            <ArrowRightIcon
                              style={{
                                width: "16px",
                                height: "16px",
                                color: "white",
                              }}
                            ></ArrowRightIcon>{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="product-img">
                <img
                  src="	http://ledthanhdat.vn/html/kobolg/assets/images/slide32.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="product-text">
                <div className="container mx-auto">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product-detail">
                        <p>Best selling</p>
                        <h2>
                          {" "}
                          <span>Life Compani</span> <br /> Smartphone
                        </h2>
                        <button className="button-purchase">
                          Other Detail{" "}
                          <span>
                            <ArrowRightIcon
                              style={{
                                width: "16px",
                                height: "16px",
                                color: "white",
                              }}
                            ></ArrowRightIcon>{" "}
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6"></div>
        </div> */}
      </section>
    </div>
  );
};

export default Banner;
