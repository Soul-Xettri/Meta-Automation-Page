import "@mantine/core/styles.css";
import { MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import '@mantine/carousel/styles.css';
import AutomationPage from "./pages/AutomationPage";

function App() {
  return (
    <>
      <MantineProvider theme={theme}>
        <AutomationPage />
      </MantineProvider>
    </>
  );
}

export default App;
