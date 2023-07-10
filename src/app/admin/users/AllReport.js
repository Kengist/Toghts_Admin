import React from "react";
import { Table } from "reactstrap";
import LinkButton from "../../../components/buttons/LinkButton";
import TitleButton from "../../../components/buttons/TitleButton";
import SubPageHeader from "../../../components/pageheading/SubPageHeader";
import ProfilesPics from "../../../components/profilepics/ProfilesPics";

const AllReport = () => {
  return (
    <div>
      <SubPageHeader
        href={"/app/admin/reported-profile"}
        id={"@joshdboss"}
        title={"Other Asigned Report"}
      />
      <div className="d-flex justify-content-around py-3">
        <TitleButton name={"Nsw"} />
        <TitleButton name={"All"} />
        <TitleButton name={"Toghts"} />
        <TitleButton name={"Messages"} />
        <TitleButton name={"Profile"} />
        <TitleButton name={"Comments"} />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Profile Image</th>
            <th>User ID</th>
            <th>Heading/Name</th>
            <th>Time Of Report</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <ProfilesPics />
            </td>
            <td>#15261</td>
            <td>You are evil...</td>
            <td>12:45</td>
            <td>
              <TitleButton name={"View"} />
            </td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <ProfilesPics />
            </td>
            <td>#15261</td>
            <td>You are evil...</td>
            <td>12:45</td>
            <td>
              <TitleButton name={"View"} />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <ProfilesPics />
            </td>
            <td>#15261</td>
            <td>You are evil...</td>
            <td>12:45</td>
            <td>
              <TitleButton name={"View"} />
            </td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <ProfilesPics />
            </td>
            <td>#15261</td>
            <td>You are evil...</td>
            <td>12:45</td>
            <td className="align-baseline">
              <TitleButton name={"View"} />
            </td>
            <td>
              <input type="checkbox" readOnly />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <ProfilesPics />
            </td>
            <td>#15261</td>
            <td>You are evil...</td>
            <td>12:45</td>
            <td>
              <LinkButton href={"/app/admin/comments"} name={"View"} />
              {/* <TitleButton name={"View"} /> */}
            </td>
            <td className="">
              <input type="checkbox" className="" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AllReport;
