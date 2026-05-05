import React, { useState, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { useNavigate , useLocation } from "react-router-dom"


const steps = ["Applicant Address", "Official Details", "Review Application"];




// ================= STEP 1 =================
const Step1 = ({ formData, handleChange, handleNext }) => (
  <Paper sx={{ p: 4, mt: 3, maxWidth: 700, mx: "auto" }}>
    <Typography variant="h5">Personal Information</Typography>

    <Stack spacing={3} sx={{ mt: 2 }}>
      <TextField label="First Name *" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth />
      <TextField label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} fullWidth />
      <TextField label="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth />
      <TextField label="Street Address (Line 1) *" name="address1" value={formData.address1} onChange={handleChange} fullWidth />
      <TextField label="Address (Line 2)" name="address2" value={formData.address2} onChange={handleChange} fullWidth />
      <TextField label="City *" name="city" value={formData.city} onChange={handleChange} fullWidth />
      <TextField label="Zip / Postal Code *" name="zip" value={formData.zip} onChange={handleChange} fullWidth />
      <TextField label="Email Address *" name="email" value={formData.email} onChange={handleChange} fullWidth />
      <TextField label="Primary Contact Number *" name="phone" value={formData.phone} onChange={handleChange} fullWidth />
    

      <Button variant="contained" onClick={handleNext}>NEXT</Button>
    </Stack>
  </Paper>
);

// ================= STEP 2 =================
const Step2 = ({ formData, handleChange, handleNext, handleBack, file, handleFileChange }) => (
  <Box>
    <Typography variant="h6">Education</Typography>

    <TextField label="Institution *" name="institution" value={formData.institution} onChange={handleChange} fullWidth />
    <TextField label="Program *" name="program" value={formData.program} onChange={handleChange} fullWidth />

    <Divider sx={{ my: 2 }} />

    <Typography variant="h6">Work Experience</Typography>
    <TextField label="Company Name" name="company" value={formData.company} onChange={handleChange} fullWidth />
    <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} fullWidth />

    <Divider sx={{ my: 2 }} />

    <Typography variant="h6">Resume Upload</Typography>

    <Button variant="outlined" component="label" fullWidth>
      Choose File
      <input hidden type="file" onChange={handleFileChange} />
    </Button>

    {file && <Typography mt={1}>{file.name}</Typography>}

    <TextField
      label="Comments about the file"
      name="comments"
      value={formData.comments}
      onChange={handleChange}
      fullWidth
      multiline
      rows={3}
    />

    <Divider sx={{ my: 2 }} />

    <Typography variant="h6">Job Specific Informations</Typography>

    <TextField
  select
  label="Are you legally authorized to work?"
  name="authorized"
  value={formData.authorized}
  onChange={handleChange}
  fullWidth
  SelectProps={{ native: true }}
  InputLabelProps={{ shrink: true }}
>
      <option value="">Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </TextField>

    <br /><br/>


    <TextField
  select
  label="Work Country"
  name="workCountry"
  value={formData.workCountry}
  onChange={handleChange}
  fullWidth
  SelectProps={{ native: true }}
  InputLabelProps={{ shrink: true }}
>
      <option value="">No Selection</option>
      <option value="india">India</option>
      <option value="usa">USA</option>
    </TextField>
    <br /><br/>

    <TextField
  select
  label="Visa Status"
  name="visaStatus"
  value={formData.visaStatus}
  onChange={handleChange}
  fullWidth
  SelectProps={{ native: true }}
  InputLabelProps={{ shrink: true }}
>
      <option value="">No Selection</option>
      <option value="citizen">Citizen</option>
      <option value="work_visa">Work Visa</option>
      <option value="student">Student</option>
    </TextField>
    <br /><br/>

    <TextField
  select
  label="Do you require sponsorship now or in the future?"
  name="sponsorship"
  value={formData.sponsorship}
  onChange={handleChange}
  fullWidth
  SelectProps={{ native: true }}
  InputLabelProps={{ shrink: true }}
>
      <option value="">No Selection</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </TextField>
    <br /><br/>

    <TextField
  select
  label="Citizenship"
  name="citizenship"
  value={formData.citizenship}
  onChange={handleChange}
  fullWidth
  SelectProps={{ native: true }}
  InputLabelProps={{ shrink: true }}
>
  

      <option value="">No Selection</option>
      <option value="india">India</option>
      <option value="usa">USA</option>
    </TextField>
    <br /><br/> 
    <TextField
      label="Date of Birth"
      type="date"
      name="dob"
      value={formData.dob}
      onChange={handleChange}
      fullWidth
      InputLabelProps={{ shrink: true }}
    />
    <br /><br/>
    <TextField
  select
  label="Government ID"
  name="govt"
  value={formData.govt}
  onChange={handleChange}
  fullWidth
  SelectProps={{ native: true }}
  InputLabelProps={{ shrink: true }}
>
      <option value="">No Selection</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </TextField>

    <Box display="flex" justifyContent="space-between" mt={2}>
      <Button onClick={handleBack}>Previous</Button>
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </Box>
  </Box>
);

// ================= STEP 3 =================
const Step3 = ({ formData, handleBack, handleSubmit, file, openPopup, navigate }) => (
  <Box>
    <Typography variant="h6">Review Application</Typography>

    {/* PERSONAL */}
    <Typography mt={2}><b>Name:</b> {formData.firstName} {formData.middleName} {formData.lastName}</Typography>
    <Typography><b>Email:</b> {formData.email}</Typography>
    <Typography><b>Phone:</b> {formData.phone}</Typography>
    <Typography>
      <b>Address:</b> {formData.address1}, {formData.address2}, {formData.city} - {formData.zip}
    </Typography>

    {/* EDUCATION */}
    <Typography mt={2}><b>Institution:</b> {formData.institution}</Typography>
    <Typography><b>Program:</b> {formData.program}</Typography>

    {/* WORK */}
    <Typography mt={2}><b>Company:</b> {formData.company}</Typography>
    <Typography><b>Job Title:</b> {formData.jobTitle}</Typography>

    {/* JOB SPECIFIC */}
    <Typography mt={2}><b>Authorized:</b> {formData.authorized}</Typography>
    <Typography><b>Work Country:</b> {formData.workCountry}</Typography>
    <Typography><b>Visa Status:</b> {formData.visaStatus}</Typography>
    <Typography><b>Sponsorship:</b> {formData.sponsorship}</Typography>
    <Typography><b>Citizenship:</b> {formData.citizenship}</Typography>
    <Typography><b>DOB:</b> {formData.dob}</Typography>
    <Typography><b>Govt Work:</b> {formData.govt}</Typography>

    {/* FILE */}
    <Typography mt={2}><b>Resume:</b></Typography>
    {file ? (
      <>
        <Typography>{file.name}</Typography>
       <Button
        onClick={() => {
    if (file?.data) {
      window.open(file.data);
    } else {
      alert("No resume uploaded");
    }
  }}
>
  View Resume
</Button>
      </>
    ) : (
      <Typography>No file uploaded</Typography>
    )}

  

    {/* BUTTONS */}
    <Box mt={2}>
      <Button onClick={handleBack}>Previous</Button>
      <Button variant="contained" onClick={handleSubmit}>
  Submit
</Button>
    </Box>
    <Dialog
  open={openPopup}
  maxWidth="xs"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: "16px",
      p: 4,
      textAlign: "center"
    }
  }}
>
  {/* GREEN CHECK */}
  <Box
    sx={{
      width: 80,
      height: 80,
      borderRadius: "50%",
      backgroundColor: "#22c55e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
      mb: 3,
      animation: "scaleIn 0.4s ease"
    }}
  >
    <Typography
      sx={{
        color: "#fff",
        fontSize: "36px",
        fontWeight: "bold",
        animation: "fadeIn 0.6s ease"
      }}
    >
      ✓
    </Typography>
  </Box>

  {/* TITLE */}
  <Typography sx={{ fontSize: "22px", fontWeight: 700, mb: 1 }}>
    Application Submitted!
  </Typography>

  {/* MESSAGE */}
  <Typography sx={{ color: "#6b7280", mb: 3 }}>
    Your application has been successfully submitted.
    Redirecting to dashboard...
  </Typography>

  {/* BUTTON */}
  <Button
    variant="contained"
    onClick={() => navigate("/head-dashboard")}
    sx={{
      backgroundColor: "#2563EB",
      borderRadius: "30px",
      px: 4,
      py: 1.2,
      fontWeight: 600,
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#1E40AF"
      }
    }}
  >
    Go Now
  </Button>

  {/* ANIMATION */}
  <style>
    {`
      @keyframes scaleIn {
        from { transform: scale(0); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}
  </style>
</Dialog>
  </Box>
);

// ================= MAIN =================
function ApplyNow() {
  const location = useLocation();
const job = location.state;

  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
   useEffect(() => {
    if (openPopup) {
      const timer = setTimeout(() => {
        navigate("/head-dashboard");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [openPopup]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({

    firstName: "",
    middleName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    institution: "",
    program: "",
    company: "",
    jobTitle: "",
    comments: "",
    authorized: "",
    workCountry: "",
    visaStatus: "",
    sponsorship: "",
    citizenship: "",
    dob: "",
    govt: ""
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
 const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile({
        name: file.name,
        data: reader.result, // ✅ base64
      });
    };
    reader.readAsDataURL(file);
  }
};
  


  const handleSubmit = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    console.log(data);

    setOpenPopup(true);   // ✅ THIS OPENS POPUP

  } catch (err) {
    console.error(err);
  }
};

  
  return (
  <Box sx={{ p: 5 }}>
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>   {/* ✅ CLOSE HERE */}

    {activeStep === 0 && (
      <Step1
        formData={formData}
        handleChange={handleChange}
        handleNext={() => setActiveStep(1)}
      />
    )}

    {activeStep === 1 && (
      <Step2
        formData={formData}
        handleChange={handleChange}
        handleBack={() => setActiveStep(0)}
        handleNext={() => setActiveStep(2)}
        file={file}
        handleFileChange={handleFileChange}
      />
    )}

    {activeStep === 2 && (
      <Step3
    formData={formData}
    handleBack={() => setActiveStep(1)}
    handleSubmit={handleSubmit}
    file={file}
    openPopup={openPopup}   
    navigate={navigate}     
  />
    )}
  </Box>
);
}

export default ApplyNow;