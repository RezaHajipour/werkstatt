// theme.js
import { createTheme } from "@material-ui/core";

const typography = {
    fontFamily: "roboto",
    htmlFontSize: 18,
    fontSize: 18,
    body1: {
        fontFamily: "roboto",
        color: "rgba(0,0,0,0.60)",
        fontSize: "18px",
        letterSpacing: "0.016em",
        lineHeight: "24px",
    },
};

// export const theme = createTheme({ typography });

export const theme = createTheme({ typography });
