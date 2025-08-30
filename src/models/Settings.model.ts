export interface SettingsState {
  language: "es" | "en";
  fontSize: number;
}

export interface SettingsContextProps extends SettingsState {
  toggleLanguage: () => void;
  changeFontSize: (font: number) => void;
}
