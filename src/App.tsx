import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/navBar/NavBar';
import Router from './routes/Router';
import LightTheme from './themes/lighTheme';
import DarkTheme from './themes/darkTheme';

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

export const SetThemeContext = React.createContext<any>('');
export const CurrentThemeContext = React.createContext<any>('');

function App(): JSX.Element {
  const [theme, setTheme] = useState('light');

  return (
    <CurrentThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <ThemeProvider theme={themes[theme as keyof typeof themes]}>
          <NavBar />
          <Router />
        </ThemeProvider>
      </SetThemeContext.Provider>
    </CurrentThemeContext.Provider>
  );
}

export default App;
