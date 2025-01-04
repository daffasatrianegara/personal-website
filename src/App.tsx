import { ThemeProvider } from "@/components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/landing.page";
// import MainLayout from "./components/layouts/main.layout";
// import { Card } from "./components/ui/card";
// import contentMd from "@/contents/example.md";
// import MarkdownRenderer from "./components/ui/markdown-renderer";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <LandingPage />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
