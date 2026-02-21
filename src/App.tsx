import { ThemeProvider } from '@/hooks/ThemeProvider';
import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';
import Main from '@/components/base/Main';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App;