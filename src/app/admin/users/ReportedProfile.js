import React from "react";
import { Table } from "reactstrap";
import LinkButton from "../../../components/buttons/LinkButton";
import SortButtons from "../../../components/buttons/SortButtons";
import PageHeader from "../../../components/pageheading/PageHeader";
import ProfilesPics from "../../../components/profilepics/ProfilesPics";
// import UserTable from "./UserTable";

const ReportedProfile = () => {
  return (
    <div>
      <PageHeader title={"Reported Profile"} />
      <SortButtons />
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
                  href={"/app/admin/reported-users-profile "}
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
                  href={"/app/admin/reported-users-profile"}
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
                  href={"/app/admin/reported-users-profile "}
                  name={"View Account"}
                />
              </td>
              <td>Active</td>
            </tr>
          </tbody>
        </Table>
      </div>{" "}
    </div>
  );
};

export default ReportedProfile;
