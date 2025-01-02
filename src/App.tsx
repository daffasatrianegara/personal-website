import { ThemeProvider } from "@/components/theme-provider";
import MainLayout from "./layouts/main.layout";
import { Card } from "./components/ui/card";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <MainLayout>
        <Card>
          <h1>test</h1>
        </Card>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
