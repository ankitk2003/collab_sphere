import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./components/Home";
import Choose from "./components/Choose";
import CreatorSignup from "./components/CreatorSignup";
import BusinessSignup from "./components/BusinessSignup";
import Login from "./components/Login";
import CreatorForm from "./components/CreatorForm";
import BusinessForm from "./components/BusinessForm";
import CreatorDashboard from "./components/CreatorDashboard";
import BusinessDashboard from "./components/BusinessDashboard";
import ProtectedRoute from "./components/ProtectedRoute"; // Correct relative path

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          wqer
          <Route path="/choose-role" element={<Choose />} />
          <Route path="/creator-signup" element={<CreatorSignup />} />
          <Route path="/business-signup" element={<BusinessSignup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/creator-form"
            element={
              <ProtectedRoute>
                <CreatorForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/business-form"
            element={
              <ProtectedRoute>
                <BusinessForm />
              </ProtectedRoute>
            }
          />
          {/* ✅ Protect the Creator Dashboard */}
          <Route
            path="/creator-dashboard"
            element={
              <ProtectedRoute>
                <CreatorDashboard />
              </ProtectedRoute>
            }
          />
          {/* ✅ Protect the Business Dashboard */}
          <Route
            path="/business-dashboard"
            element={
              <ProtectedRoute>
                <BusinessDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
