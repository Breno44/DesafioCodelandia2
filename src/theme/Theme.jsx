import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bgSite: "#f6f6f6",
    bgCard: "#ebe9ea",

    white: "#fff",

    title: "#181818",
    text: "#474747",
  },
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
