import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AptitudeResult() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("interviewResult"));
    setResult(data);
  }, []);

  return (
    <Box sx={{ p: 4 }}>

      {!result ? (
  <Typography color="error" variant="h6">
    Result not published
  </Typography>
) : result.status === "scheduled" ? (
  <Box>
    <Typography variant="h5" color="green">
      🎉 You are selected for interview!
    </Typography>

    <Typography><b>Name:</b> {result.name}</Typography>
    <Typography><b>Date:</b> {result.date}</Typography>
    <Typography><b>Time:</b> {result.time}</Typography>
    <Typography><b>Place:</b> {result.place}</Typography>
  </Box>
) : (
  <Typography variant="h5" color="red">
    ❌ Sorry, you are not selected.
  </Typography>
)}

      <Button
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => navigate("/head-dashboard")}
      >
        Back to Dashboard
      </Button>

    </Box>
  );
}

export default AptitudeResult;