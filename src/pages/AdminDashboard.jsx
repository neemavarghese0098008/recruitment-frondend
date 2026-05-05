import { Box, Typography, Card, Button } from "@mui/material";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);

  // ✅ FETCH STATS
  useEffect(() => {
    fetch("http://localhost:3000/api/admin/stats", {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  // ✅ FETCH USERS
  useEffect(() => {
    fetch("http://localhost:3000/api/admin/users", {
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log("Users:", data);
        setUsers(data);
      });
  }, []);

  // ✅ BLOCK USER
  const updateStatus = async (id, status) => {
    try {
      await fetch(`http://localhost:3000/api/admin/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({ status }),
      });

      // refresh users
      setUsers(prev =>
        prev.map(u => (u._id === id ? { ...u, status } : u))
      );
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ DELETE USER
  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/admin/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      });

      // remove from UI
      setUsers(prev => prev.filter(u => u._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Admin Dashboard
      </Typography>

      {/* 🔹 STATS */}
      <Box display="flex" gap={3} mb={4}>
        <Card sx={{ p: 3 }}>Users: {stats.totalUsers || 0}</Card>
        <Card sx={{ p: 3 }}>Candidates: {stats.totalCandidates || 0}</Card>
        <Card sx={{ p: 3 }}>Selected: {stats.selected || 0}</Card>
      </Box>

      {/* 🔹 USERS LIST */}
      <Typography variant="h6" mb={2}>
        User Management
      </Typography>

      {users.length === 0 && <Typography>No users found</Typography>}

      {users.map((user) => (
        <Card key={user._id} sx={{ p: 2, mb: 2 }}>
          <Typography>
            <b>Name:</b> {user.username}
          </Typography>

          <Typography>
            <b>Email:</b> {user.email}
          </Typography>

          <Typography>
            <b>Role:</b> {user.role}
          </Typography>

          <Typography>
            <b>Status:</b> {user.status || "active"}
          </Typography>

          <Box mt={1} display="flex" gap={2}>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => updateStatus(user._id, "blocked")}
            >
              Block
            </Button>

            <Button
              variant="outlined"
              color="success"
              onClick={() => updateStatus(user._id, "active")}
            >
              Activate
            </Button>

            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default AdminDashboard;