import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  // colors: {
  //   gray: {
  //     // 700: "#1f2733",
  //     // 700: "#17191c"
  //   },
  // },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: 
    {
      50: '#f2f2f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#262626',
      800: '#262626',
      900: '#1a1a1a',
    },

    teal: 
    {
      50: '#e1eeff',
      100: '#b7cefb',
      200: '#8cb2f3',
      300: '#07c',
      400: '#07c',
      500: '#07c',
      600: '#07c',
      700: '#07c',
      800: '#001647',
      900: '#00051d',
    }
    // ...
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
        fontFamily: 'Helvetica, sans-serif'
      },
      html: {
        fontFamily: 'Helvetica, sans-serif'
      }
    }),
  },
};
