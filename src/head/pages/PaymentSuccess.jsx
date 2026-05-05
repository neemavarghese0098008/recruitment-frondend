import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
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
        <Box sx={{ maxWidth: 500 }}>
          <Typography
            variant="h4"
            sx={{ color: "#3f51b5", fontWeight: "bold", mb: 2  }}
          >
            Congratulations
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "#444" }}>
            Your payment has been successfully received. This covers your interview fee along with lunch and snacks coupons. We look forward to seeing you at the interview and wish you the best of luck.
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
            src="https://funtura.in/wp-content/themes/funtura/assets/images/success.svg"
            alt="Payment Success"
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default PaymentSuccess;