import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <HomePage/>
    </ThemeProvider>
  )
}
