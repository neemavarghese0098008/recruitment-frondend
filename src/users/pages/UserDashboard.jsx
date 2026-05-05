import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BarsDataset from "../components/BarsDataset";
import { Menu, MenuItem , Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
// Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";



// Quick Action Icons

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import dayjs from "dayjs";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";






function UserDashboard() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(dayjs());
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [user, setUser] = useState(null);
  const [openImage, setOpenImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
const [posts, setPosts] = useState([]);
const [editMode, setEditMode] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
const [selectedIndex, setSelectedIndex] = useState(null);
const [editIndex, setEditIndex] = useState(null);
const [stats, setStats] = useState([]);

const fetchPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();

    console.log("POSTS:", data); // debug
    setPosts(data);
  } catch (err) {
    console.error("Post fetch error:", err);
  }
};

const fetchStats = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/stats");
    const data = await res.json();

    console.log("NEW STATS:", data);   // ✅ ADD HERE
    setStats(data);
  } catch (err) {
    console.error("Stats error:", err);
  }
};
//  for chart 
 useEffect(() => {
  // ✅ Load stats + posts initially
  fetchStats();
  fetchPosts();

  // ✅ Auto refresh every 5 sec
  const interval = setInterval(() => {
    fetchStats();
    fetchPosts();
  }, 5000);

  // ✅ Load user
  const savedUser = sessionStorage.getItem("user");

  let parsedUser = null;

  try {
    parsedUser =
      savedUser && savedUser !== "undefined"
        ? JSON.parse(savedUser)
        : null;
  } catch (error) {
    console.error("Invalid user JSON:", error);
    parsedUser = null;
  }

  setUser(parsedUser);

  // ✅ cleanup
  return () => clearInterval(interval);
}, []);


const handleMenuOpen = (event, index) => {
  setAnchorEl(event.currentTarget);
  setSelectedIndex(index);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

const handleDelete = async () => {
  try {
    const postId = posts[selectedIndex]._id; // ✅ get id

    await fetch(`http://localhost:3000/api/posts/${postId}`, {
      method: "DELETE",
    });

    // ✅ refresh posts after delete
    fetchPosts();

  } catch (err) {
    console.error("Delete error:", err);
  }

  handleMenuClose();
};

const handleEdit = () => {
  setEditIndex(selectedIndex);
  handleMenuClose();
};

const handleRemoveHighlight = () => {
  const updated = [...posts];
  updated[selectedIndex].highlight = "no";
  setPosts(updated);
  handleMenuClose();
};


  // Navbar Menu
  const menuItems = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Hire", icon: <PersonAddAltIcon /> },
    { name: "Engage", icon: <FavoriteBorderIcon /> },
    { name: "Perform", icon: <TrackChangesIcon /> },
    { name: "Manage", icon: <AssignmentIcon /> },
    { name: "Reports", icon: <BarChartIcon /> },
    { name: "Platform", icon: <AppsIcon /> },
  ];
   

  // Quick Actions
  const quickActions = [
    { name: "Create a post", icon: <EditIcon />, path: "/create-post" },
    { name: "Refer", icon: <PersonAddIcon />, path: "/refer" },
    { name: "Recognize", icon: <EmojiEventsIcon />, path: "/recognize" },
    { name: "Manage", icon: <EventNoteIcon />, path: "/manage-candidates" },
    { name: "Apply leave", icon: <AssignmentTurnedInIcon />, path: "/apply-leave" },
    { name: "Create a goal", icon: <TrackChangesIcon />, path: "/create-goal" },
  ];
const cellStyleLabel = {
  p: 1.5,
  fontWeight: 600,
  backgroundColor: "#f5f7fa",
  borderBottom: "1px solid #e0e0e0",
};

const cellStyleValue = {
  p: 1.5,
  borderBottom: "1px solid #e0e0e0",
};
  return ( 
    
    <Box
  sx={{
    minHeight: "100vh",
    // backgroundImage: "url('https://cdn.prod.website-files.com/62d84b3d3ba446604d041a16/65f0350b1f445b7cd6288c2b_Learning%20and%20development.webp')",
    // backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* NAVBAR */}
      <AppBar position="static" sx={{ backgroundColor: "#2f3e56" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Typography variant="h6">HireNexus</Typography>

            {menuItems.map((item) => (
              <Box
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                  color: activeMenu === item.name ? "#fff" : "#cfd8dc",
                }}
              >
                {item.icon}
                <Typography sx={{ fontSize: "12px" }}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box>
            {/* ✅ REAL CALENDAR (NO dd-mm-yyyy) */}
          <div className="calendar-wrapper">
            <div className="calendar-btn" onClick={() => setShowCalendar(!showCalendar)}>
              📅 {date.format("ddd MMM DD YYYY")}
            </div>

            {showCalendar && (
              <div className="calendar-popup">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                  />
                </LocalizationProvider>
              </div>
            )}
          </div>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton sx={{ color: "#fff" }}><SearchIcon /></IconButton>
            <IconButton sx={{ color: "#fff" }}><NotificationsIcon /></IconButton>
           
            <Avatar title={user?.firstName || user?.role}>
  {user?.firstName
    ? user.firstName.charAt(0).toUpperCase()
    : user?.role
    ? user.role.substring(0, 2).toUpperCase()
    : "U"}
</Avatar>
            
          </Box>
        </Toolbar>
      </AppBar>

      {/* DASHBOARD */}
      <Box sx={{ width: "100%", px: 3, py: 3 }}>

  {/* 🔥 ADD CHART HERE */}
  <Box sx={{ mb: 4 }}>
    <Card sx={{ borderRadius: "16px", p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Hiring Analytics
      </Typography>
        
       <BarsDataset key={JSON.stringify(stats)} stats={stats} />
       
    </Card>
  </Box>

        <Grid container spacing={3}>

          {/* LEFT - CHARTS */}
          

          {/* RIGHT - QUICK ACTIONS */}
          <Grid item xs={12}>
            <Card sx={{ borderRadius: "16px", p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Quick Actions
              </Typography>

              <Grid container spacing={2}>
                {quickActions.map((action) => (
                  <Grid item xs={6} key={action.name}>
                    <Box
                      onClick={() => {
                        setActiveMenu(action.name);
                        navigate(action.path);
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 2,
                        borderRadius: "12px",
                        cursor: "pointer",
                        backgroundColor:
                          activeMenu === action.name ? "#d0e7f9" : "#e9edf1",
                        "&:hover": {
                          backgroundColor: "#d0e7f9",
                        },
                      }}
                    >
                      {action.icon}
                      <Typography sx={{ fontWeight: 500 }}>
                        {action.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

        </Grid>

        {posts.length > 0 && (
  <Box sx={{ mt: 4 }}>
    <Card sx={{ borderRadius: "16px", p: 2 }}>
      <Typography variant="h6">Highlights</Typography>

      {posts.map((post, index) => (
        <Box key={index} sx={{ mt: 2 }}>

          {/* TOP RIGHT MENU */}
       <Card
  elevation={1}
  sx={{
    mt: 2,
    p: 2,
    borderRadius: 3,
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      transform: "translateY(-5px)",
    },
  }}
>

  {/* TOP RIGHT MENU (NO CHANGE) */}
  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
    <IconButton onClick={(e) => handleMenuOpen(e, index)}>
      <MoreVertIcon />
    </IconButton>
  </Box>

  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl) && selectedIndex === index}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleEdit}>Edit</MenuItem>
    <MenuItem onClick={handleDelete}>Delete</MenuItem>
    <MenuItem onClick={handleRemoveHighlight}>
      Remove from highlights
    </MenuItem>
  </Menu>

  {editIndex === index ? (
    <>
      <TextField fullWidth sx={{ mb: 2 }} value={post.title} />
      <TextField fullWidth multiline sx={{ mb: 2 }} value={post.description} />
      <Button variant="contained" onClick={() => setEditIndex(null)}>
        Save
      </Button>
    </>
  ) : (

    <Grid container spacing={3} alignItems="center">

      {/* LEFT SIDE IMAGE */}
      <Grid item xs={12} md={4}>
        {/* LEFT IMAGE */}
                            <Box sx={{ flex: 1 }}>
                              {post.image && (
                                <Box
                                  component="img"
                                  src={post.image}
                                  alt="job"
                                  onClick={() => {
                                    setSelectedImage(post.image);
                                    setOpenImage(true);
                                  }}
                                  sx={{
                                    width: "100%",
                                    height: "220px",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    cursor: "pointer",      // ✅ shows clickable
                                    transition: "0.3s",
                                    "&:hover": {
                                      transform: "scale(1.09)"
                                    }
                                  }}
                                />
                              )}
        
                            </Box>
      </Grid>

      {/* RIGHT SIDE TABLE */}
      <Grid item xs={12} md={8}>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {post.title}
        </Typography>

        <Typography sx={{ mb: 2, color: "gray" }}>
          {post.description}
        </Typography>

        {/* TABLE START */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Grid container>

            {/* ROW 1 */}
            <Grid item xs={6} sx={cellStyleLabel}>Job Type</Grid>
            <Grid item xs={6} sx={cellStyleValue}>{post.jobType}</Grid>

            {/* ROW 2 */}
            <Grid item xs={6} sx={cellStyleLabel}>Location</Grid>
            <Grid item xs={6} sx={cellStyleValue}>{post.location}</Grid>

            {/* ROW 3 */}
            <Grid item xs={6} sx={cellStyleLabel}>Salary</Grid>
            <Grid item xs={6} sx={cellStyleValue}>{post.salary}</Grid>

            {/* ROW 4 */}
            <Grid item xs={6} sx={cellStyleLabel}>Experience</Grid>
            <Grid item xs={6} sx={cellStyleValue}>{post.experience}</Grid>

            {/* ROW 5 */}
            <Grid item xs={6} sx={cellStyleLabel}>Education</Grid>
            <Grid item xs={6} sx={cellStyleValue}>{post.education}</Grid>

            {/* ROW 6 FULL WIDTH */}
            <Grid item xs={12} sx={cellStyleLabel}>Requirements</Grid>
            <Grid item xs={12} sx={cellStyleValue}>{post.requirement}</Grid>

          </Grid>
        </Box>
         {/* image preview */}
                      <Dialog
                        open={openImage}
                        onClose={() => setOpenImage(false)}
                        maxWidth="md"
                      >
                        <Box sx={{ p: 2 }}>
                          <Box
                            component="img"
                            src={selectedImage}
                            alt="preview"
                            sx={{
                              width: "100%",
                              maxHeight: "80vh",
                              objectFit: "contain",
                              borderRadius: "10px"
                            }}
                          />
                        </Box>
                      </Dialog>
        

      </Grid>
      

    </Grid>
  )}
</Card>
        </Box>
      ))}

    </Card>
  </Box>
)}
      </Box>
    </Box>
  );
}

export default UserDashboard;