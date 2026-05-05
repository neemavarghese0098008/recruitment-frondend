
import React, { useState } from 'react';
import { Box, Typography, Button } from "@mui/material";

import { makepaymentAPI } from '../../services/allAPIs';
import { useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";


function InterviewDetails() {

  // ✅ ALL HOOKS MUST BE HERE (TOP INSIDE COMPONENT)
  const navigate = useNavigate();
  const { id } = useParams();




 const handlePayment = async () => {
  try {
    const reqBody = {
      amount: 500,
    };

    const response = await makepaymentAPI(reqBody);

    // ✅ NEW STRIPE REDIRECT METHOD
    window.location.href = response.data.url;

  } catch (err) {
    console.log(err);
    navigate("/payment-error");
  }
};

  return (


    <div>
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeNAkeHrQEHSrK5G2YLhX2TwIG0xJ4Ezqyw&s"
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
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1e1b4b",
              mb: 2
            }}
          >
            You landed an interview...now what?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              lineHeight: 1.6,
              mb: 3,
              color: "#E0ECFF", // 🔵 soft light blue text
            }}
          >
            “ We’re looking for ambitious, compassionate, and curious people who will support us in improving the health and vitality of those we serve. Use these step-by-step interview tips to help put your best foot forward.”
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
            - SMRITHI MANDHANA, HIRENEXUS HR HEAD
          </Typography>
        </Box>
      </Box>
      {/* ================= SPACING ================= */}
      <Box mt={6} />
      {/* ================= TIPS SECTION ================= */}
      <Box sx={{ px: 4, mt: 3 }}>
        {/* TIP 1 */}
        <Typography sx={{ fontSize: "18px", lineHeight: 1.7, mb: 3 }}>
          <b style={{ color: "#1e1b4b" }}>#1: Do your research - </b>
          Spend some time reviewing our website, rereading the job description,
          and researching the line of business the position you applied to falls
          within. Knowing what’s going on in our industry and having a general
          understanding of our services, products, customers, and competitors will
          help you feel more confident.
        </Typography>

        {/* TIP 2 */}
        <Typography sx={{ fontSize: "18px", lineHeight: 1.7, mb: 3 }}>
          <b style={{ color: "#1e1b4b" }}>#2: Know your strengths - </b>
          No one knows you better than you. Take some time before your interview to
          reflect on your career. What are you most proud of? What do you want to
          keep working on? What makes you uniquely prepared for this role?
          Highlight your successes and communicate the impact you've made in past
          roles.
        </Typography>

        {/* TIP 3 */}
        <Typography sx={{ fontSize: "18px", lineHeight: 1.7, mb: 3 }}>
          <b style={{ color: "#1e1b4b" }}>#3: Practice answers - </b>
          Take time to research commonly asked interview questions and practice responding, it’ll help you feel more prepared. Keep your answers short and focused. When possible, use specific examples and quantify your results. Ask someone to listen to your answers and provide feedback or record yourself and listen for areas to improve. Repeat until you feel comfortable and confident.
        </Typography>

        {/* TIP 4 */}
        <Typography sx={{ fontSize: "18px", lineHeight: 1.7, mb: 3 }}>
          <b style={{ color: "#1e1b4b" }}>
            #4: Planning and preparation are key -{" "}
          </b>
          Remember, you are the focus of the interview. If your interview is on-site, don't forget to bring any materials requested by the Hiring Manager and plan to arrive 10-15 minutes early. If you’re interviewing virtually, make sure you are comfortable and in a well-lit space prior to joining the meeting.
        </Typography>

        {/* TIP 5 */}
        <Typography sx={{ fontSize: "18px", lineHeight: 1.7, mb: 3 }}>
          <b style={{ color: "#1e1b4b" }}>#5: Be attentive - </b>
          You’ll want to listen to each question carefully and give your undivided attention to the interviewer. When answering, maintain eye contact and remain engaged.
        </Typography>

        {/* TIP 6 */}
        <Typography sx={{ fontSize: "18px", lineHeight: 1.7, mb: 3 }}>
          <b style={{ color: "#1e1b4b" }}>#6: Ask questions - </b>
          The best leaders are constant learners. Be inquisitive and remember, you're learning about us as we're learning about you. Don’t be afraid to interview us, too.
        </Typography>

        {/* TIP 7 */}
        <Typography sx={{ fontSize: "18px", lineHeight: 1.7 }}>
          <b style={{ color: "#1e1b4b" }}>#7: Follow up - </b>
          Send a “Thank you” notification via email, mail, or phone to anyone you speak with during the interview process. Be sure to ask about next steps if it's not covered in the interview.
        </Typography>
      </Box>
      {/* BUTTON RIGHT BOTTOM */}

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button
          onClick={handlePayment}
          variant="contained"
          sx={{
            backgroundColor: "#2563EB",
            borderRadius: "30px",
            px: 4,
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#1d4ed8"
            }
          }}
        >
          Proceed to Payment
        </Button>
      </Box>


    </div>
  )
}

export default InterviewDetails
