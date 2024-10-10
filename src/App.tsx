import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Educations';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#006D77' }, // Deep Teal
      secondary: { main: '#D9BF77' }, // Coral
      background: { default: '#F6F1D1' }, // Light Cream
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container maxWidth={false} disableGutters>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </Container>
    </ThemeProvider>
  );
};

export default App;
