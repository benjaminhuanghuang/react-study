import { useState, useEffect, useRef } from "react";
import i18n from "../i18n";

type Language = "enUS" | "zhCN" | "zhTW"; 

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const translations: Record<Language, { name: string; flag: string }> = {
    enUS: { name: "English", flag: "us" },
    zhCN: { name: "简体中文", flag: "cn" },
    zhTW: { name: "繁體中文", flag: "tw" },
  };

  const handleSelect = (event: React.MouseEvent<HTMLLIElement>, lang: Language) => {
    event.stopPropagation();
    setOpen(false);
    if (!lang) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); // Save to localStorage
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Check if click is outside the dropdown
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener to document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center border p-2 rounded w-[112px]"
        onClick={handleButtonClick}
      >
        <span
          className={`fi fi-${
            translations[i18n.language as Language].flag
          } mr-2`}
        ></span>
        {translations[i18n.language as Language].name}
      </button>
      {open && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 mt-2 border rounded z-10 bg-light-surfaceContainer dark:bg-dark-surfaceContainer "
        >
          {Object.entries(translations).map(([key, value]) => (
            <li
              key={key}
              className="cursor-pointer p-2 flex items-center  hover:bg-light-surfaceVariant hover:dark:bg-dark-surfaceVariant w-[110px]"
              onClick={(event: React.MouseEvent<HTMLLIElement>) => handleSelect(event, key as Language)}
            >
              <span className={`fi fi-${value.flag} mr-2`}></span> {value.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;