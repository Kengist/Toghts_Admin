import React from "react";
import SortButtons from "../../../components/buttons/SortButtons";
import PageHeader from "../../../components/pageheading/PageHeader";
import UserTable from "./UserTable";

const SuspendedUsers = () => {
  return (
    <div>
      <PageHeader title={"Suspended Users"} />
      <SortButtons />
      <UserTable />
    </div>
  );
};

export default SuspendedUsers;
