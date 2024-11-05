// StudentsCard.js
import "./StudentsCard.css";
import profile from "../../assets/profile.png";
import { Navigate, useNavigate } from "react-router-dom";
import { LinearProgress, Box, Typography, Button } from "@mui/material";

const StudentsCard = () => {
  const score = 85; // Example score value
  const duration = 60; // Example duration value (e.g., minutes completed)
  const maxDuration = 120; // Total duration (e.g., total minutes of a course)

  const navigate = useNavigate()
  const handleOverviewClick = () => {
    navigate('/overview')
  };

  return (
    <section className="StudentsCard-Container">
      <div className="StudentCard-content">
        <img src={profile} className="profile" alt="Profile" />
        <h1>Naveen Sakthi</h1>

        {/* Score Progress Bar */}
        <Box sx={{ width: "100%", marginTop: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            Score: {score}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={score}
            sx={{
              height: 8,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#4caf50", // Green color for the score bar
                borderRadius: 5,
              },
              "&.MuiLinearProgress-colorPrimary": {
                backgroundColor: "#e0e0e0", // Background color for the score bar
              },
            }}
          />
        </Box>

        {/* Duration Progress Bar */}
        <Box sx={{ width: "100%", marginTop: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 1 }}
          >
            Duration: {duration}  minutes
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(duration / maxDuration) * 100} // Calculate percentage for duration
            sx={{
              height: 8,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#2196f3", // Blue color for the duration bar
                borderRadius: 5,
              },
              "&.MuiLinearProgress-colorPrimary": {
                backgroundColor: "#e0e0e0", // Background color for the duration bar
              },
            }}
          />
        </Box>

        {/* Overview Button */}
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOverviewClick}
            sx={{ borderRadius: 20,outline:"none",border:"none", padding: "10px 15px 7px 15px",marginBottom:"25px",marginLeft:"3vh" }} // Adjust button style
          >
            Overview
          </Button>
        </Box>
      </div>
    </section>
  );
};

export default StudentsCard;
