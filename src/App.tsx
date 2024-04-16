import { ThemeProvider } from "styled-components";
import { whiteTheme } from "./styles/themes/whiteMode";
import { darkTheme } from "./styles/themes/darkMode";
import { GlobalStyles } from "./styles/global";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";

export function App() {  
  const [theme, setTheme] = useState("dark")
  const isDarkTheme : boolean = theme === "dark"
  const toggleTheme = (checked: boolean) => {
      setTheme(checked ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={isDarkTheme ? whiteTheme : darkTheme}>
      <GlobalStyles/>
        <HomePage toggleTheme={toggleTheme}/>
    </ThemeProvider>
  )
}
