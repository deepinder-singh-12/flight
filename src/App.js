import { ThemeProvider, createTheme } from "@mui/material";
import TopBar from "./components/Layout/TopBar";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ebba34",
      },
      secondary: {
        main: "#1F2328",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
    </ThemeProvider>
  );
}

export default App;
