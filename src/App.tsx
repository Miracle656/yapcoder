import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppLayout } from "@/components/layout/AppLayout";
import { Packages } from "@/pages/Packages";
import { Projects } from "@/pages/Projects";
import { Developers } from "@/pages/Developers";
import { DeveloperProfile } from "@/pages/DeveloperProfile";
import { Campaigns } from "@/pages/Campaigns";
import { CampaignDetail } from "@/pages/CampaignDetail";
import { Dashboard } from "@/pages/Dashboard";
import Tools from "@/pages/Tools";
import "./App.css";

import { LandingPage } from "@/pages/LandingPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="packages" element={<Packages />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tools" element={<Tools />} />
            <Route path="developers" element={<Developers />} />
            <Route path="developers/:username" element={<DeveloperProfile />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="campaigns/:id" element={<CampaignDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
