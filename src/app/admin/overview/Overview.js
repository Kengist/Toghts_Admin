import { FaUserAlt, FaUserSecret } from "react-icons/fa";
import { MdOutlineTopic, MdReportGmailerrorred } from "react-icons/md";
import "./Overview.css";
import high from "../../../asset/img/Vector-edit.png";
import {
  AiOutlineComment,
  AiOutlineContainer,
  AiOutlineControl,
} from "react-icons/ai";
import { BiCategoryAlt, BiSun } from "react-icons/bi";
import { RiAdvertisementLine, RiMoonClearFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

const Overview = () => {
  //   const { dispatch, listing } = useAppSelector();
  const [sun, setSun] = useState("");
  return (
    <>
      <div
        className="row content  d-md:pt-5"
        style={{
          // height: "100%",
          // overflow: "auto",
          scrollSnapType: "y",
        }}
      >
        <div className="overview-header d-flex align-items-center  justify-content-between">
          <h3 className="text-center px-3">Overview</h3>
          <div className="car overview-time-card  ">
            <h6 className=" ">December 8, 2022</h6>
            <h6 className="d-flex ">
              Monday, 8:55am{" "}
              <span className="px-4">
                {sun ? <BiSun /> : <RiMoonClearFill />}{" "}
              </span>
            </h6>
          </div>
        </div>
        <div className="overview-content container-fluid">
          <div className="row">
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>49,455</h6>
                <hr />
                <h6>Total Users Online Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6> Nigeria</h6>
                <hr />
                <h6>Most Active Country Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h5>300.1k</h5>
                <hr />
                <h6>Total New Users Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Health</h6>
                <hr />
                <h6>Most Active Category Today </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>250 </h6>
                <hr />
                <h6> Total Available Topics Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>50k</h6>
                <hr />
                <h6>Total Trending Topics Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>509k </h6>
                <hr />
                <h6>Total Comments Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>59k </h6>
                <hr />
                <h6>Total Toghts Today</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>250k </h6>
                <hr />
                <h6> Total Message Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>5k</h6>
                <hr />
                <h6>Total Reports Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Ghana </h6>
                <hr />
                <h6>Least Active Country Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Education </h6>
                <hr />
                <h6>Least Active Category Today</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Fifa World Cup </h6>
                <hr />
                <h6>orldwide No. 1 Trending Topic Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Tinubu:Baa Blu</h6>
                <hr />
                <h6>Nigeria No. 1 Trending Topic Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>590k </h6>
                <hr />
                <h6>Total Likes Today </h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>23k </h6>
                <hr />
                <h6>Total Dislikes Today</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>40k </h6>
                <hr />
                <h6>Total Shares Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>430k</h6>
                <hr />
                <h6>Total Registered Users Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>45hours </h6>
                <hr />
                <h6>Average Time Spent Yesterday</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Politics </h6>
                <hr />
                <h6>Most Searched Keyword In The World Today</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>End Bad Govt. </h6>
                <hr />
                <h6>Most Searched Keyword In Nigeria Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>430k</h6>
                <hr />
                <h6>Total Searches In The World Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>45hours </h6>
                <hr />
                <h6>Total Searches In Nigeria Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Politics </h6>
                <hr />
                <h6>Most Active City Today</h6>
              </div>
            </div>
            <div className="car col-6 col-md-3 py-2  text-center">
              <div className="card bg-light text-secondary  py-2  text-center">
                <h6>Lagos </h6>
                <hr />
                <h6>Least Active City Today</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
