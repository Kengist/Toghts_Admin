import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import DateTime from "../../../components/time/DateTime";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import PageHeader from "../../../components/pageheading/PageHeader";

const AdminCategories = () => {
  // const [cardId, setCardId] = useState(false);

  return (
    <div>
      {/* <PageHeader title={"Categories"} /> */}
      <div className="border-bottom my-3 ">
        <span className="d-flex justify-content-center">
          <DateTime />
        </span>
        <h3 className="text-center mb-2 py-2">Categories</h3>
      </div>
      <div className="my-5 border py-5 bg-light w-50 mx-auto rounded">
        <div className="categoryBox">
          <BsPlusCircleDotted /> Add New Category
        </div>
        <hr className="w-50 mx-auto" />
        <p className="text-center">Next Page</p>
        <div className=" my-3 w-50 mx-auto">
          <select class="form-select ">
            <option>Select Location</option>
            <option>Abuja</option>
            <option>Lagos</option>
            <option>PortHarcourt</option>
            <option>Anambra</option>
            <option>Enugu</option>
            <option>Delta</option>
            <option>Abia</option>
          </select>
        </div>
        <hr className="w-50 mx-auto" />
        <p className="text-center">Last Page</p>
        <div className="categoryBox mb-3">Choose Category Design</div>
        <div className="categoryBox">Effect Now</div>
      </div>
    </div>
    // </div>
  );
};

export default AdminCategories;
