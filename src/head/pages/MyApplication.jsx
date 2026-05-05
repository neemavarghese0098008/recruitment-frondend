import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function MyApplication() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
  fetch("http://localhost:3000/api/candidates")
    .then(res => res.json())
    .then(data => setApplications(data));
}, []);

  const getStatusDetails = (status) => {
    switch (status) {
      case "New":
        return {
          label: "In Progress",
          color: "success",
          action: "Company checked your request"
        };

      case "Selected":
        return {
          label: "Selected",
          color: "primary",
          action: "Check your mail"
        };

      case "Scheduled":
        return {
          label: "Selected for Interview",
          color: "warning",
          action: "Procedures",
          link: "/interview-details"
        };


      case "Rejected":
        return {
          label: "Rejected",
          color: "error",
          action: "Sorry, you're not selected"
        };

      case "Deleted":
        return {
          label: "Inactive",
          color: "default",
          action: "Application removed"
        };

      default:
        return {
          label: "In Progress",
          color: "success",
          action: "Company checked your request"
        };
    }
  };


  const activeData = applications.filter(
    (a) => a.status !== "Deleted"
  );

  const inactiveData = applications.filter(
    (a) => a.status === "Deleted"
  );

  const filteredData = tab === 0 ? activeData : inactiveData;

  return (
    <Box sx={{ p: 4, backgroundColor: "#f8fafc", minHeight: "100vh" }}>

      {/* HEADER */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        My Applications
      </Typography>

      <Typography sx={{ color: "#555", mb: 3 }}>
        As we are evaluating your qualifications, we may contact you to provide additional information.
        Thank you for your interest in joining our team!
      </Typography>

      {/* TABS */}
      <Tabs
        value={tab}
        onChange={(e, newVal) => setTab(newVal)}
        sx={{
          mb: 2,
          "& .MuiTabs-indicator": {
            backgroundColor: "#84cc16"
          }
        }}
      >
        <Tab label={`Active (${activeData.length})`} />
        <Tab label={`Inactive (${inactiveData.length})`} />
      </Tabs>

      {/* TABLE */}
      <Paper sx={{ borderRadius: "12px", overflow: "hidden" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f1f5f9" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Job Title</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>My Application Status</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Date Submitted</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography sx={{ textAlign: "center", py: 3 }}>
                    No applications found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((app, index) => {
                if (!app) return null;

                const statusInfo = getStatusDetails(app.status || "New");

                return (
                  <TableRow key={index} hover>

                    {/* JOB TITLE */}
                    <TableCell>
                      <Typography sx={{ color: "#2563EB", cursor: "pointer" }}>
                        {app.jobTitle || app.title}
                      </Typography>
                    </TableCell>

                    {/* STATUS */}
                    <TableCell>
                      <Chip
                        label={statusInfo.label}
                        color={statusInfo.color}
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </TableCell>

                    {/* DATE */}
                    <TableCell>
                      {app.appliedDate || app.date}
                    </TableCell>

                    {/* ACTION */}
                    <TableCell>
                      {app.status === "Deleted" ? (
                        <Typography
                          onClick={() => {
                            const deleted =
                              JSON.parse(localStorage.getItem("deletedApplications")) || [];

                            const updatedDeleted = deleted.filter(
                              (item) => item.email !== app.email
                            );

                            localStorage.setItem(
                              "deletedApplications",
                              JSON.stringify(updatedDeleted)
                            );

                            // update UI
                            setApplications((prev) =>
                              prev.filter((item) => item.email !== app.email)
                            );
                          }}
                          sx={{
                            color: "red",
                            cursor: "pointer",
                            fontWeight: 600
                          }}
                        >
                          Delete Permanently
                        </Typography>
                      ) : statusInfo.link ? (
                        <Typography
                          onClick={() => navigate(`/interview-details/${app._id}`)}
                          sx={{ color: "#2563EB", cursor: "pointer" }}
                        >
                          {statusInfo.action}
                        </Typography>
                      ) : (
                        <Typography>{statusInfo.action}</Typography>
                      )}
                    </TableCell>

                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </Paper>

    </Box>
  );
}

export default MyApplication;