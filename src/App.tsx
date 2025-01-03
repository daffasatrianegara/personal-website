import { ThemeProvider } from "@/components/theme-provider";
import MainLayout from "./components/layouts/main.layout";
import { Card } from "./components/ui/card";
import contentMd from "@/contents/example.md";
import MarkdownRenderer from "./components/ui/markdown-renderer";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <MainLayout>
        <Card className="p-5">
          <h1>test</h1>
          <MarkdownRenderer mdUrl={contentMd} />
        </Card>
        <br />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
