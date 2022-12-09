import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    const isEnglish = localStorage.getItem("powerOverPainLang") === "en";
    if (isEnglish) setLanguage("en");
  }, []);

  const toggleLanguage = () => {
    const chosenLanguage = language === "en" ? "fr" : "en";
    localStorage.setItem("powerOverPainLang", chosenLanguage);
    setLanguage(chosenLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
