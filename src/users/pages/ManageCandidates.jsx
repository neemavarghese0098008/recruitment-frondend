import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  Table,
  Checkbox,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ManageCandidates() {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [interviewDetails, setInterviewDetails] = useState({

    date: "",
    time: "",
    place: ""
  });
 // for selection process
  const handleSelect = async (candidate) => {
  try {
    await fetch(`http://localhost:3000/api/candidates/${candidate._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: candidate.status === "Selected" ? "New" : "Selected"
      })
    });

    // refresh data
    fetchCandidates();
    fetchStats(); // 🔥 IMPORTANT for graph

  } catch (err) {
    console.error(err);
  }
};

  const fetchCandidates = () => {
    fetch("http://localhost:3000/api/candidates")
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  //  REJECT FUNCTION 
  const handleReject = async (candidate) => {
    try {
      await fetch(`http://localhost:3000/api/candidates/${candidate._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: "Rejected"
        })
      });
      fetchStats(); // ✅ ADD HERE

      fetchCandidates();

    } catch (err) {
      console.error(err);
    }
  };


  //  SCHEDULE INTERVIEW FUNCTION
  const handleScheduleConfirm = async (candidate) => {
    if (!selectedDate || !selectedTime || !selectedPlace) {
      alert("Please fill all fields");
      return;
    }

    try {
      await fetch(`http://localhost:3000/api/candidates/${candidate._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: "Scheduled",
          interviewDate: selectedDate,
          interviewTime: selectedTime,
          interviewPlace: selectedPlace
        })
      });
      fetchStats(); // ✅ ADD HERE

      alert("Interview Scheduled ✅");

      // reload data from backend
      fetchCandidates();

    } catch (err) {
      console.error(err);
    }

    setOpen(false);
  };

  //EMAIL FUNCTION
  const sendEmail = async (candidate) => {
    try {
      if (!interviewDetails.date || !interviewDetails.time || !interviewDetails.place) {
        alert("Please fill interview details");
        return;
      }

      const templateParams = {
        to_name: candidate.firstName || "Candidate",
        to_email: candidate.email,
        date: interviewDetails.date,
        time: interviewDetails.time,
        place: interviewDetails.place,
      };

      const response = await emailjs.send(
        "service_sqmlhzm",
        "template_ao51vwc",
        templateParams,
        "_Bv1_1l54KKofrnYO"
      );

      alert("✅ Email Sent Successfully!");

      // ✅ UPDATE DB CORRECTLY
      await fetch(`http://localhost:3000/api/candidates/${candidate._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Selected" }) // ✅ FIXED
      });

      // ✅ RELOAD DATA
      fetchCandidates();
      fetchStats();

      // reset form
      setInterviewDetails({

        date: "",
        time: "",
        place: ""
      });

    } catch (error) {
      console.error(error);
      console.log("error");

    }
  };

  // ✅ Load data
  useEffect(() => {
    fetch("http://localhost:3000/api/candidates")
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(err => console.error(err));
  }, []);

  // ✅ Filter
  const filtered = candidates.filter((c) =>
    (c.firstName || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Manage Candidates
      </Typography>

      {/* 🔍 FILTER SECTION */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              label="Search Name"
              fullWidth
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setSearch(searchInput)}
            >
              Search
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                setSearch("");
                setSearchInput("");
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={3}>
          <TextField
            label=" Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) =>
              setInterviewDetails({ ...interviewDetails, date: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            label=" Time"
            type="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={(e) =>
              setInterviewDetails({ ...interviewDetails, time: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label=" Location"
            fullWidth
            onChange={(e) =>
              setInterviewDetails({ ...interviewDetails, place: e.target.value })
            }
          />
        </Grid>
      </Grid>


      {/* 📋 TABLE */}
      <Paper sx={{ overflowX: "auto" }}>

        <Table sx={{ tableLayout: "fixed", width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "150px" }}><b>Name</b></TableCell>
              <TableCell sx={{ width: "200px" }}><b>Email</b></TableCell>
              <TableCell sx={{ width: "120px" }}><b>Phone</b></TableCell>
              <TableCell sx={{ width: "120px" }}><b>Location</b></TableCell>
              <TableCell sx={{ width: "150px" }}><b>Date Applied</b></TableCell>
              <TableCell sx={{ width: "150px" }}><b>Email Action</b></TableCell>
              <TableCell sx={{ width: "120px" }}><b>Interview</b></TableCell>
              <TableCell sx={{ width: "120px" }}><b>Reject</b></TableCell>
              <TableCell sx={{ width: "120px" }}><b>Status</b></TableCell>
              <TableCell sx={{ width: "120px" }}><b>Delete</b></TableCell>
              <TableCell sx={{ width: "150px" }}><b>Date</b></TableCell>
              <TableCell sx={{ width: "150px" }}><b>Time</b></TableCell>
              <TableCell sx={{ width: "200px" }}><b>Place</b></TableCell>
              <TableCell sx={{ width: "200px" }}><b>Select</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
            {filtered.map((c, index) => {
  console.log(c);

  return (
    <TableRow key={c._id}>

      <TableCell
        sx={{ cursor: "pointer", color: "blue" }}
        onClick={() => setSelectedCandidate(c)}
      >
        {c.firstName} {c.lastName}
      </TableCell>

      <TableCell>{c.email}</TableCell>
      <TableCell>{c.phone}</TableCell>
      <TableCell>{c.city}</TableCell>
      <TableCell>{c.appliedDate || "Old Data"}</TableCell>

      <TableCell>
        {c.email ? (
          <Button onClick={() => sendEmail(c, index)}>
            Send Mail
          </Button>
        ) : "N/A"}
      </TableCell>

      <TableCell>
        <Button
          onClick={() => {
            setSelectedCandidate(c);
            setOpen(true);
          }}
        >
          Schedule
        </Button>
      </TableCell>

      <TableCell>
        <Button onClick={() => handleReject(c)}>Reject</Button>
      </TableCell>

      <TableCell>{c.status || "New"}</TableCell>

      <TableCell>
        <Button
          onClick={async () => {
            await fetch(`http://localhost:3000/api/candidates/${c._id}`, {
              method: "DELETE"
            });
            setCandidates(prev => prev.filter(item => item._id !== c._id));
          }}
        >
          Delete
        </Button>
      </TableCell>

      <TableCell>{c.interviewDate || "-"}</TableCell>
      <TableCell>{c.interviewTime || "-"}</TableCell>
      <TableCell>{c.interviewPlace || "-"}</TableCell>

      <TableCell>
        <Checkbox
          checked={c.status === "Selected"}
          onChange={() => handleSelect(c)}
        />
      </TableCell>

    </TableRow>
  );
})}
          

          </TableBody>
        </Table>
      </Paper>

      {/* ✅ DIALOG (OUTSIDE TABLE) */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Schedule Interview</DialogTitle>

        <DialogContent>
          <Typography>
            Schedule interview for {selectedCandidate?.firstName}
          </Typography>

          <TextField
            label="Date"
            type="date"
            fullWidth
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)
            }

            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />

          <TextField
            label="Time"
            type="time"
            fullWidth
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ mt: 2 }}
          />

          <TextField
            label="Place"
            fullWidth
            value={selectedPlace}
            onChange={(e) => setSelectedPlace(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          <Button
            variant="contained"
            onClick={async () => {
              await handleScheduleConfirm(selectedCandidate);

            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* 📄 DETAILS VIEW */}
      {selectedCandidate && (
        <Card sx={{ mt: 4, p: 3 }}>
          <Typography variant="h5" mb={2}>
            Candidate Details
          </Typography>

          <Typography><b>Name:</b> {selectedCandidate.firstName} {selectedCandidate.lastName}</Typography>
          <Typography><b>Email:</b> {selectedCandidate.email}</Typography>
          <Typography><b>Phone:</b> {selectedCandidate.phone}</Typography>

          <Typography mt={2}>
            <b>Address:</b> {selectedCandidate.address1}, {selectedCandidate.city}
          </Typography>

          <Typography mt={2}><b>Institution:</b> {selectedCandidate.institution}</Typography>
          <Typography><b>Program:</b> {selectedCandidate.program}</Typography>

          <Typography mt={2}><b>Company:</b> {selectedCandidate.company}</Typography>
          <Typography><b>Job Title:</b> {selectedCandidate.jobTitle}</Typography>

          <Typography mt={2}><b>Authorized:</b> {selectedCandidate.authorized}</Typography>
          <Typography><b>Work Country:</b> {selectedCandidate.workCountry}</Typography>
          <Typography><b>Visa Status:</b> {selectedCandidate.visaStatus}</Typography>
          <Typography><b>Citizenship:</b> {selectedCandidate.citizenship}</Typography>
          <Typography><b>DOB:</b> {selectedCandidate.dob}</Typography>

          {/* Resume */}
          <Typography mt={2}><b>Resume:</b></Typography>
          <Button
            onClick={() => {
              if (selectedCandidate?.resume) {
                window.open(selectedCandidate.resume);
              } else {
                alert("No resume uploaded");
              }
            }}
          >
            View Resume
          </Button>
        </Card>
      )}
    </Box>
  );
}

export default ManageCandidates;