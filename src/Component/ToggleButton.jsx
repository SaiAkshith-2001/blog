import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
const ThemeToggleButton = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <LightModeIcon /> : <NightlightIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton;