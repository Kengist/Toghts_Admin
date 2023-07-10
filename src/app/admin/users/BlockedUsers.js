import React from "react";
import SortButtons from "../../../components/buttons/SortButtons";
import PageHeader from "../../../components/pageheading/PageHeader";
import UserTable from "./UserTable";

const BlockedUsers = () => {
  return (
    <div>
      <PageHeader title={"Blocked Users"} />
      <SortButtons />
      <UserTable />
    </div>
  );
};

export default BlockedUsers;
