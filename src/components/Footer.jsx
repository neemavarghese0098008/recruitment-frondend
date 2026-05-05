import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  Instagram,
} from "@mui/icons-material";

function Footer() {
  return (
    <Box>

      {/* ================= TOP CTA ================= */}
      <Box
        sx={{
          backgroundColor: "#2f3e56",
          color: "#fff",
          py: 6,
          px: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "36px", fontWeight: 500 }}>
            Ready to try HireNexus?
          </Typography>
          <Typography sx={{ mt: 1, color: "#d1d5db" }}>
            7 days. No strings attached. No credit card required.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2ea3c4",
            borderRadius: "30px",
            px: 4,
            py: 1.5,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#2389a8",
            },
          }}
        >
          Schedule a Demo
        </Button>
      </Box>

      {/* ================= MAIN FOOTER ================= */}
      <Box sx={{ backgroundColor: "#f8fafc", px: 10, py: 8 }}>

        <Grid container spacing={5}>

          {/* LEFT SECTION */}
          <Grid item xs={12} md={3}>

            {/* Logo */}
            <Typography sx={{ fontSize: "28px", color: "#2ea3c4", mb: 2 }}>
              HireNexus
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {[Facebook, Twitter, LinkedIn, YouTube, Instagram].map(
                (Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      backgroundColor: "#2f3e56",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#2ea3c4" },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                )
              )}
            </Box>

            {/* Locations */}
            <Typography sx={{ color: "#6b7280", mb: 2 }}>
              Silicon Valley | Singapore | Mumbai | Bangalore
            </Typography>

            {/* Certifications */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/ISO_9001-2015.svg/1200px-ISO_9001-2015.svg.png"
                sx={{ width: "60px" }}
              />
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/AICPA_logo.svg/1200px-AICPA_logo.svg.png"
                sx={{ width: "60px" }}
              />
            </Box>
          </Grid>

          {/* PLATFORM */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              PLATFORM
            </Typography>

            {[
              "Recruitment Management System",
              "Employee Engagement Software",
              "Performance Management System",
              "Human Resource Information System (HRIS)",
              "HR Analytics Software",
              "Electronic Signature Software",
              "Learning Management System (LMS)",
              "HR Chatbot",
              "Internal Communication Tool",
            ].map((item, i) => (
              <Typography key={i} sx={{ color: "#6b7280", mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Grid>

          {/* RESOURCES */}
          <Grid item xs={12} md={2}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              RESOURCES
            </Typography>

            {["Blog", "HR Glossary", "EBooks", "Webinars"].map((item, i) => (
              <Typography key={i} sx={{ color: "#6b7280", mb: 1 }}>
                {item}
              </Typography>
            ))}

            <Typography sx={{ fontWeight: 600, mt: 3 }}>
              ABOUT US
            </Typography>

            {["Our Story", "Customers", "Careers"].map((item, i) => (
              <Typography key={i} sx={{ color: "#6b7280", mb: 1 }}>
                {item}
              </Typography>
            ))}
          </Grid>

          {/* RIGHT LINKS */}
          <Grid item xs={12} md={2}>
            {[
              "PRICING",
              "PARTNER WITH US",
              "SECURITY",
              "INTEGRATIONS",
            ].map((item, i) => (
              <Typography
                key={i}
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

        </Grid>
      </Box>

    </Box>
  );
}

export default Footer;