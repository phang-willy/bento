import { useRef } from "react";
import Footer from "@/components/base/Footer";
import Header from "@/components/base/Header";
import Main from "@/components/base/Main";
import { useHeaderOffset } from "@/hooks/useHeaderOffset";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const headerOffset = useHeaderOffset(mainRef);
  
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Header />
      <Main mainRef={mainRef} headerOffset={headerOffset} />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;