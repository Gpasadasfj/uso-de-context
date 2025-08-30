import { createContext, useState } from "react";
import type { Params } from "../models/Params.model";
import type {
  SettingsContextProps,
  SettingsState,
} from "../models/Settings.model";

const defaultSettings: SettingsState = {
  language: "es",
  fontSize: 16,
};

const SettingsContext = createContext<SettingsContextProps>({
  ...defaultSettings,
  toggleLanguage: () => {},
  changeFontSize: () => {},
});

function SettingsProvider({ children }: Params) {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);

  const toggleLanguage = () => {
    setSettings(
      settings.language === "es"
        ? { ...settings, language: "en" }
        : { ...settings, language: "es" }
    );
  };

  const changeFontSize = (font?: number) => {
    setSettings({ ...settings, fontSize: font ?? 16 });
  };

  return (
    <>
      <SettingsContext.Provider
        value={{ ...settings, toggleLanguage, changeFontSize }}
      >
        <div style={{fontSize:settings.fontSize}}>
        {children}
        </div>
      </SettingsContext.Provider>
    </>
  );
}

export { SettingsProvider, SettingsContext };
