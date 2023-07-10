import React from "react";
import { Table } from "reactstrap";
import LinkButton from "../../../components/buttons/LinkButton";
import TitleButton from "../../../components/buttons/TitleButton";
import PageHeader from "../../../components/pageheading/PageHeader";
import ProfilesPics from "../../../components/profilepics/ProfilesPics";

const AllMessage = () => {
  return (
    <div>
      {/* <SubPageHeader/> */}
      {/* <SubPageHeader
        title={"TAll Messages"}
        id={"#15,261"}
        href={"/app/admin/comments"}
      /> */}
      <PageHeader title={"All Message"} />
      <div
        className="  d-flex justify-content-between py-3 border-bottom"
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
            <th>Category </th>
            <th>Time of Report </th>

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
            <td>Reported </td>
            <td>19:39 </td>
            <td>
              <LinkButton href={"/app/admin/message-review "} name={"View "} />
            </td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>2</td>
            <td>#15261</td>
            <td>
              <ProfilesPics />
            </td>
            <td>Flagged </td>
            <td>19:39 </td>
            <td>
              <LinkButton href={"/app/admin/message-review "} name={"View "} />
            </td>
            <td>Treated</td>
          </tr>
          <tr>
            <td>3</td>
            <td>#15261</td>
            <td>
              <ProfilesPics />
            </td>
            <td>Reported </td>
            <td>19:39 </td>
            <td>
              <LinkButton href={"/app/admin/message-review "} name={"View "} />
            </td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>4</td>
            <td>#15261</td>
            <td>
              <ProfilesPics />
            </td>
            <td>Flagged </td>
            <td>19:39 </td>
            <td>
              <LinkButton href={"/app/admin/message-review "} name={"View "} />
            </td>
            <td>Treated</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AllMessage;
