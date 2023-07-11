import { ThemeProvider, createTheme } from "@mui/material";
import TopBar from "./components/Layout/TopBar";
import TabsInfo from "./components/Layout/TabsInfo";

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
      <TabsInfo />
    </ThemeProvider>
  );
}

export default App;
