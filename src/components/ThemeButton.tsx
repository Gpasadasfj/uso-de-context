import { useTheme } from "../context/useTheme";
import { useSettings } from "../context/useSettings";

export default function ThemeButton() {
  const { language } = useSettings();
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{language === "es" ? "Cambiar tema" : "Toggle theme"}</button>;
}
