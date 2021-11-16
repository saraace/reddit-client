import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Theme.styles";

interface ThemeProps {
	children: ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
