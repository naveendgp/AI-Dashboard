import profile from '../assets/profile.png'
import Speedometer from '../Components/Spedometer'
import DetailsCard from '../Components/DetailsCard/DetailsCard';
const Overview = () => {

    return (
      <>
        <section>
          <h1>Overview</h1>

          <div className="Overview-container">
            <div>
              <div className="Overview-Profile">
                <img src={profile} className="overview-profile-img" alt="" />
                <div>
                  <h1 className="profile-title">Naveen Sakthi</h1>
                  <p style={{ marginLeft: "20px" }}>3rd Year</p>
                </div>
              </div>

              <div style={{marginTop:"15px",display:"flex",justifyContent:"space-evenly"}}>
                <DetailsCard value={5} title={"Active Test"}/>
                <DetailsCard value={80} title={"Total Score"}/>
                
              </div>
            </div>

            <div className="overview-statistics">
                <h1>Statistical Report</h1>
              <Speedometer value={80} />
            </div>
          </div>
        </section>
      </>
    );
}

export default Overview