import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

import LandingPage from "./pages/landing.page";
import CertificatesPage from "./pages/certificates";
import ProjectsPage from "./pages/projects";
import DetailProjectPage from "./pages/detail.project";
import ExperiencesPage from "./pages/experiences";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 10, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <LandingPage />
            </PageWrapper>
          }
        />
        <Route
          path="/certificates"
          element={
            <PageWrapper>
              <CertificatesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <ProjectsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PageWrapper>
              <DetailProjectPage />
            </PageWrapper>
          }
        />
        <Route
          path="/experiences"
          element={
            <PageWrapper>
              <ExperiencesPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <AnimatedRoutes />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
