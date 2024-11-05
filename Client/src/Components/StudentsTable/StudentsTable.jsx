import "./StudentsTable.css";
import TableCard from "./TableCard";
const StudentsTable = () => {
  const Datas = [
    {
      name: "Naveen Sakthi",
      mail: "naveen@gmail.com",
      exp: "5 years",
      company: "Zeone",
    },
    {
      name: "Jeyachandran J",
      mail: "jeyan@gmail.com",
      exp: "5 years",
      company: "Zeone",
    },
    {
      name: "Jhon Smith",
      mail: "jhon@gmail.com",
      exp: "3 years",
      company: "zoho",
    },
  ];
  return (
    <>
      <section className="Table-Container">
        <div>
          <div className="tableHead">
            <li>Name</li>
            <li style={{ marginLeft: "15vh" }}>Mail Id</li>
            <li style={{ marginLeft: "13vh" }}>Experience</li>
            <li>Company Name</li>
          </div>
          {/* <li>Experience - collegestudent/working</li>
                    <li>student - course/year/college Name</li>
                    <li>wokring - yearsExp/Company Name</li> */}
        </div>
        <div className="tableContent">
          {Datas.map((item) => (
            <TableCard value={item} /> 
          ))}
        </div>

      </section>
    </>
  );
};

export default StudentsTable;
