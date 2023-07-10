import React from "react";
import { Table } from "reactstrap";
import LinkButton from "../../../components/buttons/LinkButton";
// import TitleButton from "../../../components/buttons/TitleButton";
import ProfilesPics from "../../../components/profilepics/ProfilesPics";

const UserTable = () => {
  return (
    <div>
      <div className="d-flex justify-content-between px-3 bg-light border">
        <div>
          <h5>Worldwide</h5>
        </div>
        <div>
          <h6>15,230,569</h6>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Profile Image</th>

            <th>Account</th>
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
            <td>
              <LinkButton
                href={"/app/admin/users-profile "}
                name={"View Account"}
              />
            </td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>2</td>
            <td>#15261</td>
            <td>
              <ProfilesPics />
            </td>
            <td>
              <LinkButton
                href={"/app/admin/reported-users-profile "}
                name={"View Account"}
              />
            </td>
            <td>Active</td>
          </tr>
          <tr>
            <td>3</td>
            <td>#15261</td>
            <td>
              <ProfilesPics />
            </td>
            <td>
              <LinkButton
                href={"/app/admin/users-profile"}
                name={"View Account"}
              />
            </td>
            <td>Active</td>
          </tr>
          <tr>
            <td>4</td>
            <td>#15261</td>
            <td>
              <ProfilesPics />
            </td>
            <td>
              <LinkButton
                href={"/app/admin/users-profile "}
                name={"View Account"}
              />
            </td>
            <td>Active</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
