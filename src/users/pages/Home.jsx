import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Header from "../components/Header";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../components/Footer";


const Home = () => {
  const navigate = useNavigate();
  
  
const features = [
  { title: "Recruitment Funnel", icon: <FilterAltOutlinedIcon />, path: "/funnel" },
  { title: "Automated onboarding", icon: <GroupAddOutlinedIcon />, path: "/onboarding" },
  { title: "Collaborative Hiring", icon: <ChatBubbleOutlineOutlinedIcon />, path: "/hiring" },
  { title: "Hire AI & Analytics", icon: <BarChartOutlinedIcon />, path: "/analytics" },
  { title: "Mobile ATS", icon: <PhoneIphoneOutlinedIcon />, path: "/mobile" },
];

  return (
    <>
      <Header />

      {/* MAIN SECTION */}
      <Box
        sx={{
          backgroundColor: "#eef2f5",
          py: 10,
        }}
      >
        {/* CENTER CONTAINER */}
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >

          {/* LEFT SIDE */}
          <Box sx={{ flex: 1 }}>

            <Typography sx={{ color: "#6b7280", mb: 2 }}>
              Hire
            </Typography>

            <Typography
              sx={{
                fontSize: "56px",
                fontWeight: 600,
                color: "#4b5563",
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Recruitment Management System
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "18px",
                lineHeight: 1.7,
                mb: 4,
                maxWidth: "520px",
              }}
            >
              Optimize your talent pool and find the right fit while creating a
              great candidate experience with HireNexus Applicant Tracking System
            </Typography>

            {/* BUTTONS */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              
              <Button
                sx={{
                  backgroundColor: "#2d3e57",
                  color: "#fff",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#1f2f46",
                  },
                }}
              >
                Schedule a demo
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "16px",
                  borderColor: "#2d3e57",
                  color: "#2d3e57",
                }}
              >
                Signup for free
              </Button>

            </Box>

            {/* FEATURES */}
            <Box sx={{ display: "flex", gap: 4 }}>
              
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckIcon sx={{ color: "#22c55e" }} />
                <Typography sx={{ color: "#4b5563" }}>
                  Free trial
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckIcon sx={{ color: "#22c55e" }} />
                <Typography sx={{ color: "#4b5563" }}>
                  No credit card required
                </Typography>
              </Box>

            </Box>

          </Box>

          {/* RIGHT SIDE IMAGE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="https://www.pockethrms.com/wp-content/uploads/2026/01/recruitment-management-system-768x636.webp"
              alt="Recruitment"
              sx={{
                width: "100%",
                maxWidth: "520px",
                objectFit: "contain",
              }}
            />
          </Box>

        </Box>
        <br />
        <br />
        <br />
        {/* ================= FEATURES SECTION ================= */}
<Box sx={{ backgroundColor: "#eef2f5", py: 8 }}>

  <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>


    {/* TOP CARDS */}
    <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 3,
    mb: 8,
  }}
>
  {features.map((item, index) => (
    <Box
      key={index}
      onClick={() => navigate(item.path)}
      sx={{
        width: "180px",
        height: "160px",
        background: "#fff",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        textAlign: "center",
        cursor: "pointer",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box sx={{ color: "#2ea3c4", fontSize: "40px", mb: 2 }}>
        {item.icon}
      </Box>

      <Typography sx={{ color: "#4b5563", fontSize: "14px" }}>
        {item.title}
      </Typography>
    </Box>
  ))}
</Box>

    {/* FUNNEL IMAGE */}
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="img"
        src="https://cdn.prod.website-files.com/62d84b3d3ba446604d041a16/6315b9a793b5737485b2c72a_62d84b3d3ba446c4d9041aca_Recruitment-Funnel-image-_peopleHum.webp"
        alt="Funnel"
        sx={{
          width: "100%",
          maxWidth: "1000px",
        }}
      />
    </Box>

  </Box>
</Box>
{/* ================= ADVANCED FEATURES SECTION ================= */}
<Box sx={{ backgroundColor: "#f8fafc", py: 10 }}>

  <Box sx={{ maxWidth: "1200px", mx: "auto" }}>

    {/* ===== ROW 1 ===== */}
    <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>

      {/* IMAGE */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://cdn.prod.website-files.com/62d84b3d3ba446604d041a16/6315b9855bc18bcd5064bcd4_62d84b3d3ba44683c2041ac7_Mobile-app-image-min-_peopleHum.webp"
          sx={{ width: "100%", maxWidth: "500px" }}
        />
      </Grid>

      {/* TEXT */}
      <Grid item xs={12} md={6}>
        <Typography sx={{ color: "#2ea3c4", mb: 2 }}>
          MOBILE APP
        </Typography>

        <Typography sx={{ fontSize: "42px", fontWeight: 600, mb: 2 }}>
          Recruit on the go
        </Typography>

        <Typography sx={{ color: "#6b7280", mb: 3 }}>
          Review resumes, provide instant interview feedback—all from your phone.
        </Typography>

        <Button variant="outlined" sx={{ borderRadius: "30px" }}>
          Schedule a demo
        </Button>
      </Grid>

    </Grid>

    {/* ===== ROW 2 ===== */}
    <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>

      {/* TEXT */}
      <Grid item xs={12} md={6}>
        <Typography sx={{ color: "#2ea3c4", mb: 2 }}>
          ONBOARDING
        </Typography>

        <Typography sx={{ fontSize: "42px", fontWeight: 600, mb: 2 }}>
          Set new hires up for success
        </Typography>

        <Typography sx={{ color: "#6b7280", mb: 3 }}>
          Automated onboarding workflows help you focus on employee experience.
        </Typography>

        <Button variant="contained" sx={{ borderRadius: "30px" }}>
          Schedule a demo
        </Button>
      </Grid>

      {/* IMAGE */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://cdn.prod.website-files.com/62d84b3d3ba446604d041a16/64f7099c9e370b58223a8e52_new-demo-form-image.webp"
          sx={{ width: "100%", maxWidth: "500px" }}
        />
      </Grid>

    </Grid>

    {/* ===== ROW 3 ===== */}
    <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>

      {/* IMAGE */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://cdn.prod.website-files.com/62d84b3d3ba446604d041a16/6315b983d96b2513d3bc843e_62d84b3d3ba446036f041ac8_Hire-AI-_-analytics-image-min-_peopleHum.webp"
          sx={{ width: "100%", maxWidth: "500px" }}
        />
      </Grid>

      {/* TEXT */}
      <Grid item xs={12} md={6}>
        <Typography sx={{ color: "#2ea3c4", mb: 2 }}>
          AI & ANALYTICS
        </Typography>

        <Typography sx={{ fontSize: "42px", fontWeight: 600, mb: 2 }}>
          Let data show you the way
        </Typography>

        <Typography sx={{ color: "#6b7280", mb: 3 }}>
          Gain insights into hiring performance with smart analytics.
        </Typography>

        <Button variant="outlined" sx={{ borderRadius: "30px" }}>
          Schedule a demo
        </Button>
      </Grid>

    </Grid>

    {/* ===== ROW 4 ===== */}
    <Grid container spacing={6} alignItems="center">

      {/* TEXT */}
      <Grid item xs={12} md={6}>
        <Typography sx={{ color: "#2ea3c4", mb: 2 }}>
          CAREER PLANNING
        </Typography>

        <Typography sx={{ fontSize: "42px", fontWeight: 600, mb: 2 }}>
          Build better career paths
        </Typography>

        <Typography sx={{ color: "#6b7280", mb: 3 }}>
          Plan and manage employee growth with structured career mapping.
        </Typography>

        <Button variant="contained" sx={{ borderRadius: "30px" }}>
          Schedule a demo
        </Button>
      </Grid>

      {/* IMAGE */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://cdn.prod.website-files.com/62d84b3d3ba446604d041a16/65f03506fb7ed96bbb41c0cb_Career%20planning.webp"
          sx={{ width: "100%", maxWidth: "500px" }}
        />
      </Grid>

    </Grid>

  </Box>
</Box>
{/* ================= TESTIMONIAL ================= */}
<Box sx={{ backgroundColor: "#f8fafc", py: 10 }}>

  <Box
    sx={{
      maxWidth: "1000px",
      mx: "auto",
      background: "#fff",
      p: 5,
      borderRadius: "25px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    }}
  >
    <Typography sx={{ color: "#6b7280", fontSize: "18px", mb: 4 }}>
      "We realized that it's very easy to get lost in the hiring process when you have multiple candidates, and you're conducting multiple interviews and need to make sure the feedback from all those interviews is recorded correctly and systematically. That's where HireNexus really helped us out."
    </Typography>

    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        component="img"
        src="https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/web002/Bill-Burns-Headshot-photography-website-4x3-3600.jpg.imgw.1200.1200.jpg"
        sx={{ width: 50, height: 50, borderRadius: "50%" }}
      />

      <Box>
        <Typography sx={{ fontWeight: 600 }}>
          BILL BURNS
        </Typography>
        <Typography sx={{ color: "#6b7280" }}>
          HIRENEXUS CEO
        </Typography>
      </Box>
    </Box>
  </Box>

</Box>
{/* ================= FAQ ================= */}
<Box sx={{ backgroundColor: "#f8fafc", py: 10 }}>

  <Box sx={{ maxWidth: "1000px", mx: "auto" }}>

    {/* Title */}
    <Typography
      align="center"
      sx={{
        fontSize: "42px",
        fontWeight: 600,
        mb: 6,
        color: "#374151",
      }}
    >
      Frequently Asked Questions
    </Typography>

    {/* FAQ ITEMS */}

    {/* Q1 */}
    <Accordion sx={{ mb: 2, borderRadius: "10px !important" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>What is a Recruiting Management System?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "#6b7280" }}>
          A Recruiting Management System (RMS) helps automate hiring processes—from job posting to onboarding—ensuring better candidate experience and streamlined workflows.
        </Typography>
      </AccordionDetails>
    </Accordion>

    {/* Q2 */}
    <Accordion sx={{ mb: 2, borderRadius: "10px !important" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>How do I choose a Recruitment Management System?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "#6b7280" }}>
          Look for features like automation, analytics, ease of use, scalability, and integration with your existing tools.
        </Typography>
      </AccordionDetails>
    </Accordion>

    {/* Q3 */}
    <Accordion sx={{ mb: 2, borderRadius: "10px !important" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Can I hire using the HireNexus Mobile app?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "#6b7280" }}>
          Yes, HireNexus allows recruiters to review candidates, schedule interviews, and give feedback directly from mobile devices.
        </Typography>
      </AccordionDetails>
    </Accordion>

    {/* Q4 */}
    <Accordion sx={{ mb: 2, borderRadius: "10px !important" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Does it support collaborative hiring?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "#6b7280" }}>
          Yes, teams can collaborate, share feedback, and evaluate candidates together in real-time.
        </Typography>
      </AccordionDetails>
    </Accordion>

    {/* Q5 */}
    <Accordion sx={{ borderRadius: "10px !important" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Can I send offer letters electronically?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "#6b7280" }}>
          Yes, HireNexus supports digital document signing and offer letter management.
        </Typography>
      </AccordionDetails>
    </Accordion>

  </Box>

</Box>
<Footer />
      </Box>
    </>
  );
};

export default Home;