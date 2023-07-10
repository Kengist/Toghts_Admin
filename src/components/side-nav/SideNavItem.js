import { useState } from "react";
import {
  AiOutlineComment,
  AiOutlineContainer,
  AiOutlineControl,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUserAlt, FaUserSecret } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdKeyboardArrowRight,
  MdOutlineContactMail,
  MdOutlineFolderSpecial,
  MdOutlineKeyboardArrowDown,
  MdOutlineMessage,
  MdOutlineRemoveRedEye,
  MdOutlineTopic,
  MdReportGmailerrorred,
} from "react-icons/md";
import {
  RiAdvertisementLine,
  RiDeleteBinLine,
  RiLockPasswordLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import high from "../../asset/img/Vector-edit.png";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import profile from "../../asset/img/profile.jpg";

const SideNavItem = () => {
  const [submenu, setSubMenu] = useState(false);
  const [activeMenu, setActMenu] = useState("overview ");

  return (
    <div className="sidebar">
      {/* <div
        className="text-white Nav-item"
        style={{ paddingTop: "5px", borderBottom: "1px solid white" }}
      >
        <NavLink
          to={"/app/admin/overview"}
          className={`nav-link ps-5 font-18 `}
        >
          <i className={`me-3`}>
            <MdOutlineRemoveRedEye />
          </i>
          Overview
        </NavLink>
      </div> */}
      <div className="d-none  nav-width d-md-flex align-items-center justify-content-center">
        <div className="nav-profile-box">
          <img
            src={profile}
            alt=".."
            width="55"
            height="55"
            style={{ borderRadius: "50%", border: "2px solid grey" }}
          />
        </div>
        <div className=" show">
          <div
            className="d-flex flex-column justify-content-center align-items-center
          "
          >
            <span className="profile-bt font-15 font-bold">Chinwe</span>
            <span className="font-12">C.E.O</span>
            <span className="d-flex align-items-center ">
              <div className="online-indicator mx-1"></div>
              <span className="font-12">Online</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center font-15 ">50 Admins Online</p>
      </div>
      <Accordion style={{ textAlign: "left" }}>
        <AccordionItem className="bg-info" style={{ textAlign: "left" }}>
          <AccordionHeader
            onClick={() => {
              setActMenu("overview");
            }}
            className={` Nav-item ps-4  ${
              activeMenu === "overview" ? "active-menu" : ""
            } `}
            style={{ textAlign: "left" }}
          >
            <NavLink
              to={"/app/admin/overview"}
              className={`nav-link ps- font-18 text-left `}
            >
              <i className={`me-3`}>
                <MdOutlineRemoveRedEye />{" "}
              </i>
              Overview
            </NavLink>
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("adminmessage");
            }}
            className={` Nav-item ps- ${
              activeMenu === "adminmessage" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/toghts"}
              className={`nav-link ps-4 font-18 `}
            >
              <i className={`me-3`}>
                {" "}
                <FaUserSecret htmlColor="red" />
              </i>
              Admin Message
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("users");
            }}
            className={` Nav-item nav-link ps-4  ${
              activeMenu === "users" ? "active-menu" : ""
            }`}
          >
            <i className={`${""} me-3`}>
              <FaUserAlt fontSize={10} />
            </i>
            Users
            <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i>
          </AccordionHeader>

          <AccordionBody className="accordion-body">
            <div>
              <NavLink
                to={"/app/admin/users"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Newly Registered Users
              </NavLink>
              <NavLink
                to={"/app/admin/registered-users"}
                className={`nav-link-sub ps-4 font-18 mx- `}
              >
                Registered Users
              </NavLink>
              <NavLink
                to={"/app/admin/online-users"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Users Online
              </NavLink>
              <NavLink
                to={"/app/admin/suspended-users"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Suspended Users
              </NavLink>
              <NavLink
                to={"/app/admin/blocked-users"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Blocked Users
              </NavLink>
              <NavLink
                to={"/app/admin/reported-profile"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Reported Profile
              </NavLink>
              <NavLink
                to={"/app/admin/flagged-profile"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Flagged Profile
              </NavLink>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader className=" Nav-item nav-link ps-4 " style={{}}>
            <i className={`${""} me-3`}>
              <MdReportGmailerrorred />
            </i>
            Toghts
            <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i>
          </AccordionHeader>

          <AccordionBody className="accordion-body">
            <div>
              <NavLink
                to={"/app/admin/toghts"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                All Toghts
              </NavLink>
              <NavLink
                to={"/app/admin/toghts"}
                className={`nav-link-sub ps-4 font-18 mx- `}
              >
                Reported Toghts
              </NavLink>
              <NavLink
                to={"/app/admin/toghts"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Flagged Toghts
              </NavLink>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader className=" Nav-item nav-link ps-4 " style={{}}>
            <i className={`${""} me-3`}>
              <MdOutlineTopic />
            </i>
            Topics
            <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i>
          </AccordionHeader>

          <AccordionBody className="accordion-body">
            <div>
              <NavLink
                to={"/app/admin/topics"}
                className={`nav-link-sub ps-4 font-18 mx- `}
              >
                Trending Topics
              </NavLink>
              <NavLink
                to={"/app/admin/topics"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Available Topics
              </NavLink>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader className=" Nav-item nav-link ps-4 ">
            <i className={`${""} me-3`}>
              <MdReportGmailerrorred />
            </i>
            Comments
            <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i>
          </AccordionHeader>

          <AccordionBody className="accordion-body">
            <div>
              <NavLink
                to={"/app/admin/all-comments"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                All Comments
              </NavLink>
              <NavLink
                to={"/app/admin/comment-report"}
                className={`nav-link-sub ps-4 font-18 mx- `}
              >
                Reported Comments
              </NavLink>
              <NavLink
                to={"/app/admin/comment-flagged"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Flagged Comments
              </NavLink>
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem className="">
          <AccordionHeader className=" Nav-item nav-link ps-4 " style={{}}>
            <i className={`${""} me-3`}>
              <MdOutlineMessage />
            </i>
            Messages
            <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i>
          </AccordionHeader>
          <AccordionBody className="accordion-body">
            <div>
              <NavLink
                to={"/app/admin/all-message"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                All Messages
              </NavLink>
              <NavLink
                to={"/app/admin/reported-message"}
                className={`nav-link-sub ps-4 font-18 mx- `}
              >
                Reported Messages
              </NavLink>
              <NavLink
                to={"/app/admin/flagged-message"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Flagged Messages
              </NavLink>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader className=" Nav-item  nav-link ps-4" style={{}}>
            <i className={`${""} me-3`}>
              <RiDeleteBinLine />
            </i>
            Deleted Items
            <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i>
          </AccordionHeader>
          <AccordionBody className="accordion-body">
            <div>
              <NavLink
                to={"/app/admin/admin-message-panel"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Deleted Toghts
              </NavLink>
              <NavLink
                to={"/app/admin/admin-message-panel"}
                className={`nav-link-sub ps-4 font-18 mx- `}
              >
                Deleted Topics
              </NavLink>
              <NavLink
                to={"/app/admin/admin-message-panel"}
                className={`nav-link-sub ps-4 font-18  `}
              >
                Deleted Comments
              </NavLink>
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("contact");
            }}
            className={` Nav-item ps-4 ${
              activeMenu === "contact" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/contact-us-messages"}
              className={`nav-link  font-18 `}
            >
              <i className={`me-3`}>
                <MdOutlineContactMail />{" "}
              </i>
              Contact Us Messages
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("analytics");
            }}
            className={` Nav-item ps-4 ${
              activeMenu === "analytics" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/analytics"}
              className={`nav-link  font-18 `}
            >
              <i className={`me-3`}>
                <MdOutlineFolderSpecial />{" "}
              </i>
              Analytics
            </NavLink>
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("specialmessage");
            }}
            className={` Nav-item ps-4 ${
              activeMenu === "specialmessage" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/special-message"}
              className={`nav-link  font-18 `}
            >
              <i className={`me-3`}>
                <MdOutlineFolderSpecial />{" "}
              </i>
              Special Messages
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>

        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("category");
            }}
            className={` Nav-item ps- ${
              activeMenu === "category" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/categories"}
              className={`nav-link ps-4 font-18 ${""}`}
            >
              <i className={`${""} me-3`}>
                <BiCategoryAlt />
              </i>
              Categories{" "}
              <i className={`me-3 px-2`}>
                {/* <MdOutlineKeyboardArrowDown /> */}
              </i>
            </NavLink>
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("terms");
            }}
            className={` Nav-item ps- ${
              activeMenu === "terms" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/toghts"}
              className={`nav-link ps-4 font-18 `}
            >
              <i className={`me-3`}>
                {" "}
                <FaUserSecret htmlColor="red" />
              </i>
              Terms and Conditions
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("privacy");
            }}
            className={` Nav-item ps- ${
              activeMenu === "privacy" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/toghts"}
              className={`nav-link ps-4 font-18 `}
            >
              <i className={`me-3`}>
                {" "}
                <FaUserSecret htmlColor="red" />
              </i>
              Privacy Policy
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("community");
            }}
            className={` Nav-item ps- ${
              activeMenu === "community" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/toghts"}
              className={`nav-link ps-4 font-18 `}
            >
              <i className={`me-3`}>
                {" "}
                <FaUserSecret htmlColor="red" />
              </i>
              Community Guidelines
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("aboutus");
            }}
            className={` Nav-item ps- ${
              activeMenu === "aboutus" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/toghts"}
              className={`nav-link ps-4 font-18 `}
            >
              <i className={`me-3`}>
                {" "}
                <FaUserSecret htmlColor="red" />
              </i>
              About Us
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("responsibility");
            }}
            className={` Nav-item ps- ${
              activeMenu === "responsibility" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/toghts"}
              className={`nav-link ps-4 font-18 `}
            >
              <i className={`me-3`}>
                {" "}
                <FaUserSecret htmlColor="red" />
              </i>
              Responsibility Allocation
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("admanager");
            }}
            className={` Nav-item ps- ${
              activeMenu === "admanager" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/admanager"}
              className={`nav-link ps-4 font-18 ${""}`}
            >
              <i className={`${""} me-3`}>
                <RiAdvertisementLine />
              </i>
              AdManager
            </NavLink>
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("archive");
            }}
            className={` Nav-item ps- ${
              activeMenu === "archive" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/controlls"}
              className={`nav-link ps-4 text-white font-18 ${""}`}
            >
              <i className={`${""} me-3`}>
                <AiOutlineControl />
              </i>
              Archive
            </NavLink>
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("Automated");
            }}
            className={` Nav-item ps- ${
              activeMenu === "Automated" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/automated-moderation"}
              className={`nav-link ps-4 font-18 `}
            >
              <i className={`me-3`}>
                {" "}
                <FaUserSecret htmlColor="red" />
              </i>
              Automated Moderation Control
            </NavLink>
            {/* <i className={`me-3 px-2`}>
              <MdOutlineKeyboardArrowDown />
            </i> */}
          </AccordionHeader>
        </AccordionItem>

        <AccordionItem className="">
          <AccordionHeader
            onClick={() => {
              setActMenu("settings");
            }}
            className={` Nav-item   ps-4 ${
              activeMenu === "settings" ? "active-menu" : ""
            } `}
          >
            <NavLink
              to={"/app/admin/settings"}
              className={`nav-link ps-  font-18 ${""}`}
            >
              <i className={`${""} me-3`}>
                <AiOutlineControl />
              </i>
              Settings
            </NavLink>
          </AccordionHeader>
        </AccordionItem>
      </Accordion>
      {/* 
      <div
        className="text-white Nav-item"
        style={{ paddingTop: "5px", borderBottom: "1px solid white" }}
      >
        <NavLink
          to={"/app/admin/contactUs"}
          className={`nav-link ps-4 font-18 ${""}`}
        >
          <i className={`${""} me-3`}>
            <AiOutlineContainer />
          </i>
          Contact Us Message
        </NavLink>
      </div> */}

      {/* <div
        className="text-white Nav-item"
        style={{ paddingTop: "5px", borderBottom: "1px solid white" }}
      >
        <NavLink to={{ to }} className={`nav-link ps-4 font-18 ${""}`}>
          <i className={`${""} me-3`}>{icon}</i>
          {title}
        </NavLink>
      </div> */}
    </div>
  );
};

export default SideNavItem;
