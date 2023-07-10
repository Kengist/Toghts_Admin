import { Table } from "reactstrap";
import LinkButton from "../buttons/LinkButton";
import TitleButton from "../buttons/TitleButton";
import ProfilesPics from "../profilepics/ProfilesPics";

const ReportTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Profile Image</th>
          <th>User ID</th>
          <th>Topic Name</th>
          <th>Toght Heading</th>
          <th>Time Of Report</th>
          <th>Action</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <ProfilesPics />
          </td>
          <td>#15261</td>
          <td>Pregnant</td>
          <td>Life is hard</td>
          <td>12:45</td>
          <td>
            <TitleButton name={"View"} />
          </td>
          <td>
            <input type="checkbox" checked />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <ProfilesPics />
          </td>
          <td>#15261</td>
          <td>Pregnant</td>
          <td>Life is hard</td>
          <td>12:45</td>
          <td>
            <TitleButton name={"View"} />
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <ProfilesPics />
          </td>
          <td>#15261</td>
          <td>Pregnant</td>
          <td>Life is hard</td>
          <td>12:45</td>
          <td>
            <TitleButton name={"View"} />
          </td>
          <td>
            <input type="checkbox" checked />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>
            <ProfilesPics />
          </td>
          <td>#15261</td>
          <td>Pregnant</td>
          <td>Life is hard</td>
          <td>12:45</td>
          <td>
            <TitleButton name={"View"} />
          </td>
          <td>
            <input type="checkbox" readOnly />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
            <ProfilesPics />
          </td>
          <td>#15261</td>
          <td>Pregnant</td>
          <td>Life is hard</td>
          <td>12:45</td>
          <td>
            <LinkButton href={"/app/admin/comments"} name={"View"} />
            {/* <TitleButton name={"View"} /> */}
          </td>
          <td className="">
            <input type="checkbox" className="" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ReportTable;
