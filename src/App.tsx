
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserTypeSelection from "./pages/UserTypeSelection";

// Individual auth pages
import IndividualSignIn from "./pages/individual/SignIn";
import IndividualSignUp from "./pages/individual/SignUp";

// Agency auth pages
import AgencySignIn from "./pages/agency/SignIn";
import AgencySignUp from "./pages/agency/SignUp";

// Dashboard pages
import UserDashboard from "./pages/dashboard/UserDashboard";
import AccountantDashboard from "./pages/dashboard/AccountantDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Auth Selection Page */}
              <Route path="/auth" element={<UserTypeSelection />} />
              
              {/* Individual Auth Routes */}
              <Route path="/individual/signin" element={<IndividualSignIn />} />
              <Route path="/individual/signup" element={<IndividualSignUp />} />
              
              {/* Agency Auth Routes */}
              <Route path="/agency/signin" element={<AgencySignIn />} />
              <Route path="/agency/signup" element={<AgencySignUp />} />
              
              {/* Legacy routes for backward compatibility */}
              <Route path="/signin" element={<UserTypeSelection />} />
              <Route path="/signup" element={<UserTypeSelection />} />
              
              {/* User Dashboard Routes */}
              <Route path="/dashboard/user" element={<UserDashboard />} />
              
              {/* Accountant/Agency Dashboard Routes */}
              <Route path="/dashboard/accountant" element={<AccountantDashboard />} />
              
              {/* Admin Dashboard Routes */}
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
