import React from "react";
import SortButtons from "../../../components/buttons/SortButtons";

import PageHeader from "../../../components/pageheading/PageHeader";
import ReportTable from "../../../components/table/ReportTable";

const ReportedComment = () => {
  return (
    <div>
      <PageHeader title={"Reported Comments"} />
      {/* <hr /> */}
      <div className="">
        <SortButtons />
        <ReportTable />
      </div>
    </div>
  );
};

export default ReportedComment;
