import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Card,
  Button,
  Avatar,Menu, 
  MenuItem
} from "@mui/material";

import { Dialog } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";

function HeadDashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const tagStyle = {
    background: "#f3f4f6",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    color: "#374151",
  };
  const [openImage, setOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [search, setSearch] = useState("");
  const selectStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  };
  const navigate = useNavigate();

  const [showResult, setShowResult] = useState(false);
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: 2,
    px: 2,
    py: 1.2,
    borderRadius: "10px",
    cursor: "pointer",
    color: "#1f2937",
    fontWeight: 500,
    transition: "0.2s",
    "&:hover": {
      backgroundColor: "#e0f2fe",
      color: "#2563EB"
    }
  };


  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then(res => res.json())
      .then(data => {
        console.log("Posts from backend:", data);
        setPosts(data);
      })
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  const handleAvatarClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const handleLogout = () => {
  const confirmLogout = window.confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    // YES clicked
    localStorage.clear();   // optional
    navigate("/");          // go to home
  } else {
    // NO clicked → do nothing
  }
};

  const filteredPosts = posts.filter((post) => {
    const selectStyle = {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      fontSize: "14px",
    };
    return (
      post.title?.toLowerCase().includes(search.toLowerCase()) &&

      (jobTypeFilter
        ? post.jobType?.toLowerCase() === jobTypeFilter.toLowerCase()
        : true) &&

      (locationFilter
        ? post.location?.toLowerCase() === locationFilter.toLowerCase()
        : true) &&

      (experienceFilter
        ? post.experience?.toLowerCase() === experienceFilter.toLowerCase()
        : true)
    );
  });

  return (
    <Box>

      <Box sx={{ display: "flex" }}>

        <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Authentication</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography>Go to docs</Typography>
              <Avatar onClick={handleAvatarClick} sx={{ cursor: "pointer" }}>
  N
</Avatar>
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleLogout}>Logout</MenuItem>
</Menu>
            </Box>

          </Toolbar>
        </AppBar>

        {/* Drawer for sidebar */}
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: 260,
              p: 2,
              backgroundColor: "#f9fafb"
            }
          }}
        >
          {/* HEADER */}
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: "#1e293b"
            }}
          >
            HireNexus
          </Typography>

          {/* ===== MAIN SECTION ===== */}
          <Typography
            sx={{
              fontSize: "12px",
              color: "#6b7280",
              mb: 1,
              textTransform: "uppercase"
            }}
          >
            Main
          </Typography>

          {/* MENU ITEM */}
          <Box
            sx={menuItemStyle}
            onClick={() => navigate("/my-application")}

          >
            <HomeIcon sx={{ fontSize: 20 }} />
            <Typography>My Application</Typography>
          </Box>

          <Box
            sx={menuItemStyle}
            onClick={() => navigate("/aptitude-result")}
          >
            <PeopleIcon sx={{ fontSize: 20 }} />
            <Typography>Aptitude Result</Typography>
          </Box>

          {/* DIVIDER SPACE */}
          <Box sx={{ height: "1px", background: "#e5e7eb", my: 2 }} />

          {/* ===== OTHER SECTION ===== */}
          <Typography
            sx={{
              fontSize: "12px",
              color: "#6b7280",
              mb: 1,
              textTransform: "uppercase"
            }}
          >
            Services
          </Typography>

          <Box sx={menuItemStyle}>
            <Typography>Database</Typography>
          </Box>

          <Box sx={menuItemStyle}>
            <Typography>Storage</Typography>
          </Box>

          <Box sx={menuItemStyle}>
            <Typography>Hosting</Typography>
          </Box>

          <Box sx={menuItemStyle}>
            <Typography>Functions</Typography>
          </Box>
        </Drawer>
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
          }}
        >

          {/* ===== HERO BANNER ===== */}
          <Box
            sx={{
              width: "100%",
              height: "320px",
              borderRadius: "12px",
              overflow: "hidden",
              mb: 3,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="https://zebra.wd501.myworkdayjobs.com/Zebra_careers/assets/banner"
              alt="banner"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Overlay text */}
            <Box
              sx={{
                position: "absolute",
                right: "40px",
                bottom: "40px",
                color: "#fff",
                textAlign: "right",
              }}
            >
            </Box>
          </Box>

          {/* ===== SEARCH BAR ===== */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#f3f4f6",
                px: 2,
                py: 1.5,
                borderRadius: "12px",
                flex: 1,
                maxWidth: "600px",
              }}
            >
              <SearchIcon sx={{ mr: 1, color: "#6b7280" }} />
              <InputBase
                placeholder="Search for jobs or keywords"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ fontSize: "14px" }}
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#84cc16",
                color: "#000",
                borderRadius: "30px",
                px: 4,
                py: 1.2,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#65a30d",
                },
              }}
            >
              Search
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>

            {/* ===== LEFT SIDEBAR ===== */}
            <Box
              sx={{
                width: "260px",
                background: "#fff",
                p: 2,
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                height: "fit-content",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2 }}>
                Filters
              </Typography>

              {/* Job Type */}
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Job Type
              </Typography>
              <select
                style={selectStyle}
                onChange={(e) => setJobTypeFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
              </select>

              {/* Location */}
              <Typography sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
                Location
              </Typography>
              <select
                style={selectStyle}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="kakkanad, kochi">Kochi</option>
                <option value="bangalore">Bangalore</option>
              </select>

              {/* Experience */}
              <Typography sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
                Experience
              </Typography>
              <select
                style={selectStyle}
                onChange={(e) => setExperienceFilter(e.target.value)}
              >
                <option value="">All</option>
                <option value="0-1">0-1</option>
                <option value="1-2">1-2</option>
                <option value="2-5">2-5</option>
              </select>
            </Box>

            {/* ===== RIGHT SIDE JOBS ===== */}
            <Box sx={{ flex: 1 }}>

              {filteredPosts.length === 0 && (
                <Typography>No jobs found</Typography>
              )}

              {filteredPosts.map((post, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 4,
                    borderRadius: "16px",
                    p: 3,
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    "&:hover": {
                      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 4,
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >

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


                    {/* RIGHT CONTENT */}
                    <Box sx={{ flex: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {post.title}
                      </Typography>

                      <Typography sx={{ color: "#6b7280", mb: 2 }}>
                        {post.location} • {post.jobType}
                      </Typography>

                      <Typography sx={{ mb: 2 }}>
                        {post.description}
                      </Typography>

                      <Typography sx={{ mb: 2 }}>
                        <b>Requirements:</b> {post.requirement}
                      </Typography>

                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                        <Box sx={tagStyle}>💼 {post.experience}</Box>
                        <Box sx={tagStyle}>🎓 {post.education}</Box>
                        <Box sx={tagStyle}>💰 ₹{post.salary}</Box>
                      </Box>

                      <Button
                        variant="contained"
                        onClick={() => {
                          navigate("/apply-now", {
                            state: {
                              jobTitle: post.title,
                              company: post.company || "",
                              location: post.location || "",
                              status: "New",
                              appliedDate: new Date().toLocaleDateString()
                            }
                          });
                        }}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </Box>
                </Card>
              ))}
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
            </Box>

          </Box>

        </Box>
      </Box>

    </Box>
  );
}

export default HeadDashboard;