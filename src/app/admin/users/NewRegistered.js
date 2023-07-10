import React from "react";
// import profile from "../../../asset/img/profile-icon.png";
import SortButtons from "../../../components/buttons/SortButtons";
import PageHeader from "../../../components/pageheading/PageHeader";
// import { DATA, PROFILEDETAILS } from "../../../utils/data/DATA";
import UserTable from "./UserTable";

const NewRegistered = () => {
  return (
    <div>
      <PageHeader title={"Newly Registered"} />
      <SortButtons />
      <UserTable />
    </div>
  );
};

export default NewRegistered;
