import React from "react";
import TableCard from "./TableCard"; // Make sure TableCard is properly imported

const StudentsTable = ({ setHoveredData }) => {
  const Datas = [
    { name: "Naveen Sakthi", mail: "naveen@gmail.com", exp: "5 years", company: "Zeone" },
    { name: "Jeyachandran J", mail: "jeyan@gmail.com", exp: "5 years", company: "Zeone" },
    { name: "John Smith", mail: "john@gmail.com", exp: "3 years", company: "Zoho" },
  ];

  return (
    <div className="tableWithCard">
      <section className="Table-Container">
        <div className="tableHead">
          <li>Name</li>
          <li style={{ marginLeft: "15vh" }}>Mail Id</li>
          <li style={{ marginLeft: "13vh" }}>Experience</li>
          <li>Company Name</li>
        </div>

        <div className="tableContent">
          {Datas.map((item, index) => (
            <div
              key={index}
              className="TableCard-Container"
              onClick={() => setHoveredData(item)}  // Set hovered data when clicked
            >
              <TableCard value={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentsTable;
