import "./App.css";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import ThemeProvider from "./context/ThemeContext";
import LoggedUsers from "./components/LogguedUsers";
import { UserProvider } from "./context/UserContext";
import { SettingsProvider } from "./context/SettingsContext";
import LanguageButton from "./components/LanguageButton";
import FontSizeButton from "./components/FontSizeButton";

function App() {
  return (
    <>
      <SettingsProvider>
        <FontSizeButton />
        <LanguageButton />

        <ThemeProvider>
          <Header />
          <ThemeButton />
        </ThemeProvider>

        <UserProvider>
          <LoggedUsers />
        </UserProvider>
      </SettingsProvider>
    </>
  );
}

export default App;
