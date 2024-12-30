import { ThemeProvider } from "@/components/theme-provider";
import NavbarComponent from "./components/navbar";
import { Card } from "./components/ui/card";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NavbarComponent />
      <div className="px-16 mt-5">
        <Card>
          <h1>test</h1>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
