import React, { FC, useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import "./Toggle.scss";

const Toggle: FC = () => {
  const isBrowser = typeof window !== "undefined";
  const systemTheme = isBrowser ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
  const userTheme = isBrowser ? localStorage.getItem("theme") : null;
  const [theme, setTheme] = useState<string | null>(null);
  
  const handleChange = () => {
    if(document.documentElement.classList.contains("dark")){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
      return;
    }
    else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const handleCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemTheme)){
      document.documentElement.classList.add("dark");
      setTheme("dark");
      return;
    }
    setTheme("light");
  }

  useEffect(() => {
    handleCheck();
  }, [theme])
  

  return (
    <div className='toggle'>
        <div className={`toggle__button ${theme === "dark" ? "" : "light"}`} onClick={handleChange}>
          {theme === "dark" ? <MdDarkMode className="toggle__button__icon"/> : <MdLightMode className="toggle__button__icon light"/>}
        </div>
    </div>
  )
}

export default Toggle;