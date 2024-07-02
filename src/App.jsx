import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, User, Briefcase, Shield, Settings } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import Visitor from "./pages/Visitor.jsx";
import Client from "./pages/Client.jsx";
import Exploitation from "./pages/Exploitation.jsx";
import Administration from "./pages/Administration.jsx";
import SystemAdmin from "./pages/SystemAdmin.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Visitor",
    to: "/visitor",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Client",
    to: "/client",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Direction d'Exploitation",
    to: "/exploitation",
    icon: <Shield className="h-4 w-4" />,
  },
  {
    title: "Conseil d'Administration",
    to: "/administration",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Administrateur Système",
    to: "/system-admin",
    icon: <Settings className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="visitor" element={<Visitor />} />
              <Route path="client" element={<Client />} />
              <Route path="exploitation" element={<Exploitation />} />
              <Route path="administration" element={<Administration />} />
              <Route path="system-admin" element={<SystemAdmin />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;