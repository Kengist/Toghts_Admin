import React from "react";
import SortButtons from "../../../components/buttons/SortButtons";
import PageHeader from "../../../components/pageheading/PageHeader";
import UserTable from "./UserTable";

const RegisteredUser = () => {
  return (
    <div>
      <PageHeader title={"Registered Users"} />
      <SortButtons />
      <UserTable />
    </div>
  );
};

export default RegisteredUser;
