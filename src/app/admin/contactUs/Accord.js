import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const [cardId, setCardId] = useState("");
  const DATA = [
    {
      id: 1,
      title: "The first heading here",
      details:
        "The placeholder attribute specifies a short hint that describes the expected value of a text area.",
    },
    {
      id: 2,
      title: "The first heading here",
      details:
        "The placeholder attribute specifies a short hint that describes the expected value of a text area.",
    },
    {
      id: 3,
      title: "The first heading here",
      details:
        "The placeholder attribute specifies a short hint that describes the expected value of a text area.",
    },
    {
      id: 4,
      title: "The first heading here",
      details:
        "The placeholder attribute specifies a short hint that describes the expected value of a text area.",
    },
    {
      id: 5,
      title: "The first heading here",
      details:
        "The placeholder attribute specifies a short hint that describes the expected value of a text area.",
    },
  ];

  return (
    <div className="container-fluid pt-5 auth-wrapper">
      <div className="row ">
        <div className="col-12 col-md-7 mx-auto">
          <h1
            className="text-lighter "
            style={{ paddingTop: "3rem", fontSize: "60px", fontWeight: "bold" }}
          >
            FAQ
          </h1>
          <p className="mt-2 font-14">
            We have gathered a bulky list of questions from our users and
            provided the best answers to these.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 col-md-7 mx-auto">
          <form>
            <div class="input-group">
              <div class="input-group-btn bg-white text-dark pt-1 px-3 rounded-start border boreder-0">
                <BsSearch />
              </div>
              <input
                type="text"
                class="form-control "
                placeholder="Search Faq"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-7">
          <div className="row mx-3">
            <div className="row mx-3">
              <div className="col-12 col-md-10  ">
                <h3 className="text-lighter text-left ">
                  Getting Started Guide
                </h3>
                <p className=" text-lighter text-left font-14">
                  We have gathered a bulky list of questions from our users and
                  provided the best answers to these.
                </p>
              </div>
            </div>
            <div className="row mx-3">
              <div className="col-12 col-md-12 rounded">
                {DATA.map((item, index) => (
                  <div
                    key={index}
                    className="border border-info border-radius-10 my-3 p-3  bg-dark-100"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-lighter text-bold p-0 m-0">
                        {item.title}{" "}
                      </h5>
                      <div
                        className="mr-2 text-bold cursor-pointer font-16"
                        onClick={() =>
                          setCardId(
                            String(cardId) === String(item.id) ? "" : item.id
                          )
                        }
                      >
                        {String(cardId) === String(item.id) ? (
                          <AiOutlineMinus />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </div>
                    </div>
                    <p
                      className={`font-14 text-left mt-3 text-lighter ${
                        String(cardId) === String(item.id)
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 ">
          <form className="row ">
            <h3 className="text-lighter text-left">
              Our experts will help you
            </h3>
            <p className="font-14 text-left text-lighter">
              You didn't see your question in the list? Feel free to reach us
              via mail, call or a visit.
            </p>
            <div className="col-12  form-group mb-3">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                required
                className="form-control  auth-input py-3"
              />
            </div>

            <div className="col-12 form-group mb-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="form-control  auth-input py-3"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="form-control  auth-input py-3"
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                rows="5"
                className=" form-control rounded py-3  auth-input "
                placeholder="Enter your Message"
                cols="60"
              ></textarea>
            </div>
            <div>
              <button className="btn btn-outline-light w-100 py-3 mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
