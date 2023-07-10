import React from "react";
import PageHeader from "../../../components/pageheading/PageHeader";
import UserTable from "./UserTable";

const RegisteredUsers = () => {
  return (
    <div>
      <PageHeader title={"Regisered Users"} />
      <UserTable />
    </div>
  );
};

export default RegisteredUsers;
