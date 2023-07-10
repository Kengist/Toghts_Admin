import React from "react";
import { Table } from "reactstrap";
import LinkButton from "../../../components/buttons/LinkButton";
import TitleButton from "../../../components/buttons/TitleButton";
import SubPageHeader from "../../../components/pageheading/SubPageHeader";
import ProfilesPics from "../../../components/profilepics/ProfilesPics";

const ReportedMessage = () => {
  return (
    <div>
      {/* <SubPageHeader/> */}
      <SubPageHeader
        title={"Reported Message"}
        id={"#15,261"}
        href={"/app/admin/all-message"}
      />
      <div
        className="  d-flex justify-content-between pb-3 border-bottom"
        style={{
          width: "50%",
        }}
      >
        <TitleButton name={"Nsw"} />
        <div
          className="d-flex justify-content-between"
          style={{
            width: "40%",
          }}
        >
          <TitleButton
            name={"Public"}
            className="mx-2"
            style={{
              background: "red",
            }}
          />
          <TitleButton name={"Anonymous"} />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Profile Image</th>
            <th>Title </th>
            <th>Time </th>

            <th>Actions</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#15261</td>
            <td>
              <ProfilesPics />
            </td>
            <td>Request For Partnership </td>
            <td>19:39 </td>
            <td>
              <LinkButton href={"/app/admin/message-review "} name={"View "} />
            </td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ReportedMessage;
