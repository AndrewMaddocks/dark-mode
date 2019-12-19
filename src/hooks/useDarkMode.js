import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("darkmode key");

  const toggleDarkMode = e => {
    e.preventDefault();

    return value ? setValue(false) : setValue(true);
    //return darkModeEnabled ? console.log("true") : console.log("false");
  };
  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);
  return [value, setValue, toggleDarkMode];
};
