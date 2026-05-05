import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Paymenterror() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ maxWidth: 520 }}>
          <Typography
            variant="h4"
            sx={{ color: "#d32f2f", fontWeight: "bold", mb: 2 }}
          >
            Sorry! Your Payment is Unsuccessful
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "#444" }}>
            We apologize for the inconvenience. Your interview payment was not successful. Please try again to proceed with the recruitment process.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/Head-dashboard")}
            sx={{
              backgroundColor: "#3f51b5",
              textTransform: "none",
              px: 4,
              py: 1.5,
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#2c3e9f",
              },
            }}
          >
            ⏪ Explore More jobs
          </Button>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/968/453/non_2x/failed-to-make-payment-by-credit-card-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-vector.jpg"
            alt="Payment Failed"
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Paymenterror;