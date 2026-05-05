import { Routes, Route } from "react-router-dom";
import Home from "./users/pages/Home";
import Auth from "./pages/Auth"; 
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./users/pages/UserDashboard";
import CreatePost from "./users/pages/CreatePost";
import HeadDashboard from "./head/pages/HeadDashboard";
import ApplyNow from "./head/pages/ApplyNow";
import ManageCandidates from "./users/pages/ManageCandidates";
import AptitudeResult from "./head/pages/AptitudeResult";
import ViewJobs from "./head/pages/ViewJobs";
import MyApplication from "./head/pages/MyApplication";
import InterviewDetails from "./head/pages/InterviewDetails";
import PaymentError from './head/pages/PaymentError';
import PaymentSuccess from './head/pages/PaymentSuccess';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51TPya0RJH00tTGQXLC7490bgX9wJ3wcYVafuvJ3tfnpaf01Y9rSHLjBt75QfrAwiRR2vTdUUthSUaeTnBZBbdMhw00ptcpmMWT");

function App() {
  return (
    <Elements stripe={stripePromise}>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/head-dashboard" element={<HeadDashboard />} />
      <Route path="/apply-now" element={<ApplyNow />} /> 
      <Route path="/manage-candidates" element={<ManageCandidates />} /> 
      <Route path="/aptitude-result" element={<AptitudeResult />} />
      <Route path="/view-jobs" element={<ViewJobs />} />
      <Route path="/my-application" element={<MyApplication />} />
      <Route path="/interview-details/:id" element={<InterviewDetails />} />
       <Route path='/payment-success' element={<PaymentSuccess/>}/>
        <Route path='/payment-error' element={<PaymentError/>}/>
        <Route path="/admin" element={<AdminDashboard />} />

    </Routes>
    </Elements>
  );
}

export default App;