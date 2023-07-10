import React from "react";
import SortButtons from "../../../components/buttons/SortButtons";
import PageHeader from "../../../components/pageheading/PageHeader";
// import ReportTable from "../../../components/table/ReportTable";
import UserTable from "./UserTable";

const OnlineUsers = () => {
  return (
    <div>
      <PageHeader title={"Online Users"} />
      <SortButtons />
      <UserTable />
    </div>
  );
};

export default OnlineUsers;
