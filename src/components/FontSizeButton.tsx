import { useSettings } from "../context/useSettings";
import Select from "react-select";
import type { FontSizeOptionProps } from "../models/FontSizeOption.model";
import type { SingleValue } from "react-select";
import { FontSizeOptions } from "../data/FontSizeOptions.data";

export default function FontSizeButton() {
  const { language, fontSize, changeFontSize } = useSettings();
  const options = FontSizeOptions;

  return (
    <>
      <div>
        <h3>
          {language === "es" ? "Cambiar tamaño de texto" : "Change font size"}
        </h3>
        <Select
          value={options.find((o) => o.value === fontSize) || null}
          onChange={(e: SingleValue<FontSizeOptionProps>) => {
            if (e) changeFontSize(e.value);
          }}
          options={options}
        />
      </div>
    </>
  );
}
