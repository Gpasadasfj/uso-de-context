import { useSettings } from "../context/useSettings";

export default function LanguageButton() {
  const { toggleLanguage, language } = useSettings();

  return (
    <>
      <button onClick={() => toggleLanguage()}>
        {language === "es" ? "Español" : "English"}
      </button>
    </>
  );
}
