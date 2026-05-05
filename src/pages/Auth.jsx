import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../services/allAPIs";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { googleLoginAPI } from "../services/allAPIs";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { registerAPI } from "../services/allAPIs";

function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // to hold userdetails from the form
  const [userDetails, setUserDetails] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  //handle google login
  const handleGoogleLogin = async (credential) => {
    console.log("Google Credential Response:", credential);

    const decoded = jwtDecode(credential.credential);
    console.log("Decoded JWT:", decoded);

    try {
      const response = await googleLoginAPI({
        email: decoded.email,
        username: decoded.name,
        password: decoded.sub,
        profile: {
          firstName: decoded.given_name,
          lastName: decoded.family_name,
          picture: decoded.picture
        }
      });

      console.log("Google Login Response:", response);

      // ✅ STORE SESSION (VERY IMPORTANT)
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("existingUser", JSON.stringify(response.data.user));

      // ✅ REDIRECT (THIS WAS MISSING)
      navigate("/Head-dashboard");

    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  //handle register function
  const handleRegister = async () => {
    console.log(userDetails);
    if (userDetails.username && userDetails.email && userDetails.password) {
      try {
        const response = await registerAPI(userDetails)
        console.log(response);
        if (response.status === 201) {

          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          setTimeout(() => {
            setIsLogin(true); // switch to login form
          }, 2000);
          setUserDetails({
            username: "",
            email: "",
            password: "",
          })

        }
        else {
          console.log(response);
        }

      } catch (err) {
        console.log(err);

        toast.error(err.response?.data?.message || "Something went wrong", {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
    else {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    }
  }

  //handle login function 
  const handleLogin = async () => {
    if (userDetails.email && userDetails.password) {
      try {
        const response = await loginAPI({
          email: userDetails.email,
          password: userDetails.password
        });
        if (response.status === 200 && response.data?.existingUser) {
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("existingUser", JSON.stringify(response.data.existingUser));
          // navigate("/Head-dashboard"); //after sucessfully login it will redirect to head dashboard
          // ?window.location.reload();

          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
            transition: Bounce,
          });

          const role = response.data.existingUser.role;

          // ✅ ROLE-BASED NAVIGATION
          if (role === "admin") {
            navigate("/admin");
          } else if (role === "hr") {
            navigate("/dashboard");
          } else {
            navigate("/Head-dashboard");
          }

          setUserDetails({
            username: "",
            email: "",
            password: "",
          });

          return;
        }

      } catch (err) {
        toast.error(
          err?.response?.data?.message || "Login failed",
          {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
            transition: Bounce,
          }
        );
      }

    } else {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "url('https://cdn.techjockey.com/web/assets/images/techjockey/products/screenshots/11987_peopleHumHRIS.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      {/* CARD */}
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "400px",
          p: 4,
          borderRadius: "16px",
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mb: 3, fontWeight: 600 }}
        >
          {isLogin ? "Welcome Back" : "Create your Account"}
        </Typography>
        <form autoComplete="off">
          {/* REGISTER FIELDS */}
          {!isLogin && (
            <>

              <TextField
                autoComplete="off"
                value={userDetails.username}
                onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                fullWidth
                placeholder="Full Name"
                sx={{ mb: 2 }}
              />

            </>
          )}

          {/* COMMON */}
          <TextField
            autoComplete="off"
            value={userDetails.email}
            onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
            fullWidth
            placeholder="Business Email"
            sx={{ mb: 2 }}
          />

          <TextField
            autoComplete="new-password"
            value={userDetails.password}
            onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
            fullWidth
            type="password"
            placeholder="Password"
            sx={{ mb: 2 }}
          />
        </form>


        {/* FORGOT */}
        {isLogin && (
          <Typography
            sx={{
              textAlign: "right",
              fontSize: "13px",
              mb: 2,
              cursor: "pointer",
              color: "#1976d2",
            }}
          >
            Forgot password?
          </Typography>
        )}
        <Button
          onClick={isLogin ? handleLogin : handleRegister}
          fullWidth
          sx={{
            backgroundColor: "#2f3e56",
            color: "#fff",
            borderRadius: "25px",
            py: 1.5,
            mb: 2,
            fontWeight: 600,
            "&:hover": { backgroundColor: "#24324a" },
          }}
        >
          {isLogin ? "SIGN IN" : "CONTINUE"}
        </Button>

        <Divider sx={{ my: 2 }}>Or continue with</Divider>


        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
            handleGoogleLogin(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />

        {/* TOGGLE */}
        <Typography sx={{ mt: 3, textAlign: "center" }}>
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                style={{ color: "#1976d2", cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                Create one
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                style={{ color: "#1976d2", cursor: "pointer" }}
                onClick={() => setIsLogin(true)}
              >
                Sign in
              </span>
            </>
          )}
        </Typography>
        <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce} />
      </Paper>
    </Box>
  );
}

export default Auth;