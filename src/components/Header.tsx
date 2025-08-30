import { useTheme } from "../context/useTheme";
import { useSettings } from "../context/useSettings"; 

export default function Header() {
  const { language } = useSettings();
  const { theme } = useTheme();
  const bkColor = theme === "light" ? "white" : "black";
  const color = theme === "light" ? "black" : "white";
  return (
    <header style={{ backgroundColor: bkColor, color: color }}>
      <p>{language === "es" ? "Hola mundo!" : "Hello world!"}</p>
    </header>
  );
}
