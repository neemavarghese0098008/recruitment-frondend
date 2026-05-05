import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Paper,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [requirement, setRequirement] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("yes");
  const [highlight, setHighlight] = useState("no");

  const handleImageUpload = async (e) => {
  const file = e.target.files[0];

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setImage(data.imageUrl); // ✅ store URL only
  } catch (err) {
    console.error(err);
  }
};

  const handlePost = async () => {
  const postData = {
    title,
    description,
    requirement,
    jobType,
    location,
    salary,
    experience,
    education,
    image, // ✅ URL (small size)
    date: new Date().toISOString(),
  };

  await fetch("http://localhost:3000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  navigate("/dashboard");
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f6f8",
        p: 5,
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Announcements
      </Typography>

      <Paper sx={{ p: 4, borderRadius: "20px" }}>
        {/* TITLE */}
        <TextField
          fullWidth
          label="Announcement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        {/* DESCRIPTION */}
        <Box sx={{ mt: 4 }}>
          <Typography>Description</Typography>

          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Write your post here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* REQUIRMENT */}
          <Box sx={{ mt: 4 }}>
            <Typography>Requirements</Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
            />
          </Box>
          {/* jib type */}
          <Box sx={{ mt: 3 }}>
            <TextField label="Job Type" fullWidth value={jobType} onChange={(e) => setJobType(e.target.value)} />
          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField label="Location" fullWidth value={location} onChange={(e) => setLocation(e.target.value)} />
          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField label="Salary" fullWidth value={salary} onChange={(e) => setSalary(e.target.value)} />
          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField label="Experience" fullWidth value={experience} onChange={(e) => setExperience(e.target.value)} />
          </Box>

          <Box sx={{ mt: 3 }}>
            <TextField label="Education" fullWidth value={education} onChange={(e) => setEducation(e.target.value)} />
          </Box>
        </Box>
        {/* Add IMAGE UPLOAD */}
        <Box sx={{ mt: 3 }}>
          <Typography>Add Image</Typography>

          <Button variant="outlined" component="label">
            Upload Image
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>

          {image && (
            <Box sx={{ mt: 2 }}>
              <img src={image} alt="preview" width="200" />
            </Box>
          )}
        </Box>

        {/* BUTTONS */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={() => navigate("/dashboard")}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handlePost}>
            Post
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default CreatePost;
