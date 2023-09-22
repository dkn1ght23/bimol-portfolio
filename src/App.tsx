import AppRouter from "./routes/Router";
import "./assets/scss/main.scss";
import { ConfigProvider } from "antd";
import { antdThemeToken } from "./config/antdTheme";

function App() {
  return (
    <ConfigProvider theme={antdThemeToken}>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
