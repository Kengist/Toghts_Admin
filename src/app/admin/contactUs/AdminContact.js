import React from "react";
import { Table } from "reactstrap";
import LinkButton from "../../../components/buttons/LinkButton";
import SortButtons from "../../../components/buttons/SortButtons";
import PageHeader from "../../../components/pageheading/PageHeader";
import ProfilesPics from "../../../components/profilepics/ProfilesPics";
// import Faq from "./Accord";
// import AllCollapseExample from "./Accord";

const AdminContact = () => {
  return (
    <div>
      <PageHeader title={"Contact Us Message"} />
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
              <th>Subject </th>
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
                <LinkButton
                  href={"/app/admin/contact-message "}
                  name={"View "}
                />
              </td>
              <td>Pending</td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* <Faq /> */}
    </div>
  );
};

export default AdminContact;
