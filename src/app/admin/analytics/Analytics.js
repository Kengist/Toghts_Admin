import React from "react";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { Table } from "reactstrap";
import LinkButton from "../../../components/buttons/LinkButton";
import PageHeader from "../../../components/pageheading/PageHeader";

const Analytics = () => {
  return (
    <div>
      <PageHeader title={"Analytics"} />
      <div>
        <h2 className="text-center">Worldwide</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Sections</th>
              <th>Values </th>
              <th>Percentage </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Most Active Category</td>
              <td>
                <span
                  className="py-1 px-2"
                  style={{ border: "1px solid grey", borderRadius: "5px" }}
                >
                  20%
                </span>{" "}
                2 day streak{" "}
              </td>

              <td>
                <LinkButton
                  href={"/app/admin/analytics-category "}
                  name={"View "}
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Total Toghts</td>
              <td>
                <span className="mx-3">750,350,053</span>
                <span
                  className="py-1 px-2"
                  style={{ border: "1px solid grey", borderRadius: "5px" }}
                >
                  13%
                </span>{" "}
                <BsArrowUpRight /> Increase
              </td>

              <td>
                <LinkButton
                  href={"/app/admin/analytics-category "}
                  name={"View "}
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Total Likes</td>
              <td>
                <span className="mx-3">500,350,053</span>
                <span
                  className="py-1 px-2"
                  style={{ border: "1px solid grey", borderRadius: "5px" }}
                >
                  20%
                </span>{" "}
                <BsArrowUpRight /> Increase
              </td>

              <td>
                <LinkButton
                  href={"/app/admin/analytics-category "}
                  name={"View "}
                />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Total Dislikes</td>
              <td>
                <span className="mx-3">250,350,053</span>
                <span
                  className="py-1 px-2"
                  style={{ border: "1px solid grey", borderRadius: "5px" }}
                >
                  5%
                </span>{" "}
                <BsArrowUpRight /> Increase
              </td>

              <td>
                <LinkButton
                  href={"/app/admin/analytics-category "}
                  name={"View "}
                />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Total Report</td>
              <td>
                <span className="mx-3">560,350,053</span>
                <span
                  className="py-1 px-2"
                  style={{ border: "1px solid grey", borderRadius: "5px" }}
                >
                  7%
                </span>{" "}
                <BsArrowDownLeft /> Decrease
              </td>

              <td>
                <LinkButton
                  href={"/app/admin/analytics-category "}
                  name={"View "}
                />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Total Toghts</td>
              <td>
                <span className="mx-3">280,350,053</span>
                <span
                  className="py-1 px-2"
                  style={{ border: "1px solid grey", borderRadius: "5px" }}
                >
                  10%
                </span>{" "}
                <BsArrowUpRight /> Increase
              </td>

              <td>
                <LinkButton
                  href={"/app/admin/analytics-category "}
                  name={"View "}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Analytics;
