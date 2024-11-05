import "../App.css";
import DetailsCard from "../Components/DetailsCard/DetailsCard";
import StudentsCard from "../Components/StudentsCard/StudentsCard";
import StudentsTable from "../Components/StudentsTable/StudentsTable";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <section style={{ display: "flex" }}>
        <div>
          <div className="Details-container">
            <DetailsCard value={350} title={"Total Students"}/>
            <DetailsCard value={20} title={"Total Test"}/>
            <DetailsCard value={4} title={"Total Courses"}/>
          </div>

          <div>
            <StudentsTable/>
          </div>
        </div>

        <div className="Performance-container">
            <StudentsCard/>
        </div>
      </section>
    </>
  );
};

export default Home;
