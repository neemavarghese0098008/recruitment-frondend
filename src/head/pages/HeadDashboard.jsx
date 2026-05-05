import React from "react";
import { Box, Typography, Grid, Card, Button, AppBar, CardMedia, CardContent, Toolbar, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  DialogActions
} from "@mui/material";
import { Chip } from "@mui/material";




function HeadDashboard() {

  const [resume, setResume] = useState(null);
const [resumeURL, setResumeURL] = useState("");
const [open, setOpen] = useState(false);
const [skills, setSkills] = useState([]);
const [submitted, setSubmitted] = useState(false);
const [suggestedSkills, setSuggestedSkills] = useState([]);
const [skillInput, setSkillInput] = useState("");
 const navigate = useNavigate();
const fieldStyle = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  }
};
const handleResumeUpload = (file) => {
  setResume(file);

  // create preview link
  const url = URL.createObjectURL(file);
  setResumeURL(url);

  // 🔥 MOCK AI SKILL SUGGESTION
  const fakeSkills = ["React", "JavaScript", "Node.js", "SQL"];
  setSuggestedSkills(fakeSkills);
  setSkills(fakeSkills);
};

  return (

    <Box sx={{ minHeight: "100vh", width: "100%" }}>

      {/* NAVBAR */}
      <AppBar position="static" sx={{ backgroundColor: "#EFF6FF", color: "#1F2937", borderBottom: "1px solid #DBEAFE", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* LOGO */}
          <h1 className="logo-text" style={{ color: "#2563EB" }}>
            HireNexus
          </h1>


          {/* MENU */}
          <Box sx={{ display: "flex", gap: 4, color: "#1E3A8A" }}>
            <Typography>Industry</Typography>
            <Typography>Hardware</Typography>
            <Typography>Software</Typography>
            <Typography>Services</Typography>
            <Typography>Support</Typography>
            <Typography>Partners</Typography>
          </Box>

          {/* SEARCH */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, backgroundColor: "#E0ECFF", px: 2, py: 1, borderRadius: "20px" }}>
            <SearchIcon />
            <input
              placeholder="Search"
              style={{
                border: "none",
                outline: "none",
                background: "transparent"
              }}
            />
          </Box>

        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          width: "100%",
          backgroundColor: "rgba(30, 58, 138, 0.75)",
          backgroundImage:
            "url('https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web006/brand-photography-lifestyle-professionals-meeting-conference-center-16x9-3600x2025.jpg.imgw.1920.1920.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >

        {/* DARK OVERLAY CARD */}
        <Box
          sx={{
            position: "relative",
            height: "90vh",
            width: "100%",
            backgroundImage:
              "url('https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web006/brand-photography-lifestyle-professionals-meeting-conference-center-16x9-3600x2025.jpg.imgw.1920.1920.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >


          {/* 🔥 YOUR CONTENT (PASTE YOUR BOX HERE) */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              ml: 10,
              display: "flex",
              alignItems: "center",
              height: "100%"
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0,0,0,0.6)",
                p: 5,
                borderRadius: "12px",
                maxWidth: "600px",
                color: "#fff",
              }}
            >

              <Typography variant="h5" sx={{ letterSpacing: 5, mb: 1 }}>
                CAREERS
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Define Your Career at HireNexus.
              </Typography>

              <Box sx={{ width: "60px", height: "3px", backgroundColor: "#fff", mb: 2 }} />

              <Typography sx={{ mb: 3 }}>
                HireNexus’s waiting for you!
              </Typography>

              {/* ✅ BUTTON WITH NAVIGATION */}
              <Button
                variant="contained"
                onClick={() => {
                  console.log("clicked");
                  navigate("/view-jobs");
                }}
                sx={{
                  backgroundColor: "#2563EB",
                  color: "#fff",
                  borderRadius: "25px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#1E3A8A"
                  }
                }}
              >
                View Current Openings →
              </Button>

            </Box>
          </Box>

        </Box>
      </Box>
      {/* text session */}
      <Box
        sx={{
          backgroundColor: "#EFF6FF",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 12 },
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            color: "#1E3A8A"
          }}
        >
          Ready to Unleash Your Potential?
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            maxWidth: "1000px",
            mx: "auto",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: 1.7,
            mb: 6,
          }}
        >
          At HireNexus, we are a community of innovators who come together to create new ways of working to make everyday life better. United by curiosity and care, we develop dynamic solutions that anticipate our customer’s and partner’s needs and solve their challenges.
        </Typography>

        {/* SUB TITLE */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#1E3A8A"
          }}
        >
          HireNexus is Looking for You
        </Typography>

        {/* PARAGRAPH */}
        <Typography
          sx={{
            fontSize: "17px",
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          We're excited to welcome excellent talent of all stripes to our team. Come and explore what your path towards becoming a HireNexus looks like. Search our open positions and apply for a role that fits and allows you to pursue your passions.
        </Typography>

        <Typography sx={{ mb: 3, fontSize: "17px", color: "#4B5563", }}>
          Join HireNexus and change the world with us.
        </Typography>

        {/* WARNING TEXT */}
        <Typography
          sx={{
            fontStyle: "italic",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#444",
            mb: 5,
          }}
        >
          To protect candidates from falling victim to online fraudulent activity involving fake job postings and employment offers, please be aware our recruiters will always connect with you via @HireNexus.com email accounts. Applications are only accepted through our applicant tracking system and only accept personal identifying information through that system. Our Talent Acquisition team will not ask for you to provide personal identifying information via e-mail or outside of the system. If you are a victim of identity theft, contact your local police department.
        </Typography>

       {/* BUTTON SECTION */}
<Box
  sx={{
    display: "flex",
    gap: 3,
    flexWrap: "wrap",
  }}
>
  {/* VIEW JOBS */}
  <Button
    variant="contained"
    onClick={() => navigate("/view-jobs")}
    sx={{
      backgroundColor: "#2563EB",
      color: "#fff",
      borderRadius: "25px",
      px: 4,
      py: 1.5,
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#1E3A8A"
      }
    }}
  >
    View Current Openings →
  </Button>

  {/* INTRODUCE BUTTON */}
  <Button
    variant="contained"
    onClick={() => setOpen(true)}
    sx={{
      backgroundColor: "#2563EB",
      color: "#fff",
      borderRadius: "30px",
      px: 4,
      py: 1.5,
      fontWeight: 600,
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#1E3A8A",
      },
    }}
  >
    INTRODUCE YOURSELF →
  </Button>
</Box>

{/* ✅ DIALOG (keep outside button box but inside return) */}


<Dialog
  open={open}
  onClose={() => {
    setOpen(false);
    setSubmitted(false);
  }}
  maxWidth="sm"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: "12px",
      p: 2,
      outline: "none"   // ✅ FIX 1
    }
  }}
>

  {!submitted ? (
    <>
      <DialogTitle sx={{ fontSize: "26px", fontWeight: 500 }}>
        Introduce Yourself
      </DialogTitle>

      <DialogContent
  sx={{
    overflowY: "auto",
    overflowX: "hidden",   // ✅ FIX 2 (IMPORTANT)
    pr: 1                  // avoids clipping
  }}
>
        <Typography sx={{ color: "#444" }}>
          Don't see the dream job you are looking for? Drop your details and resume — we’ll reach out if there's a match.
        </Typography>

       <TextField
  label="Country"
  select
  variant="outlined"
  fullWidth
  sx={fieldStyle}
>
  <MenuItem value="USA">United States of America</MenuItem>
  <MenuItem value="India">India</MenuItem>
</TextField>

<TextField label="First Name *" variant="outlined" fullWidth sx={fieldStyle} />
<TextField label="Last Name *" variant="outlined" fullWidth sx={fieldStyle} />
<TextField label="Email *" variant="outlined" fullWidth sx={fieldStyle} />





        {/* ================= RESUME ================= */}
        <Box sx={{ width: "100%" }}>
  <Typography sx={{ fontWeight: 600 }}>
    Resume/CV
  </Typography>

  <Typography sx={{ fontSize: "14px", mb: 2 }}>
    Upload DOC, DOCX, PDF or TXT (5MB max)
  </Typography>

  <Box
    component="label"
    sx={{
      width: "100%",                // ✅ important
      border: "2px dashed #D1D5DB",
      borderRadius: "10px",
      px: 3,                        // ✅ use px instead of ml
      py: 4,
      textAlign: "center",
      cursor: "pointer",
      display: "block",             // ✅ prevent layout break
      backgroundColor: "#fff",      // ✅ avoids bleed
      transition: "all 0.2s ease",
      "&:hover": {
        borderColor: "#2563EB",
        backgroundColor: "#EFF6FF"
      }
    }}
  >
    <Typography sx={{ color: "#374151" }}>
      Drop file here
    </Typography>

    <Typography sx={{ color: "#2563EB", mt: 1, fontWeight: 500 }}>
      or Select file
    </Typography>

    <input
      type="file"
      hidden
      accept=".pdf,.doc,.docx,.txt"
      onChange={(e) => handleResumeUpload(e.target.files[0])}
    />
  </Box>

  {/* FILE PREVIEW */}
  {resume && (
    <Typography
      onClick={() => window.open(resumeURL)}
      sx={{
        mt: 2,
        color: "#2563EB",
        cursor: "pointer",
        textDecoration: "underline",
        fontWeight: 500
      }}
    >
      {resume.name}
    </Typography>
  )}
</Box>

        {/* ================= SKILLS ================= */}
        <Box>
          <Typography sx={{ fontWeight: 600 }}>
            Skills
          </Typography>

          <Typography sx={{ fontSize: "13px", mb: 1 }}>
            Suggested skills based on your resume.
          </Typography>

          {/* INPUT */}
          <TextField
            fullWidth
            placeholder="Type and press Enter"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && skillInput.trim()) {
                setSkills([...skills, skillInput]);
                setSkillInput("");
              }
            }}
          />

          {/* CHIPS */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
            {skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                onDelete={() =>
                  setSkills(skills.filter((_, i) => i !== index))
                }
                sx={{
                  backgroundColor: "#DBEAFE"
                }}
              />
            ))}
          </Box>
        </Box>

      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
        <Button
  onClick={() => {
    setOpen(false);
    setSubmitted(false);
  }}
  sx={{ color: "#2563EB" }}
>
  CANCEL
</Button>

        <Button
          variant="contained"
          onClick={() => {
            if (!resume) {
              alert("Please upload resume");
              return;
            }
            setSubmitted(true);
          }}
          sx={{
            backgroundColor: "#2563EB",
            borderRadius: "20px",
            px: 4,
            "&:hover": {
              backgroundColor: "#1E3A8A"
            }
          }}
        >
          SUBMIT
        </Button>
      </DialogActions>
    </>
  ) : (

    /* ================= SUCCESS ================= */

    <Box sx={{ p: 4 }}>
      <Typography sx={{ mb: 3, color: "#444" }}>
        Thank you for submitting your profile! Please use the search for jobs button below to see our current posting.
        If you are interested in hearing about new job posting relevant to you use the sign-in button at the top of the page to create an account and set up a custom job alert.
      </Typography>

      <Typography sx={{ mb: 4, color: "#555" }}>
        You can also sign in later to receive job alerts.
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          navigate("/view-jobs");
          setOpen(false);
          setSubmitted(false);
        }}
        sx={{
          backgroundColor: "#84cc16",
          color: "#000",
          borderRadius: "30px",
          px: 4,
          py: 1.5,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#65a30d"
          }
        }}
      >
        Search for Jobs
      </Button>
    </Box>
  )}
</Dialog>
      </Box>
      
      

      {/* SECTION */}
      <Box
        sx={{
          backgroundColor: "#EFF6FF",
          px: { xs: 3, md: 12 },
          py: { xs: 6, md: 10 },
        }}
      >

        {/* TITLE */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "#1E3A8A"

          }}
        >
          Learn More About HireNexus
        </Typography>

        {/* CARDS */}
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            px: { xs: 3, md: 12 },
            py: { xs: 6, md: 10 },
          }}
        >


          <Grid
            container
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)"
              },
              gap: 5   // 🔥 slightly more spacing
            }}
          >

            {/* CARD 1 */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web006/brand-photography-lifestyle-colleagues-applauding-colleague-office-4x3-3600x2700.jpg.imgw.1920.1920.jpg"
                sx={{
                  width: "100%",
                  height: "260px",   // 🔥 increased from 220 → 260
                  objectFit: "cover",
                  borderRadius: "20px",
                  mb: 2
                }}
              />

              <Typography sx={{ fontWeight: 700, fontSize: "20px", mb: 1, color: "#1F2937" }}>
                Corporate Social Responsibility
              </Typography>

              <Typography sx={{ color: "#444", mb: 2, lineHeight: 1.7 }}>
                At HireNexus, we believe it is our duty to give back. In addition to our corporate CSR focus, we empower all employees to make a difference towards causes they care about.
              </Typography>

              <Typography sx={{ color: "#1976d2", cursor: "pointer", display: "flex", alignItems: "center" }}>
                Read more <ArrowForwardIcon sx={{ fontSize: "16px", ml: 1 }} />
              </Typography>
            </Grid>

            {/* CARD 2 */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/stock-photography/stock-image-photography-website-partners-4x3-36002.jpg.imgw.1920.1920.jpg"
                sx={{
                  width: "100%",
                  height: "260px",   // 🔥 increased from 220 → 260
                  objectFit: "cover",
                  borderRadius: "20px",
                  mb: 2
                }}
              />

              <Typography sx={{ fontWeight: 700, fontSize: "20px", mb: 1 }}>
                Culture of Inclusion
              </Typography>

              <Typography sx={{ color: "#444", mb: 2, lineHeight: 1.7 }}>
                At HireNexus, we believe all employees should feel seen, heard, valued and respected. We are committed to fostering a culture where all employees feel they belong.
              </Typography>

              <Typography sx={{ color: "#1976d2", cursor: "pointer", display: "flex", alignItems: "center" }}>
                Read more <ArrowForwardIcon sx={{ fontSize: "16px", ml: 1 }} />
              </Typography>
            </Grid>

            {/* CARD 3 */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/stock-photography/stock-image-photography-website-partners-4x3-3600.jpg.imgw.1920.1920.jpg"
                sx={{
                  width: "100%",
                  height: "260px",   // 🔥 increased from 220 → 260
                  objectFit: "cover",
                  borderRadius: "20px",
                  mb: 2
                }}
              />

              <Typography sx={{ fontWeight: 700, fontSize: "20px", mb: 1 }}>
                HireNexus Benefits
              </Typography>

              <Typography sx={{ color: "#444", mb: 2, lineHeight: 1.7 }}>
                We offer a rich variety of benefits and wellbeing support that our employees can leverage to best meet their unique needs.
              </Typography>

              <Typography sx={{ color: "#1976d2", cursor: "pointer", display: "flex", alignItems: "center" }}>
                Read more <ArrowForwardIcon sx={{ fontSize: "16px", ml: 1 }} />
              </Typography>
            </Grid>

          </Grid>
        </Box>
      </Box>

      {/* about ceo */}
      <Box
        sx={{
          backgroundColor: "#1E3A8A", // 🔵 dark blue instead of black
          color: "#fff",
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 8 },
          display: "flex",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src="https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web002/Bill-Burns-Headshot-photography-website-4x3-3600.jpg.imgw.1200.1200.jpg"
          sx={{
            width: { xs: "180px", md: "220px" },
            height: { xs: "180px", md: "220px" },
            borderRadius: "20px",
            objectFit: "cover",
          }}
        />

        {/* TEXT */}
        <Box sx={{ maxWidth: "900px" }}>

          {/* QUOTE */}
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              lineHeight: 1.6,
              mb: 3,
              color: "#E0ECFF", // 🔵 soft light blue text
            }}
          >
            “ Our people are the heart of HireNexus, and we need to continue attracting and retaining the very best and brightest talent across our business while further developing the talent that we have to advance HireNexus as a great place to work. ”
          </Typography>

          {/* AUTHOR */}
          <Typography
            sx={{
              fontSize: "14px",
              color: "#93C5FD", // 🔵 light blue accent
              letterSpacing: "1px",
              fontWeight: 600,
            }}
          >
            - BILL BURNS, HIRENEXUS CEO
          </Typography>
        </Box>
      </Box>

      {/* employee review */}
      <Box
        sx={{
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 10 },
          backgroundColor: "#EFF6FF", // your blue theme light
        }}
      >

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)", // ✅ 3 equal columns
            },
            gap: 6,
          }}
        >

          {/* CARD 1 */}
          <Box>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?semt=ais_hybrid&w=740&q=80"
              sx={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "20px",
                mb: 3,
              }}
            />

            <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 2, color: "#1E3A8A" }}>
              Daisy James, Corporate Strategy Senior Advisor
            </Typography>

            <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
              “Being a HireNexus employee means being aware. It’s not just awareness in how you show up to work every day, it’s also being aware of others around you. It’s about doing your best every day, right where you are, and helping others who may need it to do the same.”
            </Typography>
            <Typography sx={{ mt: 2, color: "#6B7280" }}>
              Mumbai, India
            </Typography>
          </Box>

          {/* CARD 2 */}
          <Box>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?semt=ais_hybrid&w=740&q=80"
              sx={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "20px",
                mb: 3,
              }}
            />

            <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 2, color: "#1E3A8A" }}>
              Avinash Nijampure, Engineering Fellow
            </Typography>

            <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
              “There is a profound sense of belonging amongst the people and everyone owns the products that they work on. This has helped create a healthy culture which keeps people motivated and dedicated towards their work.”
            </Typography>

            <Typography sx={{ mt: 2, color: "#6B7280" }}>
              Bangalore, India
            </Typography>
          </Box>

          {/* CARD 3 */}
          <Box>
            <Box
              component="img"
              src="https://t3.ftcdn.net/jpg/05/49/28/04/360_F_549280433_IKFmQGPsC60t9KPrcIMhPaXlcGhb6j2r.jpg"
              sx={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "20px",
                mb: 3,
              }}
            />

            <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 2, color: "#1E3A8A" }}>
              Gintare Montautaite, Project Manager EMEA/APAC
            </Typography>

            <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
              “The culture of HireNexus is not to settle for mediocrity but strive for excellence. I am very grateful to be a part of an amazing team that I get to work with every day as well as a broader HireNexus Nation that I have a chance to collaborate with on a continuous basis.”
            </Typography>
            <Typography sx={{ mt: 2, color: "#6B7280" }}>
              Hydrabad, India
            </Typography>
          </Box>

        </Box>
      </Box>
      




    </Box>
  );
}

export default HeadDashboard;