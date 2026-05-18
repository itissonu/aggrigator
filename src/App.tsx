import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Fleet from "./pages/Fleet";
import EVCompliance from "./pages/EVCompliance";
import WalletPage from "./pages/Wallet";
import Grievances from "./pages/Grievances";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import Offboarding from "./pages/Offboarding";
import Penalties from "./pages/Penalties";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import ChangePassword from "./pages/ChangePassword";
import RegisterPage from "./pages/Register";
import AdminApplications from "./pages/AdminApplications";
import AdminFleetVerify from "./pages/AdminFleetVerify";
import AdminEVMonitor from "./pages/AdminEVMonitor";
import AdminPenalties from "./pages/AdminPenalties";
import AdminGrievances from "./pages/AdminGrievances";
import AdminAggregators from "./pages/AdminAggregators";
import AdminAggregatorDetail from "./pages/AdminAggregatorDetail";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/offboarding" element={<Offboarding />} />
            <Route path="/ev-compliance" element={<EVCompliance />} />
            <Route path="/penalties" element={<Penalties />} />
            <Route path="/history" element={<History />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/grievances" element={<Grievances />} />
            <Route path="/help" element={<Help />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/applications" element={<AdminApplications />} />
            <Route path="/admin/fleet-verify" element={<AdminFleetVerify />} />
            <Route path="/admin/ev-monitor" element={<AdminEVMonitor />} />
            <Route path="/admin/penalties" element={<AdminPenalties />} />
            <Route path="/admin/grievances" element={<AdminGrievances />} />
            <Route path="/admin/aggregators" element={<AdminAggregators />} />
            <Route path="/admin/aggregators/:id" element={<AdminAggregatorDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
